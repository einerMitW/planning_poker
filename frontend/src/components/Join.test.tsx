import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Join from './Join'

test('renders join form and handles submission', () => {
  render(
    <MemoryRouter>
      <Join />
    </MemoryRouter>
  )

  const input = screen.getByPlaceholderText(/your name/i)
  const button = screen.getByRole('button', { name: /join/i })

  expect(input).toBeInTheDocument()
  expect(button).toBeInTheDocument()

  fireEvent.change(input, { target: { value: 'Felix' } })
  fireEvent.click(button)
  
  // Later we'll check if it navigates or connects to WS.
  // For now, let's just ensure it doesn't crash and input works.
})
