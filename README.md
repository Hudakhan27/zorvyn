# Finance Backend API - Intern Assignment

## Setup Instructions
1. Run `npm install` to install dependencies.
2. Run `node scripts/seed.js` to populate dummy data.
3. Start server with `node server.js`.

## API Endpoints
- **GET /**: Health Check
- **GET /api/transactions**: View all records (Roles: Admin, Analyst, Viewer)
- **POST /api/transactions**: Create record (Role: Admin)
- **GET /api/transactions/summary**: Dashboard stats (Roles: Admin, Analyst)

## Access Control
Use the `role` header in your requests:
- `role: Admin` (Full Access)
- `role: Analyst` (View + Summary)
- `role: Viewer` (View Only)
