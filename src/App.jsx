import { Counter } from "./components/Counter/Counter";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/Navbar/NavBar";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting={"Encontra los que necesitas para tu gatito"}
      />
      <Counter
        initial={0}
        stock={15}
        addCart={(amount) => console.log("Cantidad agregada: ", amount)}
      />
    </div>
  );
}

export default App;
