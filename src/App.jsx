import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Tecnologie from "./components/Tecnologies/Tecnologie";
import { ResetStyles } from "./styles/styledReset";

function App() {
  return (
    <>
      <ResetStyles />
      <NavBar />
      <About />
      <Tecnologie />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
