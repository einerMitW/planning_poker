import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import CardDeck from './CardDeck'

test('renders Fibonacci and special cards according to spec', () => {
  const onVote = vi.fn()
  render(<CardDeck onVote={onVote} selectedVote={null} />)

  const expectedCards = ['0', '1', '2', '3', '5', '8', '13', '21', '?', 'Skip']
  expectedCards.forEach((card) => {
    expect(screen.getByRole('button', { name: card })).toBeInTheDocument()
  })

  fireEvent.click(screen.getByRole('button', { name: '13' }))
  expect(onVote).toHaveBeenCalledWith('13')
})

test('highlights the selected card', () => {
  render(<CardDeck onVote={() => {}} selectedVote="5" />)
  const selectedCard = screen.getByRole('button', { name: '5' })
  expect(selectedCard).toHaveClass('selected')
})
