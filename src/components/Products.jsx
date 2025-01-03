import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../store/cartSlice";
import { fetchproducts, STATUSES } from "../store/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  console.log(status);
  // const [products, setProducts] = useState([]);
  // const fetchproducts = async () => {
  // const response = await fetch("https://fakestoreapi.com/products");
  // const products = await response.json();
  // // console.log(products);
  // setProducts(products);
  // };

  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(addTocart(product));
    console.log(product);
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Error fetching products</h2>;
  }

  return (
    <>
      {/* <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col key={product.id} md={4} className="mb-4">
                <Card className="h-100 d-flex flex-column">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                      {product.description.length > 50
                        ? `${product.description.slice(0, 50)}...`
                        : product.description}
                    </Card.Text>
                    <Card.Text>Rs ${product.price}</Card.Text>

                    <Button className="btn">Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container> */}

      <div className="productsWrapper mt-5">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              className="btn btn-primary"
              onClick={() => handleAdd(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
