import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";

const data = [
  {
    title: "GB Graphic Tee V2",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1499713907394-43c9d094ac2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=736&q=80",
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
  {
    title: "GB  Tee V4",
    price: 299,
    Imageurl:
      "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
];

export default function CartProduct() {
  return (
    <div
      className="row m-3"
      style={{
        border: "1px solid #eaeaec",
      }}
    >
      <div class="col-md-3 col-6">
        <img
          src={data[0].Imageurl}
          style={{ width: "100%", borderRadius: "15px" }}
          className="m-1"
        />
      </div>
      <div class="col-md-8 col-6">
        <div class="mt-2">{data[0].title}</div>
        <div class="mt-2">Rs. {data[0].price}</div>
        <div class="mt-2">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button size="small" style={{ outline: "none", minWidth: "20px" }}>
              <RemoveIcon />
            </Button>
            <div class="mx-2">1</div>
            <Button size="small" style={{ outline: "none", minWidth: "20px" }}>
              <AddIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
