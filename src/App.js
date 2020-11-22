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
          <div>
            Nama
          </div>
          <input name="nama" type="text" />
        </div>
        <div>
          <div>
            NIK
          </div>
          <input name="nik" type="number" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
