# Moxymind Monorepo

Tento repozitár je monorepo, ktoré obsahuje tri samostatné balíčky na testovanie:

```
root/
├── package.json           # hlavný package.json s workspaces
├── package-lock.json      # lockfile pre všetky balíčky
├── .github/workflows/     # CI workflowy pre každý balíček
├── packages/
│   ├── cypress/
│   │   ├── package.json
│   │   ├── cypress.config.js/ts
│   │   └── cypress/      # testy, pages, podpriečinky
│   ├── jest/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tests/        # jest testy
│   └── playwright/
│       ├── package.json
│       ├── playwright.config.ts
│       ├── pages/        # page object modely
│       └── tests/        # playwright testy
```

## Inštalácia

1. **Klonujte repozitár:**
   ```
   git clone <repo-url>
   cd <repo-folder>
   ```
2. **Nainštalujte všetky závislosti pre všetky balíčky naraz:**
   ```
   npm install
   ```
   (Používame npm workspaces, všetky závislosti sú spravované centrálne.)

## Spúšťanie testov

Každý balíček má vlastné testy a vlastný package.json. Testy môžete spustiť:

- **Playwright:**
  ```
  npm run test:playwright
  ```
- **Cypress:**
  ```
  npm run test:cypress
  ```
- **Jest:**
  ```
  npm run test:jest
  ```

Prípadne môžete prejsť do konkrétneho balíčka a spustiť testy priamo:

```
cd packages/cypress && npm test
cd packages/playwright && npm test
cd packages/jest && npm test
```

## CI/CD

Každý balíček má vlastný GitHub Actions workflow v `.github/workflows/`, ktorý sa spúšťa pri zmene daného balíčka.
