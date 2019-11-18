import axios from "axios";

export default {
  getHome(callback) {
    axios.get("product/index_slide").then(callback);
  }
};
