import { Counter } from "./components/Counter/Counter";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/Navbar/NavBar";
import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <Counter
        initial={0}
        stock={15}
        addCart={(amount) => console.log("Cantidad agregada: ", amount)}
      />
    </div>
  );
}

export default App;
