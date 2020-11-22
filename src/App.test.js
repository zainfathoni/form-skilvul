import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  userEvent.type(namaField, 'Zain')
  
  const nikField = screen.getByLabelText('NIK')
  userEvent.type(nikField, '12345')

  const daftarButton = screen.getByRole('button', { name: 'Daftar' })
  userEvent.click(daftarButton)
})

