import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renders initial component', () => {
  render(<App />)
  // Check for the title inside the Join card
  expect(screen.getByText('Planning Poker')).toBeInTheDocument()
  expect(screen.getByText('Collaborative Estimation for Teams')).toBeInTheDocument()
})
