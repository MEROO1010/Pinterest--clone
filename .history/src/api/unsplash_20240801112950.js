import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorisation: "Client-ID _89lfBWT1BsHUcvzx_B2AGd2kZZvCTxGEb796F9OflI",
  },
});