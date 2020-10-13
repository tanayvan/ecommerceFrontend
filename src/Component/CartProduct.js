import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";

export default function CartProduct({ data }) {
  return (
    <div
      className="row m-3"
      style={{
        border: "1px solid #eaeaec",
      }}
    >
      <div class="col-md-3 col-6">
        <img
          src={data.productImages[0]}
          style={{ width: "100%", borderRadius: "15px" }}
          className="m-1"
        />
      </div>
      <div class="col-md-8 col-6">
        <div class="mt-2">{data.name}</div>
        <div class="mt-2">Rs. {data.price}</div>
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
