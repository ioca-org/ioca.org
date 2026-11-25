# IOCA Website

The official website for the Intercollegiate Outing Club Association (IOCA), serving as a hub for college outdoor programs to share trip opportunities, resources, and experiences.

## About IOCA

The Intercollegiate Outing Club Association (IOCA) connects college outdoor programs across the United States, fostering collaboration, sharing best practices, and promoting outdoor recreation among students. Our platform provides resources, event listings, and networking opportunities for educators and outdoor program leaders.

## Features

- **Event Listings**: Discover upcoming outdoor events and trips
- **School Directory**: Find and connect with outdoor programs at colleges nationwide
- **News & Resources**: Stay updated with industry news and educational materials
- **Governance Information**: Learn about IOCA's structure and leadership
- **Join Us**: Get involved with the organization

## Tech Stack

- **Framework**: Svelte 5 with SvelteKit
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn-svelte, bits-ui
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/ioca.org.git
cd ioca.org

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Open in browser
pnpm dev -- --open
```

### Building

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── routes/              # Page routes and layouts
├── lib/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content files (events, schools, news)
│   ├── state/           # Application state management
│   └── utils/           # Utility functions
```

## Contributing

Site development is handled by IOCA. If you would like to contribute please reach out!

For directory updates, please use the [registration form](https://ioca.org/join). For news and event postings, contact your school's outing club. If your school is not yet part of IOCA, please join us.

## License

This project is licensed under the MIT License.
