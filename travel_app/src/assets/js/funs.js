import axios from "axios";

export default {
  getHome(callback) {
    axios.get("pro/index_slide").then(callback);
  },
  getMore(callback) {
    axios.get("pro/camp").then(callback);
  },
  getName(callback) {
    axios.get("pro/camp").then(callback);
  },
  getSearch(k, callback) {
    axios
      .get("/pro/msglist/keyword", {
        params: { k }
      })
      .then(callback);
  }
};
