import { render, screen, fireEvent } from '@testing-library/react'
import App from './App';

test('renders form correctly', () => {
  render(<App />)

  const nama = screen.getByText('Nama')
  expect(nama).toBeDefined()
  
  const nik = screen.getByText('NIK')
  expect(nik).toBeDefined()
});

test('submits the form fields correctly', () => {
  render(<App />)

  const namaField = screen.getByLabelText('Nama')
  fireEvent.change(namaField, { target: { value: 'Zain' } })
  
  const nikField = screen.getByLabelText('NIK')
  fireEvent.change(nikField, { target: { value: '12345' } })

  const daftarButton = screen.getByRole('button', { name: 'Daftar' })
  fireEvent.click(daftarButton)
})

