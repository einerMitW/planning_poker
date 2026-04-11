# Track Specification: Build core Planning Poker lobby and WebSocket voting system

## Overview
This track focuses on delivering the MVP of the Planning Poker application. It includes the backend FastAPI WebSocket server for real-time synchronization and the frontend React application for lobby management, voting, and revealing.

## Scope
- Implement FastAPI server with WebSocket support for managing sessions.
- Implement React frontend for joining lobbies, displaying cards, and casting votes.
- Implement game logic: tracking votes, calculating averages, and handling 'Skip' actions.
- Note: Jira/Linear integration is out of scope for this initial core track and will be handled in a subsequent track.

## Technical Details
- **Backend:** Python (FastAPI). State managed in-memory.
- **Frontend:** React.js, styled for mobile-first responsiveness.
- **Communication:** WebSockets for bidirectional real-time events (`join`, `vote`, `reveal`, `reset`).