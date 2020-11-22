import ReactDOM from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement('div')
  document.body.append(div)

  ReactDOM.render(<App />, div)

  const [nama, nik] = div.querySelectorAll('form > div > div')
  expect(nama.textContent).toBe('Nama')
  expect(nik.textContent).toBe('NIK')
});
