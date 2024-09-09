# C0D Frontend

This repository contains the frontend code for the C0D CTF platform, utilizing the T3 stack with Next.js and React. This README will guide you through setting up and using the frontend.

## Table of Contents

- [C0D Frontend](#c0d-frontend)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Component Testing (Storybook)](#component-testing-storybook)
    - [Development server](#development-server)
  - [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 18.x or higher
- pnpm (for package management)

## Installation

1. Clone the repository (or a fork of the repository):

   ```bash
   git clone https://github.com/lugvitc/c0d-frontend.git
   cd c0d-frontend
   ```

2. Install project dependencies:

   ```bash
   # (optional)
   corepack enable pnpm
   # install dependencies
   pnpm install
   ```

## Usage

### Component Testing (Storybook)

Storybook is used for developing and testing UI components in isolation. To get started with Storybook:

1. **Start Storybook**:

   ```bash
   pnpm storybook
   ```

2. **View Storybook**:
   
   Open your browser and navigate to [http://localhost:6006](http://localhost:6006) to view the Storybook interface.

4. **Writing Stories**:

   Look at `src/components/text.tsx` and `src/stories/text.stories.tsx` to get an idea of how to write stories for your own components.

### Development server

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing

To contribute to the C0D Frontend, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. To view/test changes that you're making, utilize storybook (look at [usage](#usage) -> writing stories).
3. Make sure to run `pnpm format` & `pnpm lint` before commiting changes.
4. Commit your changes (`git commit -m 'Add your feature'`). Make sure to use [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) messages.
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

---

Happy coding and we look forward to your contributions!
