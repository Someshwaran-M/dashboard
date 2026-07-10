import React, { useState } from "react";
import {
  FaSearch,
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import "../../styles/dashboard/Orders.css";

const ordersData = [
  {
    id: "#ORD-1001",
    customer: "John Smith",
    product: "Laptop",
    amount: "$1,250",
    status: "Delivered",
  },
  {
    id: "#ORD-1002",
    customer: "Emma Wilson",
    product: "Mobile",
    amount: "$650",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "David Miller",
    product: "Headphones",
    amount: "$120",
    status: "Shipped",
  },
  {
    id: "#ORD-1004",
    customer: "Sophia Lee",
    product: "Keyboard",
    amount: "$85",
    status: "Delivered",
  },
  {
    id: "#ORD-1005",
    customer: "Michael Brown",
    product: "Monitor",
    amount: "$310",
    status: "Processing",
  },
];

const Orders = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const filteredOrders = ordersData.filter((order) => {
    const matchSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || order.status === status;

    return matchSearch && matchStatus;
  });

  const totalOrders = ordersData.length;
  const shipped = ordersData.filter((o) => o.status === "Shipped").length;
  const delivered = ordersData.filter((o) => o.status === "Delivered").length;
  const pending = ordersData.filter((o) => o.status === "Pending").length;

  return (
    <div className="orders-page">
      {/* Header */}
      <div className="orders-header">
        <div>
          <h1>Orders Management</h1>
      
        </div>

        <button className="new-order-btn">+ New Order</button>
      </div>

      {/* Cards */}
      <div className="orders-cards">
        <div className="order-card">
          <FaBoxOpen />
          <h3>{totalOrders}</h3>
          <p>Total Orders</p>
        </div>

        <div className="order-card">
          <FaTruck />
          <h3>{shipped}</h3>
          <p>Shipped</p>
        </div>

        <div className="order-card">
          <FaCheckCircle />
          <h3>{delivered}</h3>
          <p>Delivered</p>
        </div>

        <div className="order-card">
          <FaClock />
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="orders-toolbar">
        <div className="search-box-order">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>

      {/* Table */}
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span
                      className={`status ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;