import ProductCard from './ProductCard';

export default ({ products }) => {
  return (
    <div className='d-flex flex-wrap'>
      {products.map(product => <ProductCard {...product} />)}
    </div>
  )
}