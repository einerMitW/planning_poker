# Planning Poker App

Echtzeit-Anwendung zur kollaborativen Aufwandsschätzung in agilen Teams. Die Anwendung ermöglicht es Teams, Schätzrunden synchron und effizient über verteilte Standorte hinweg durchzuführen.

## Features
- **Echtzeit-Lobby:** Synchronisierte Teilnehmerliste und Abstimmungsstatus via WebSockets.
- **Kartendeck:** Unterstützung der Fibonacci-Folge (0, 1, 2, 3, 5, 8, 13, 21) sowie einer Skip-Option.
- **Smart Reveal:** Gleichzeitige Offenlegung aller Stimmen und automatischer Durchschnittsberechnung (ohne Skip-Votes).
- **Session-Management:** Einfaches Erstellen und Beitreten von Lobbys über eindeutige IDs.
- **Mobile-First:** Vollständig responsives UI für die Nutzung auf Smartphones und Tablets.

## Tech Stack
| Bereich | Technologie | Version |
| :--- | :--- | :--- |
| **Backend** | Python / FastAPI | 3.12+ / 0.135.x |
| **Frontend** | React / Vite / TS | 19.x / 8.x |
| **Realtime** | WebSockets | Standard RFC 6455 |
| **Testing** | Pytest / Vitest | 9.x / 4.x |

## Infrastruktur & Ports
| Dienst | Port | Protokoll | Zweck |
| :--- | :--- | :--- | :--- |
| **Backend** | `8000` | HTTP/WS | API-Endpunkte & WebSocket-Server |
| **Frontend** | `5173` | HTTP | Vite Development Server |

## Voraussetzungen
- **Python 3.12+**
- **Node.js 20+**
- Aktiver Paketmanager (**npm**)

## Installation & Start

### 1. Backend (FastAPI)
```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# Unix/macOS
source venv/bin/activate

pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

### 2. Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
Die Anwendung ist unter `http://localhost:5173` erreichbar.

## Architektur-Notizen
Die Kommunikation folgt einem **Ereignis-gesteuerten WebSocket-Modell**. Das Backend verwaltet den Zustand (`revealed`, `votes`, `average`) vollständig **in-memory** im `SessionManager`. 
1. **Client** sendet Aktionen (Join, Vote, Reveal) als JSON-Nachrichten.
2. **Server** validiert die Aktion und aktualisiert den Session-Status.
3. **Server** broadcastet den neuen Gesamtzustand an alle verbundenen WebSockets der Session.

## Lizenz
Standard-Platzhalter: [MIT License](LICENSE)
