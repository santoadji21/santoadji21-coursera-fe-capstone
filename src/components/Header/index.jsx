import Button from "react-bootstrap/Button";

import React from "react";

/**
 *
 * @Author: Ahmad Aji Santoso
 * @github: santoadji21
 */
export default function Header() {
  return (
    <div className="jumbotron my-5 ">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="display-1">Little Lemon</h1>
          <h1>Chicago</h1>
          <p
            style={{
              maxWidth: "300px",
            }}
          >
            We are family owned Mediterranean restaurant. Focused on traditional
            Recipes served with a modern twist
          </p>

          <p>
            <Button variant="warning">Reserve a Table</Button>
          </p>
        </div>
        <div className="image-header">
          <img
            className="img rounded img-thumbnail"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
