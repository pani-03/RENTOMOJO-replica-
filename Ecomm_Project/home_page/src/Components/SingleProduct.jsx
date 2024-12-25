import React from 'react'

import './productpage.css'
import Footer from './Footer';

export const SingleProduct = () => {
    const product = {
        id: 1,
        name: 'Comfort Chair',
        description: 'A very comfortable chair for your home office.',
        price: '999',
        image:"https://imgs.search.brave.com/f8I9688vKjep7RJUa47Z2giORdpYw4fd3Y68AI8GL0c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9jb21m/b3J0YWJsZS1jaGFp/cnMtNjU5YzVhZGQ3/ZjUxZC5wbmc_Y3Jv/cD0wLjQ3Nnh3OjAu/OTUyeGg7MC4wMTI4/eHcsMC4wMjI0eGgm/cmVzaXplPTY0MDoq"
      };
  return (
    // src/components/ProductPage.js



  // const { productId } = useParams();
  // Mock product data
 

  
   <div><div className="product-page">
      <img style={{height:"350px"}} src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>₹{product.price}/month</h2>
      <button>Add to Cart</button>
    </div>
    <br /><hr /><br />
    <Footer/>
    </div> 
  );
};

export default SingleProduct;
  

