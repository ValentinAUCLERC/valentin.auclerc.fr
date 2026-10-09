# valentin.auclerc.fr

Site personnel de Valentin Auclerc : portfolio et page de l'EIRL.

- [Astro](https://astro.build) en statique, FR (`/`) et EN (`/en/`)
- Aucun JS côté client, aucun cookie, polices auto-hébergées
- Déployé sur GitHub Pages à chaque push sur `main` (`.github/workflows/deploy.yml`)

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
```

Tout le texte (FR et EN) est dans `src/i18n/content.ts`.

## Mise en ligne

1. Repo GitHub public `ValentinAUCLERC/valentin.auclerc.fr`, puis Settings → Pages → Source : **GitHub Actions**
2. DNS OVH : `valentin  CNAME  valentinauclerc.github.io.`
3. Settings → Pages : domaine `valentin.auclerc.fr` (déjà présent dans `public/CNAME`), puis cocher **Enforce HTTPS**
