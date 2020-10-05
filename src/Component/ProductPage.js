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

import Lottie from "react-lottie";
import animationData from "../icons/25973-loading-dots.json";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Link } from "react-router-dom";
import { getATshirts } from "../Apicalls/Apicalls";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function ProductPage(props) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const id = props.match.params.id;
    console.log(id);
    getATshirts(id)
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
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
                {product.productImages.map((url) => {
                  return (
                    <SwiperSlide>
                      <motion.img src={url} style={{ width: "80%" }} />
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
              <div class="display-4">{product.name}</div>
              <div
                class="mt-3"
                style={{ fontSize: "2rem" }}
              >{`Rs ${product.price}`}</div>

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
                  <AccordionDetails>{product.description}</AccordionDetails>
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
        </div>
      </Base>
    </div>
  );
}
