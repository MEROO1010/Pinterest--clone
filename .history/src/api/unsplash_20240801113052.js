import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorisation: "Client-ID 9QoSqWVQyBffvn-uhu9jRGdNdnD0EoKuadKNOTge2n0",
  },
});