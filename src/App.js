import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import products from './products.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Cart />
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <Product {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
