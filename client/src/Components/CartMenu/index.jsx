import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTotal } from '../../state/reducers/total';
import { dollarify } from '../../utils/functions';

export function CartMenu() {

  // States
  
  const [ total, setTotal ] = React.useState(0);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // Other Hooks
  
  const products = useSelector(state => state.product.value)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    setTotal(0)
    let productTotal = 0;
    products.forEach((product) => {
      productTotal += product[0][1];
      console.log(productTotal, 'in for')
    })
    console.log(productTotal, 'out of for')
    if (productTotal > 0) {
      setTotal(dollarify(productTotal))
      dispatch(addTotal(productTotal))
    }
  
  }, [products])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {products.map((product) => {
        return <div className="row"><p>{product[0][0]}</p> <p className='quantity'>x{product[1]}</p></div>
      })}
      <div>
        <div><h1>Total: {total}</h1></div>
        <Button sx={{color: 'black', marginTop: '15%'}} onClick={() => navigate('/about')}>
          Checkout
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}>{<ShoppingCartIcon />}</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
