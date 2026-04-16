import './CardDeck.css'

const VOTING_CARDS = ['0', '1', '2', '3', '5', '8', '13', '21', '?', 'Skip']

interface CardDeckProps {
  onVote: (vote: string) => void
  selectedVote: string | null
}

export default function CardDeck({ onVote, selectedVote }: CardDeckProps) {
  return (
    <div className="card-deck">
      <div className="deck-header">
        <h2>Cast your vote</h2>
      </div>
      <div className="cards-grid">
        {VOTING_CARDS.map((card) => (
          <button
            key={card}
            className={`card ${selectedVote === card ? 'selected' : ''}`}
            onClick={() => onVote(card)}
            aria-label={card}
          >
            <span className="card-value">{card}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
