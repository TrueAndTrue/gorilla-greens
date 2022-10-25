import ProductCard from '../../Components/ProductCard';
import './styles.css';
import weed from '../../assets/weed.png'
import { Checkout } from '../../Components/Checkout/index';

export const Products = () => {


  const products = [
    {type: 'bud', name: 'Rose', price: 999, image: weed},
    {type: 'bud', name: 'Flower', price: 999, image: weed},
    {type: 'bud', name: 'Red Violet', price: 999, image: weed},
    {type: 'extract', name: 'Rosin', price: 1999},
    {type: 'extract', name: 'Shatter', price: 1999},
    {type: 'edibles', name: 'Chocolate Bar', price: 1999},
    {type: 'edibles', name: 'Sour Gummies', price: 1999},
    {type: 'edibles', name: 'Brownies', price: 1999},
  ]


  return (
    <div className='products-container'>
      <h1>Buds</h1>
      <div className="products-line">
        {products.map((product) => {
          if (product.type === "bud") {
            return <ProductCard name={product.name} image={product.image} price={product.price}/>
          } 
        })}
      </div>
      <div className="products-line">
        <h1>Extracts</h1>
      </div>
      <div className="products-line">
        <h1>Edibles</h1>
      </div>
    </div>
  )
}