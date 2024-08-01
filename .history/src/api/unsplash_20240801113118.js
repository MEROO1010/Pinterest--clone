import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorisation: "639187 _89lfBWT1BsHUcvzx_B2AGd2kZZvCTxGEb796F9OflI",
  },
});