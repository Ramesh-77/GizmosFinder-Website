import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import { ProductProvider } from "./components/Provider/ProductContext";
import Container from "./components/Routes/Container";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Container />
          <Footer />
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
