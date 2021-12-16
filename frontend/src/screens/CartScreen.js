import { useParams, useSearchParams } from 'react-router-dom';

const CartScreen = () => {
  let [searchParams] = useSearchParams();

  const { id } = useParams();
  let qty = searchParams.get('qty');

  return (
    <div style={{ marginTop: '100px' }}>
      <h1>Cart Screen</h1>
    </div>
  );
};

export default CartScreen;
