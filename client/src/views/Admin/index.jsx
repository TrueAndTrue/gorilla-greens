import './styles.css';

export const Admin = () => {

  const orders = [['Austin Westbury', '2x Rose, 2x Brownie', 'austinwestbury@live.com'], ['Owyn Murray', '2x Violet Bud, 5x Rosin', 'owynmurray@gmail.com'], ['Joe Von', '1x Gummies', 'joevon@gmail.com'], ['Jeremy Atlan', '1x Extract, 2x Brownies', 'jeremyatlan@outlook.ca']]


  return (
    <div className="admin-container">
      <h1> Admin portal </h1>
      <div className="order-list">
        {orders && orders.map((order) => {
          return <div className='order'> <h1>{order[0]}</h1> <h3> {order[1]} </h3> <h3> Contact: {order[2]}</h3> </div>
        })}
      </div>
    </div>
  )
}