import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDeliveryDining } from "react-icons/md";

/**
 *
 * @Author: Ahmad Aji Santoso
 * @github: santoadji21
 */

function CardMenu({ name, description, image, price }) {
  return (
    <Card style={{ width: "24rem", height: "100%" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          maxHeight: "200px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <Card.Title>{`$${price}`}</Card.Title>
        </div>
        <Card.Text className="my-4">{description}</Card.Text>
        <Button variant="outline">
          Go somewhere{" "}
          <MdDeliveryDining
            style={{
              marginLeft: "10px",
            }}
          />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardMenu;
