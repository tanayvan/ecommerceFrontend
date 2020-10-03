import React from "react";
import Card from "./Card";

import ourphoto from "../icons/ourpic.jpg";
import Base from "./Base";
import { Link } from "react-router-dom";

const Product = [
  {
    title: "GB Graphic Tee V1",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1527718641255-324f8e2d0421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  },
  {
    title: "GB Crewneck Tee V1",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "GB Graphic Tee V2",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1496056013337-d6a1dd4fb8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80",
  },
  {
    title: "GB  Tee V4",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
];

export default function Homepage() {
  return (
    <>
      <Base>
        {/* shop start */}
        <div class="text-center display-4 mt-5">Shop</div>
        <div class="container mt-5">
          <div class="row">
            {Product.map((item) => (
              <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                <Card
                  title={item.title}
                  price={item.price}
                  url={item.Imageurl}
                />
              </div>
            ))}
          </div>
        </div>
        {/* shop end */}

        {/* about us start */}
        <div class="container">
          <div class="mt-5 text-center display-4 my-2">About Us</div>
          <div class="row mt-5">
            <div class="col-md-6 col-12 text-center">
              <img
                src={ourphoto}
                alt=""
                style={{ width: "70%", height: "100%" }}
              />
            </div>
            <div
              class="col-md-6 col-12 mt-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "1.3rem" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        {/* aboutu us end */}
      </Base>
    </>
  );
}
