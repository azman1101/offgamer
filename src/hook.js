import { useState, useEffect } from 'react';

export default () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    console.log('🚀 vv ~ carts', carts);
  }, [carts]);

  return {
    carts,
    setCarts,
  }
}