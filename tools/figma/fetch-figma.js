const https = require('https');
const fs = require('fs');
const path = require('path');

// ========================================
// CONFIGURAÇÃO
// ========================================
const FIGMA_TOKEN = 'SEU_TOKEN_AQUI';
const FILE_ID = 'vUpOfpv6Bm2K0xV4qGhJpK'; // Bakery Shop Website
const NODE_ID = '0:1'; // Main page

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

/**
 * Converte cor RGB do Figma para HEX
 */
function rgbToHex(r, g, b) {
    const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Extrai todas as cores do design
 */
function extractColors(node, colors = new Set()) {
    if (node.fills && Array.isArray(node.fills)) {
        node.fills.forEach(fill => {
            if (fill.type === 'SOLID' && fill.color) {
                const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
                colors.add(hex);
            }
        });
    }

    if (node.children) {
        node.children.forEach(child => extractColors(child, colors));
    }

    return Array.from(colors);
}

/**
 * Extrai informações de tipografia
 */
function extractTypography(node, fonts = []) {
    if (node.style && node.style.fontFamily) {
        fonts.push({
            family: node.style.fontFamily,
            size: node.style.fontSize,
            weight: node.style.fontWeight,
            lineHeight: node.style.lineHeightPx
        });
    }

    if (node.children) {
        node.children.forEach(child => extractTypography(child, fonts));
    }

    return fonts;
}

/**
 * Busca dados do Figma via API
 */
function fetchFigmaNode() {
    const options = {
        hostname: 'api.figma.com',
        path: `/v1/files/${FILE_ID}/nodes?ids=${NODE_ID}`,
        method: 'GET',
        headers: {
            'X-Figma-Token': FIGMA_TOKEN
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Status: ${res.statusCode}, Data: ${data}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

// ========================================
// EXECUÇÃO PRINCIPAL
// ========================================
async function main() {
    try {
        console.log('🎨 Buscando design do Figma...\n');
        const fileData = await fetchFigmaNode();

        console.log('✅ Design encontrado!\n');
        console.log('📄 Nome do arquivo:', fileData.name);
        console.log('📅 Última modificação:', fileData.lastModified);

        const node = fileData.nodes[NODE_ID];
        if (node && node.document) {
            console.log('📋 Node:', node.document.name);
            console.log('📐 Tipo:', node.document.type);

            // Extrair cores
            console.log('\n🎨 Analisando cores...');
            const colors = extractColors(node.document);
            console.log(`   Encontradas ${colors.length} cores únicas`);
            console.log('   Principais:', colors.slice(0, 8).join(', '));

            // Extrair tipografia
            console.log('\n✍️ Analisando tipografia...');
            const fonts = extractTypography(node.document);
            const uniqueFonts = [...new Set(fonts.map(f => f.family))];
            console.log(`   Fontes usadas: ${uniqueFonts.join(', ')}`);

            // Salvar dados completos
            const outputFile = path.join(__dirname, 'figma-node-data.json');
            fs.writeFileSync(outputFile, JSON.stringify(fileData, null, 2));
            console.log(`\n💾 Dados completos salvos em: ${outputFile}`);

            // Salvar análise resumida
            const analysis = {
                file: {
                    name: fileData.name,
                    lastModified: fileData.lastModified
                },
                node: {
                    id: NODE_ID,
                    name: node.document.name,
                    type: node.document.type
                },
                colors: colors,
                typography: {
                    fonts: uniqueFonts,
                    sizes: [...new Set(fonts.map(f => f.size))].sort((a, b) => a - b),
                    weights: [...new Set(fonts.map(f => f.weight))].sort((a, b) => a - b)
                }
            };

            const analysisFile = path.join(__dirname, 'figma-analysis.json');
            fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
            console.log(`📊 Análise resumida salva em: ${analysisFile}`);

        } else {
            console.log('⚠️ Node não encontrado nos dados retornados');
        }

    } catch (error) {
        console.error('\n❌ Erro:', error.message);
        process.exit(1);
    }
}

main();
