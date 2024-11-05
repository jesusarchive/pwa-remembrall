# PWA Remembrall

Remembrall is a fun and engaging memory game where players are challenged to memorize the positions of 9 cards. After a brief memorization period, players must guess the position of one of the cards. This project is built using Vite and leverages modern web technologies to provide a smooth user experience.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Deployment](#deployment)
- [Built With](#built-with)

## Getting Started

### Prerequisites

- Node.js (version 19 or higher recommended)
- npm or pnpm (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jesusarchive/pwa-remembrall.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pwa-remembrall
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

```bash
pnpm run dev
```

### Build for Production

```bash
pnpm run build
```

### Testing

To run tests:

```bash
pnpm run test
```

To generate test coverage report:

```bash
pnpm run coverage
```

### Deployment

For deployment, you can serve the contents of the dist directory using any static file server. You can also deploy it on platforms like Vercel, Netlify, or GitHub Pages.

### Built With

- [Vite](https://vite.dev/) - A fast build tool for modern web projects.
- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) - Plugin for adding PWA support.
