import Axios from "axios";
import {
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
} from "../constants/cartConstants";

export const getCartData = () => async (dispatch) => {
  try {
    dispatch({ type: CART_LIST_REQUEST });
    const { data } = await Axios.get("/api/getcart/admin");
    dispatch({
      type: CART_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
