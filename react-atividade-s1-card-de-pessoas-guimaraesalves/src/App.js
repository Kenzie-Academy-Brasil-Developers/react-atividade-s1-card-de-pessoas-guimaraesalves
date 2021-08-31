import "./App.css";

import DevDate from "./components/Developer.jsx";

function App() {
  //const devName = "Maria";
  const devNames = { a: "Maria", b: "Rosa", c: "Luiz" };
  const devAges = { a: 22, b: 33, c: 44 };
  const devCountrys = { a: "Uruguai", b: "Colômbia", c: "Chile" };

  return (
    <div className="App">
      <div className="App-header">
        <DevDate name={devNames.a} age={devAges.a} country={devCountrys.a} />
        <DevDate name={devNames.b} age={devAges.b} country={devCountrys.b} />
        <DevDate name={devNames.c} age={devAges.c} country={devCountrys.c} />
      </div>
    </div>
  );
}

export default App;
