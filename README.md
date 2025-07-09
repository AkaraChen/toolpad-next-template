# Next.js Project Architecture Template

## Project Philosophy

This project is a modern, scalable web application built with a strong emphasis on type safety, performance, and developer experience. It leverages a modular architecture to ensure code is organized, maintainable, and easy to scale.

## Core Technologies

-   **Framework**: Next.js (React)
-   **Language**: TypeScript
-   **UI**: Material UI (MUI)
-   **Data Fetching & State Management**: TanStack Query (`@tanstack/react-query`)
-   **Global State Management**: Zustand
-   **Package Manager**: pnpm

## Development Conventions

### Asynchronous Operations

-   All asynchronous operations within components, such as data fetching, must be managed using **TanStack Query** by default.
-   This ensures consistency in state management, caching, optimistic updates, and error handling across the application.
-   Deviations from this pattern are strongly discouraged and require explicit justification.

## Project Architecture Overview

### Modular Architecture

The project follows a modular architecture, with distinct features encapsulated in their own directories under `src/modules`. This approach promotes a strong separation of concerns, making the codebase easier to manage, scale, and debug.

A key component of this architecture is the `src/shared` module, which contains code used across multiple features. This includes:

-   **`constants`**: For application-wide constants like API endpoints and configuration keys.
-   **`store`**: For global state management using Zustand.
-   **`hooks`**: For reusable React hooks.
-   **`utils`**: For shared utility functions.

This modular design results in a clean and organized codebase where each module is responsible for a specific domain of functionality.

### App Directory and Routing

The `src/app` directory is structured according to the **Next.js App Router** convention. The pages and layouts within this directory serve as lightweight wrappers. Their primary responsibility is to import and render the main components from their corresponding feature modules located in `src/modules`.

This architectural choice reinforces modularity by:

-   **Separating Concerns**: Routing and page setup are handled in the `app` directory, while the core business logic, state, and UI are encapsulated within the `modules`.
-   **Enhancing Reusability**: Feature components in `modules` are self-contained and can be easily used or moved without being tightly coupled to the routing structure.

For example, `src/app/feature-name/page.tsx` would be a simple file that imports and renders the main component from `src/modules/feature-name/`. All logic for that feature resides within its module.

### Feature Modules

Each feature of the application is housed in its own directory within `src/modules`. A typical feature module structure might look like this:

```
src/modules/feature-name/
├── api/
│   ├── client.ts   # Client-side data fetching functions (using TanStack Query)
│   ├── server.ts   # Server-side logic (e.g., API route handlers, server actions)
│   └── types.ts    # TypeScript types for the feature's data contracts
├── components/     # React components specific to this feature
├── index.tsx       # The main entry component for the feature
└── utils.ts        # Utility functions specific to this feature
```

This feature-oriented structure makes it easy to locate and work on specific parts of the application without creating unintended side effects.

### Data Management and API Interaction

The application uses **TanStack Query** for all server-state management. To maintain a clear separation between client-side and server-side code, API-related files are organized within an `api` directory inside each module:

-   **`api/client.ts`**: Contains functions for making client-side API requests, typically used within React Query's `useQuery` and `useMutation` hooks.
-   **`api/server.ts`**: Contains server-side API logic, such as Next.js API Route handlers or Server Actions.
-   **`api/types.ts`**: Contains TypeScript type definitions specific to the API. Co-locating types with the API files enhances encapsulation and makes the module's data contracts clear.

This structure ensures a clean and explicit separation of concerns, simplifying API management and improving code readability.

### Tooling and Development

The project is configured with modern tooling to ensure code quality and a smooth development experience:

-   **`prettier`**: For consistent code formatting.
-   **`eslint`**: For identifying and fixing code quality issues.
-   **`pnpm`**: As the package manager for performance and efficiency.

This setup helps maintain a high standard of code quality and makes collaboration seamless.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    pnpm install
    ```

2.  **Environment Variables**:
    Create a `.env.local` file by copying the `.env.example` file. Populate it with the necessary environment variables (e.g., database URLs, API keys).

3.  **Run the Development Server**:
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
