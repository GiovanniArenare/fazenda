import Home from "./pages/Home";
import Voto from "./pages/Votacao"
import Resultado from "./pages/Resultado";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Voto" element={ <Voto />} />
        <Route path="/Resultado" element={ <Resultado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;