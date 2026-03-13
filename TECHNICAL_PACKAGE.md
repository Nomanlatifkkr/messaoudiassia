# Technical Package – Milestone 1

## Technology Stack
- **Node.js** (runtime)
- **TypeScript** (language)
- No external dependencies (only dev dependencies for compilation)

## Architecture
Strict separation of concerns:
- **Input Model** – `SignalInput` interface
- **Service Logic** – each service implements `process(input: SignalInput): SignalOutput`
- **Output Model** – `SignalOutput` interface

All services are stateless and can be composed in any order.

## Folder Structure