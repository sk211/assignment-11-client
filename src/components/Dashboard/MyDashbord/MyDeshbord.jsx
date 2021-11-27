import React, { useState } from "react";
import Addpackages from "../AddPackages/Addpackages";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import MyOrders from "../MyOrder/MyOrders";
import "./MyDashboard.css";
const MyDeshbord = () => {
  const [control, setContro] = useState("AddPackages");
  return (
    <div className="">
      <div className="row">
        <div
          className="col-lg-2 col-md-2 px-5 vh-100 text-light  pt-4 bg-info"
          id="dashboaard"
        >
          <h2 className="text-center">DashBord</h2>
          <li onClick={() => setContro("AddPackages")}>Add Packages</li>
          <li onClick={() => setContro("myOrder")}>My Order</li>
          <li onClick={() => setContro("ManageOrder")}>Manage Order</li>
        </div>
        <div className="col-lg-8">
          <div className="text-center">
            {control === "AddPackages" && <Addpackages />}
            {control === "myOrder" && <MyOrders />}
            {control === "ManageOrder" && <ManageAllOrder />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDeshbord;
