# Lumivex Solutions web stranica

Moderna React + Vite web stranica za **Lumivex Solutions**, pripremljena za upload na GitHub i objavu preko GitHub Pages ili Vercel.

## Važna struktura stranice

- **Početna stranica ne prikazuje slike projekata.**
- Početna stranica koristi logo, apstraktne branding vizuale, usluge, proces rada, materijale i kontakt.
- **Projekti su izdvojeni na posebnoj stranici:** `#/projekti`.
- Ispravan Lumivex logo nalazi se u `src/assets/lumivex-logo.webp` i `src/assets/lumivex-logo.png`.
- Slike projekata nalaze se samo u `src/assets/projects/`.

## Bitno za GitHub Pages

Ovaj projekt je **React + Vite**, zato se ne smije objavljivati preko Jekyll načina `Deploy from a branch` s mapom `/docs`.

Ispravna postavka je:

1. GitHub repository → **Settings**
2. **Pages**
3. **Build and deployment**
4. Pod **Source** odabrati: **GitHub Actions**
5. Spremiti postavku
6. Nakon toga napraviti novi commit/push

U projektu postoji workflow:

```text
.github/workflows/deploy.yml
```

Taj workflow sam builda projekt i objavljuje mapu `dist`.

## Ako se pojavi Jekyll greška

Ako dobiješ grešku tipa:

```text
Jekyll::Converters::Scss
No such file or directory - /github/workspace/docs
```

to znači da GitHub još uvijek pokušava objaviti stranicu iz mape `/docs` preko Jekylla. Rješenje je promijeniti **Settings → Pages → Source** na **GitHub Actions**.

Dodana je i datoteka:

```text
public/.nojekyll
```

koja se automatski kopira u `dist` i sprječava Jekyll obradu objavljene stranice.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Nakon toga otvori adresu koju Vite ispiše u terminalu, najčešće:

```bash
http://localhost:5173
```

## Build za produkciju

```bash
npm run build
```

Produkcijska verzija generira se u mapi `dist`.

## Upload na GitHub

1. Napravi novi GitHub repository, npr. `Lumivex-solutions`.
2. Raspakiraj ovaj ZIP.
3. Sve datoteke iz raspakirane mape uploadaj u repository.
4. Commitaj promjene na `main` branch.
5. U GitHubu idi na **Settings → Pages**.
6. Pod **Source** odaberi **GitHub Actions**.
7. Workflow `.github/workflows/deploy.yml` automatski će buildati i objaviti stranicu.

## Kontakt forma

Kontakt forma na statičkoj GitHub Pages verziji otvara email klijent s pripremljenim tekstom poruke na:

`info@lumivex-solutions.com`

Upload datoteke prikazuje naziv datoteke, ali ne šalje stvarni prilog kroz statičku stranicu. Za pravo slanje priloga potrebno je kasnije spojiti backend, Formspree, EmailJS ili sličan servis.

## Izmjena projekata

Projektne kartice su definirane u `src/main.jsx`, u polju `projectImages`.

Za zamjenu slike:

1. Dodaj novu sliku u `src/assets/projects/`.
2. Importiraj je na vrhu `src/main.jsx`.
3. Zamijeni `src`, `title`, `type` i `text` u `projectImages` polju.
