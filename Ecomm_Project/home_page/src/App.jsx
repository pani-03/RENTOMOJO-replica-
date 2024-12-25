import { useState } from 'react'
import Banner from './Components/Banner'
import  {HomePage_body}  from './Components/homePage_body'
import { Products } from './Components/Products'
import { Information } from './Components/Information'
import { Reviews } from './Components/Reviews'
import Footer from './Components/Footer'
import { Navbar } from './Components/Navbar'
import { AllProducts } from './Components/AllProducts'
import Cart from './Components/Cart'
import ProductPage, { SingleProduct } from './Components/SingleProduct'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Divider } from '@chakra-ui/react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    

      <Router>
        <Routes>

          <Route
          
          path="/"
          element={ <div>
            <Navbar/>
      <Banner/>
      
      <br />
      <HomePage_body/>
      <br />
      <Products/>
      <br />
      <Information/>
      <Reviews/>
      <br />
      <Footer/>

          </div> }
          />
          <Route
          path="/"
          element={<Products/>}
          />

          <Route
          path="/AllProducts"
          element={<AllProducts/>}
          />

          <Route
          path="/Cart"
          element={<Cart/>}
          />

          <Route
          path="/SingleProduct"
          element={<SingleProduct/>}
          />




        </Routes>
      </Router>



    </>
  )
}

export default App
