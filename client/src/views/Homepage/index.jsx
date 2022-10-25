import './styles.css';
import weed from '../../assets/weed.png'
import GrassIcon from '@mui/icons-material/Grass';
import ProductCard from '../../Components/ProductCard';

export const Homepage = () => {


  return (
    <div className="homepage-container">
      <p className="home-header"> Highest Quality Cannibas</p>


      <div className="info">
        <div className="info_item">
          <GrassIcon sx={{color: 'white', }}/>
          <p className="info_item_header">Home-Pressed Rosin</p>
          <p className="info_item_body">We press all of our rosin on-site, meaning no added chemicals and the cleanest extract you can find.</p>
        </div>
        <div className="info_item">
          <GrassIcon sx={{color: 'white', }}/>
          <p className="info_item_header">Highest Quality</p>
          <p className="info_item_body">When you buy here at Gorilla Greens, you'll leave knowing you bought the best quality product on the market.</p>
        </div>
        <div className="info_item">
          <GrassIcon sx={{color: 'white', }}/>
          <p className="info_item_header">Customer Satisfaction</p>
          <p className="info_item_body">Our 10/10 customer service will not be beaten anywhere else. Got a question? Just ask us.</p>
        </div>
      </div>
      <div className="weed_images">
        <ProductCard strain="Greenrose"/>
        <ProductCard strain="Violet"/>
        <ProductCard strain="H27"/>
      </div>
    </div>
  )
}