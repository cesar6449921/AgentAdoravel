# Agent Tools Configuration

To emulate the "Lovable" experience, the agent should utilize the following tool mappings and strategies.

## 1. File Operations (The "Editor")
*   **Lovable Tool:** `read_file`, `write_file`, `search_replace`
*   **Our Mapping:**
    *   `view_file`: For reading context.
    *   `replace_file_content`: For precise edits (preferred over rewriting).
    *   `write_to_file`: For creating new components or pages.
    *   `list_dir`: To understand project structure.

## 2. Visuals & Assets (The "Designer")
*   **Lovable Tool:** `upload_image` (User to Agent), `generate_image` (Agent to Project)
*   **Our Mapping:**
    *   `generate_image`: Use this *proactively*. If the site needs a "Hero Image of a modern office", generate it immediately rather than using a placeholder.
    *   **Prompting Strategy:** "Professional, high-quality, web-optimized, [subject], [style keywords like 'minimalist', '4k', 'studio lighting']".

## 3. Intelligence & Context (The "Brain")
*   **Lovable Tool:** `search_codebase`, `read_console_logs`
*   **Our Mapping:**
    *   `codebase_search`: Use to find where styles or components are defined before editing.
    *   `run_command`: Use to run linters, type checks, or tests (`npm run lint`, `npm run build`).
    *   `read_terminal`: To debug build errors.

## 4. Project Scaffolding (The "Builder")
*   **Lovable Tool:** Internal templates.
*   **Our Mapping:**
    *   `run_command`: Use `npm create vite@latest` or similar to start projects.
    *   **Templates:** We can create a `templates/` folder with base `tailwind.config.ts` and `index.css` files to copy-paste for a quick start.

## 5. Deployment (The "Publisher")
*   **Lovable Tool:** Integration with Netlify/Vercel.
*   **Our Mapping:**
    *   `run_command`: `npx vercel` or `npx netlify deploy` (if the user is authenticated).

---

## "Turbo Mode" Workflow
To achieve the "Real-time" feel of Lovable:
1.  **User Request:** "Change the header color to dark blue."
2.  **Agent Action:**
    *   `view_file(index.css)` (Check current variables).
    *   `replace_file_content(index.css)` (Update `--primary` or header class).
    *   **Response:** "Updated header to Midnight Blue." (Concise).

## "Creation Mode" Workflow
To achieve the "One-shot" site creation:
1.  **User Request:** "Create a portfolio for a photographer."
2.  **Agent Action:**
    *   `write_to_file(index.css)`: Define black/white monochrome palette.
    *   `write_to_file(App.tsx)`: Scaffold layout.
    *   `write_to_file(components/Gallery.tsx)`: Create masonry grid.
    *   `generate_image(...)`: Create 3-4 sample photos.
    *   **Response:** "Portfolio created with a focus on visual hierarchy. I've added a masonry gallery and a contact section."
