import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";



function App() {

  const button1Props = {color: "blue", text: "four"}


  return <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    <Button {...button1Props}>Cheese {() => {}}</Button>
    <Button color="orange" text="two"/>
    <Button color="green" text="three"/>
  </div>;
}

export default App;
