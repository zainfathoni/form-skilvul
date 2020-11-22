import { render, screen } from '@testing-library/react'
import App from './App';

test('renders form correctly', () => {
  render(<App />)

  const nama = screen.getByText('Nama')
  expect(nama).toBeDefined()
  
  const nik = screen.getByText('NIK')
  expect(nik).toBeDefined()
});

