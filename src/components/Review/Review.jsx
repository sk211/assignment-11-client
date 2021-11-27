import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Review = () => {
  const [product, setPackages] = useState([]);
  //   const { bookingId } = useParams();
  const { bookingId } = useParams();
  console.log(bookingId);

  //   const newId = product.filter((user) => user._id !== id);
  useEffect(() => {
    fetch(`https://infinite-oasis-45429.herokuapp.com/package/${bookingId}`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);

  return (
    <div>
      <div className="col-lg-6">
        <Table striped bordered hover>
          {product.filter((productNew) => (
            <li>{productNew.name}</li>
          ))}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>desc</th>
              <th>PhotoUrl</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.id}</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="col-lg-6">
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
            <Link to="/regester">Submit here</Link>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Review;
