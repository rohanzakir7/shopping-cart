import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { addtoCart } from '../reducer/reducer';

const AddToCart = () => {
  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart); // state.{name given to cartSlice in store}

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const res = await axios.get("https://dummyjson.com/products")
        if(res) {
          setLoading(false)
          dispatch(addtoCart(res)) // res or res.data
        } 
      } catch(err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [dispatch]);

  return (
    <div>
      <h1>Shopping Website</h1>
      {loading && <p>Loading......</p>}
      {products &&
        products.map((product) => (
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={product.thumbnail}
              alt={product.title}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                Description: {product.description}
                <br />
                Price: ${product.price}
                <br />
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => dispatch(addtoCart(product))}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default AddToCart;