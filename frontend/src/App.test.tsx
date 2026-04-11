import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renders initial component', () => {
  render(<App />)
  expect(screen.getByText('Planning Poker')).toBeInTheDocument()
  expect(screen.getByText('Join a Lobby')).toBeInTheDocument()
})
