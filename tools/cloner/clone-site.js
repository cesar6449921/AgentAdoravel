const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuração
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';

/**
 * Função auxiliar para baixar arquivos
 */
function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(dest);

        const request = protocol.get(url, { headers: { 'User-Agent': USER_AGENT } }, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Falha ao baixar ${url}: Status ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        });

        request.on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

/**
 * Função auxiliar para buscar conteúdo de texto (HTML/CSS)
 */
function fetchContent(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function main() {
    const targetUrl = process.argv[2];

    if (!targetUrl) {
        console.log('❌ Uso: node clone-site.js <URL>');
        process.exit(1);
    }

    try {
        console.log(`🌐 Clonando: ${targetUrl}`);
        const urlObj = new URL(targetUrl);
        const domain = urlObj.hostname.replace(/[^a-z0-9]/gi, '_');
        const outputDir = path.join(__dirname, 'cloned_sites', domain);

        // Criar diretórios
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
        if (!fs.existsSync(path.join(outputDir, 'assets'))) fs.mkdirSync(path.join(outputDir, 'assets'));

        // 1. Baixar HTML
        console.log('📄 Baixando HTML...');
        let html = await fetchContent(targetUrl);

        // 2. Extrair e baixar imagens (básico)
        console.log('🖼️  Buscando imagens...');
        const imgRegex = /<img[^>]+src="([^">]+)"/g;
        let match;
        let imgCount = 0;

        while ((match = imgRegex.exec(html)) !== null) {
            let imgSrc = match[1];

            // Resolver URL relativa
            if (!imgSrc.startsWith('http')) {
                imgSrc = new URL(imgSrc, targetUrl).href;
            }

            const imgName = `image_${imgCount}${path.extname(imgSrc) || '.jpg'}`;
            const imgPath = path.join(outputDir, 'assets', imgName);

            try {
                await downloadFile(imgSrc, imgPath);
                // Atualizar referência no HTML
                html = html.replace(match[1], `assets/${imgName}`);
                imgCount++;
                process.stdout.write('.');
            } catch (e) {
                // Ignorar erros de imagem individual
            }
        }
        console.log(`\n✅ ${imgCount} imagens baixadas.`);

        // 3. Salvar HTML modificado
        fs.writeFileSync(path.join(outputDir, 'index.html'), html);
        console.log(`\n🎉 Site clonado com sucesso em: ${outputDir}`);
        console.log(`📂 Abra ${path.join(outputDir, 'index.html')} para visualizar.`);

    } catch (error) {
        console.error('❌ Erro fatal:', error.message);
    }
}

main();
