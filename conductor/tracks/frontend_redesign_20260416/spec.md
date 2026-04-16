# Specification: Frontend Redesign with Stitch

## Overview
This track involves a complete overhaul of the Planning Poker frontend. The current sporadic frontend will be replaced with a modern, minimal design created in Stitch, adhering to the DHBW design system. The redesign focuses on the Lobby and Game screens, ensuring they integrate seamlessly with the existing Python/FastAPI backend via WebSockets.

## Functional Requirements

### 1. Lobby Screen
- **Session ID Input:** Field to manually enter a session code.
- **User Name Input:** Field for users to enter their display name.
- **Create Session Button:** Generates a new unique session ID and joins it.
- **Join Session Button:** Joins an existing session using the provided ID and Name.
- **Copy Invite Link:** Button/Icon to copy a sharable URL to the clipboard.
- **Validation & Error Handling:** 
    - Users cannot join a session if the Name or Session ID fields are empty.
    - Display clear error messages or visual cues when validation fails.

### 2. Game Screen
- **Participants List:** Visual list of all users in the session, showing:
    - User name.
    - Vote status (Hidden, Voted, or Skip).
- **Voting Deck:** A set of Fibonacci cards (0, 1, 2, 3, 5, 8, 13, 21) plus special cards ('?' and 'Skip').
- **Real-time Updates:**
    - Cards remain face-down until revealed.
- **Action Buttons:**
    - **Reveal Votes:** Manually trigger the reveal.
    - **Reset Round:** Clear all votes and start a new estimation round.
- **Results Display:**
    - Show individual votes after reveal.
    - Display the calculated average of non-skipped votes.

## Non-Functional Requirements
- **Design System:** Use the DHBW Design System (minimalist style, corporate colors).
- **Technology:** React.js with Vite, using Stitch-generated components.
- **Responsiveness:** Mobile-first design, optimized for both mobile and desktop.
- **Architecture:** Complete replacement of the existing `frontend/src` components.

## Acceptance Criteria
- [ ] Lobby screen allows joining and creating sessions.
- [ ] Validation prevents joining with empty Name or Session ID.
- [ ] Game screen displays real-time voting progress.
- [ ] All Fibonacci and special cards are functional.
- [ ] Results and average are correctly displayed after reveal.
- [ ] UI matches the DHBW design guidelines (Red/Grey/White palette).
- [ ] Frontend communicates correctly with the existing WebSocket backend.

## Out of Scope
- Backend modifications or session persistence in a database.
- User authentication/accounts.
