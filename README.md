# Unified TypeScript Squad Platform

Fullstack POC for a mid-level TypeScript specialist role using a unified ecosystem:
- Frontend: React + TypeScript + Zustand + RTK Query
- Backend: NestJS-style TypeScript API with DTO validation and real-time gateway
- Shared Contracts: common DTOs and domain types consumed by both frontend and backend

## Why this POC is a strong fullstack showcase

- Demonstrates end-to-end type safety via a shared type library
- Shows state management and efficient data flow (Zustand + RTK Query)
- Includes real-time update primitives (WebSocket events + SSE endpoint)
- Reflects squad ownership by spanning UI, API, DTO mapping, and architecture

## Repository Layout

```text
unified-typescript-squad-platform/
  shared-types/
  backend/
  frontend/
```

## Quick Start

```bash
# install dependencies (workspace root)
npm install

# run backend
npm run dev --workspace backend

# run frontend
npm run dev --workspace frontend
```

## Feature Snapshot

- Task board with typed filter state
- Real-time status updates from backend events
- Shared DTOs to avoid drift between UI and API
- Extendable modular structure for squad delivery

