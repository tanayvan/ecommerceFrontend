import React, { useState, useEffect } from "react";
import Card from "./Card";

import Lottie from "react-lottie";
import animationData from "../icons/25973-loading-dots.json";

import ourphoto from "../icons/ourpic.jpg";
import Base from "./Base";
import { getTshirts } from "../Apicalls/Apicalls";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    getTshirts().then((data) => {
      console.log(data);
      setProduct(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <Base>
        <div class="container">
          <Lottie
            options={{
              autoplay: true,
              animationData: animationData,
            }}
            height={300}
            isStopped={!loading}
          />
        </div>
      </Base>
    );
  }
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
                  id={item._id}
                  title={item.name}
                  price={item.price}
                  url={item.productImages[0]}
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
