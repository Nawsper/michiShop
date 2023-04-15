import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
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
      <ItemDetailContainer />
    </div>
  );
}

export default App;
