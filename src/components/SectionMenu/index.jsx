import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Menu from "../../data/data.json";
import CardMenu from "../CardMenu/index.jsx";

/**
 *
 * @Author: Ahmad Aji Santoso
 * @github: santoadji21
 */

function SectionMenu() {
  const { menu } = Menu;
  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h1>This week specials</h1>
        <Button variant="warning">Online Menu</Button>
      </div>
      <Row>
        {menu.map((item) => {
          return (
            <Col md={4} className="my-3">
              <CardMenu {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default SectionMenu;
