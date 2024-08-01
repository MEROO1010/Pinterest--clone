import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID _89lfBWT1BsHUcvzx_B2AGd2kZZvCTxGEb796F9OflI",
  },
});