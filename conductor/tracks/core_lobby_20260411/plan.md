# Implementation Plan: core_lobby_20260411

## Phase 1: Project Setup and Backend Foundation
- [ ] Task: Initialize FastAPI project structure and testing framework
    - [ ] Write Tests: Setup pytest and basic server health check test
    - [ ] Implement Feature: Create basic FastAPI app and health endpoint
- [ ] Task: Implement Session Management (In-Memory)
    - [ ] Write Tests: Test session creation, joining, and state tracking
    - [ ] Implement Feature: Create SessionManager class to hold active lobbies and users
- [ ] Task: Implement WebSocket Endpoint
    - [ ] Write Tests: Test WebSocket connection and message broadcasting
    - [ ] Implement Feature: Create `/ws/{session_id}/{user_id}` endpoint for real-time communication
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Project Setup and Backend Foundation' (Protocol in workflow.md)

## Phase 2: Frontend Foundation and Lobby System
- [ ] Task: Initialize React project structure and testing framework
    - [ ] Write Tests: Setup Jest/React Testing Library and render initial component
    - [ ] Implement Feature: Initialize React app with basic layout and routing
- [ ] Task: Implement Lobby Join UI
    - [ ] Write Tests: Test name input form and join button interactions
    - [ ] Implement Feature: Create Join Component that accepts a display name and connects to the WebSocket
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Frontend Foundation and Lobby System' (Protocol in workflow.md)

## Phase 3: Voting System and Game Logic
- [ ] Task: Implement Fibonacci Card Deck UI
    - [ ] Write Tests: Test rendering of Fibonacci cards (0, 1, 2, 3, 5, 8, 13, 21, Skip) and selection state
    - [ ] Implement Feature: Create Card Deck component for participants to cast their vote
- [ ] Task: Implement WebSocket Voting Logic
    - [ ] Write Tests: Test `vote` event emission from client and handling on server
    - [ ] Implement Feature: Send vote to server, update session state, and broadcast updated state to all clients
- [ ] Task: Implement Reveal and Average Calculation
    - [ ] Write Tests: Test average calculation ignoring skipped votes, test `reveal` event broadcasting
    - [ ] Implement Feature: Host button to reveal votes, compute average, and display results to all participants
- [ ] Task: Implement Reset Round Logic
    - [ ] Write Tests: Test `reset` event to clear votes and start a new round
    - [ ] Implement Feature: Add reset functionality for the host
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Voting System and Game Logic' (Protocol in workflow.md)