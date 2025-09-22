import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <div 
    style={{ display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    fontFamily: '"Dancing Script", cursive', 
    fontSize: "1.5rem", padding: "0.5rem", 
    backgroundColor: "#222", color: "white"}}>
        CAF HillsNToes
    </div>
      <div
        style={{
          width: "100%",
          padding: "1rem",
          background: "#e9a8a8ff",
          color: "#fff",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ flex: 1 } }>Home</Link>
        <Link to="/Shoes" style={{ flex: 1 } }>Shoes</Link>
        <Link to="/Clothing" style={{ flex: 1 } }>Clothing</Link>
        <div style={{ flex: 1 }}>
        
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn" type="submit" style={{backgroundColor: "#222", color: "white"}}>
                  Search
                </button>
              </form>
            </div>

        <div
          style={{ flex: 1, display: "flex", justifyContent: "space-around" }}
        >
          <div>
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={20}
              height={20}
              className="size-6"
              color="blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />{" "}
            </svg>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                width={20}
                height={20}
                color="blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button">
                  Login
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
