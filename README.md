# Kenneth Carredo — Portfolio

A single-page portfolio built with React and Vite. All content lives in
`frontend/src/data.js`; the resume download is `frontend/public/Kenneth_Carredo_Resume.pdf`.

## Develop

```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
```

## Deploy

The site builds into a small nginx image and runs behind the shared Caddy
proxy on the droplet, which handles HTTPS.

```bash
git pull && docker compose up -d --build
```
