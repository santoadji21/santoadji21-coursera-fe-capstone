import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/index.jsx";
import NavbarComponent from "./components/Navbar/index.jsx";
import CardMenu from "./components/CardMenu/index.jsx";
import SectionMenu from "./components/SectionMenu/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <NavbarComponent />
      <Header />
      <SectionMenu />
    </Container>
  );
}

export default App;
