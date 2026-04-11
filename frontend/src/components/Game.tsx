import { useParams } from 'react-router-dom'

export default function Game() {
  const { sessionId } = useParams()
  return (
    <div>
      <h1>Lobby: {sessionId}</h1>
      <p>Voting cards will go here.</p>
    </div>
  )
}
