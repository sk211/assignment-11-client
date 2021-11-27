import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddPackages = () => {
  return (
    <div>
      <h2>Add Packages</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <Link to="/regester">Regester here</Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddPackages;
