import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import React, { useEffect, useState } from "react";
import Base from "./Base";
import Card from "./Card";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Product = {
  title: "GB Graphic Tee V1",
  price: 299,
  Imageurl:
    "https://images.unsplash.com/photo-1527718641255-324f8e2d0421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
};

const data = [
  {
    title: "GB Graphic Tee V2",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1496056013337-d6a1dd4fb8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80",
  },
  {
    title: "GB Graphic Tee V2",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "GB  Tee V4",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "GB  Tee V4",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1523585298601-d46ae038d7d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Base>
        <div class="container mt-3">
          <div class="row">
            <motion.div
              class="col-md-6 col-12 mt-5 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
            >
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                loop="true"
              >
                {data.map((item) => {
                  return (
                    <SwiperSlide>
                      <motion.img
                        src={item.Imageurl}
                        style={{ width: "80%" }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>
            <motion.div
              class="col-md-6 col-12 mt-5"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div class="display-4">{Product.title}</div>
              <div
                class="mt-3"
                style={{ fontSize: "2rem" }}
              >{`Rs ${Product.price}`}</div>

              {/* Size Start */}
              <div className="mt-3">
                <div class="" style={{ fontSize: "1.8rem" }}>
                  Size
                </div>
                <div class="" style={{ fontSize: "2rem" }}>
                  <button type="button" class="btn btn-outline-secondary btn">
                    S
                  </button>
                  <button type="button" class="btn btn-outline-secondary mx-2">
                    M
                  </button>
                  <button type="button" class="btn btn-outline-secondary  mx-2">
                    L
                  </button>
                </div>
              </div>
              {/* size end */}
              <Link to="/cart" class="btn btn-dark btn-lg btn-block mt-3">
                Add To Cart
              </Link>
              <div class="mt-4">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    Description
                  </AccordionSummary>
                  <AccordionDetails>
                    Sewed with 100% Premium cotton, this is your everyday tee
                    perfect for any adventure.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    Shipping and Return
                  </AccordionSummary>
                  <AccordionDetails>
                    Returns are offered within 30 days after product delivery on
                    items that are unworn, unaltered and in new condition with
                    all tags attached. With the exception of items marked FINAL
                    SALE such as sale items and brown bag items. All sale items
                    are marked as final sale. We can accommodate size exchanges
                    on these items, but we are not able to process any refunds.
                  </AccordionDetails>
                </Accordion>
              </div>
            </motion.div>
          </div>
          {/* You may also like */}
          <div class="mt-5">
            <div class="company text-center">You May Also Like</div>
            <div class="row mt-2">
              {data.map((item) => (
                <div class="col-lg-3 col-md-4 col-6">
                  <Card
                    price={item.price}
                    url={item.Imageurl}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}
