import "./App.css";

import DevDate from "./components/Developer.jsx";

function App() {
  //const devName = "Maria";
  const devNames = { a: "Maria", b: "Mateus", c: "Luiz", d: "Eduarda" };
  const devAges = { a: 22, b: 33, c: 44, d: 48 };
  const devCountrys = { a: "Uruguai", b: "Colômbia", c: "Chile", d: "Brasil" };

  return (
    <div className="App">
      <div className="App-header">
        <DevDate name={devNames.a} age={devAges.a} country={devCountrys.a} />
        <DevDate name={devNames.b} age={devAges.b} country={devCountrys.b} />
        <DevDate name={devNames.c} age={devAges.c} country={devCountrys.c} />
        <DevDate name={devNames.d} age={devAges.d} country={devCountrys.d} />
      </div>
    </div>
  );
}

export default App;
