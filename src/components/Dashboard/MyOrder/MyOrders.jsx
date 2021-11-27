import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import useFirebase from "../../hooks/userFirebase";

const Orders = () => {
  const { user } = useFirebase();
  const [orders, setOrders] = useState([]);
  const [control, setConrol] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://infinite-oasis-45429.herokuapp.com/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, control]);

  const handleDelete = (id) => {
    fetch(`https://infinite-oasis-45429.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
          alert("Data deleted successSully");
        } else {
          setConrol(false);
        }
      });
    console.log(id);
  };

  return (
    <div className="col-lg-12 col-md-6 ">
      <h2>You have placed: {orders.length} Orders</h2>

      {orders.map((order) => (
        <Table className="table table-responsive-lg" key={order._id}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>desci</th>
              <th>photo url</th>
              <th>price</th>
              <th>Date</th>
              <th>state</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order._id}</td>
              <td>{order.name}</td>
              <td>{order.description}</td>
              <td>{order.photoUrl}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn bg-danger p-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default Orders;
