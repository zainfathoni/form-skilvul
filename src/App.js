import './App.css';

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    const { nama, nik } = event.target.elements
    console.log({
      nama: nama.value,
      nik: nik.value
    })
  }

  return (
    <div className="App">
      <h1>
        Form Pendaftaran TKI
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="form-nama">Nama</label>
          <input id="form-nama" name="nama" type="text" />
        </div>
        <div>
          <label htmlFor="form-nik">NIK</label>
          <input id="form-nik" name="nik" type="number" />
        </div>
        <div>
          <button type="submit">Daftar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
