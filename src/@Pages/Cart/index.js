import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

export default function Cart({ h }) {
  const { carts, setCarts } = h;
  // console.log('🚀 vv ~ carts', carts);

  if (!carts.length) return (
    <>
      <h3 className='text-center mt-5 pt-5'>No item in cart</h3>

      <p className='text-center m-1'>Find item to buy <Link to="/">here</Link></p>
    </>
  )
  return (
    <div className="container-lg">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col"></th>
            <th scope="col">Price ({carts[0].currency})</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, idx) => (
            <tr>
              <th scope="row">{idx + 1}</th>
              <td><img src={cart.image} className="img-cart" /></td>
              <td>{cart.name}</td>
              <td>{cart.final_price.toFixed(2)}</td>
              <td>
                <IconButton onClick={() => { setCarts(c => { c.splice(idx, 1); return [...c]; }) }}>
                  <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
              </td>
            </tr>
          ))}
          <tr className="fw-bold">
            <th></th>
            <td></td>
            <td>Total</td>
            <td>{carts.reduce((a, b) => a + b.final_price, 0).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div >
  );
}
