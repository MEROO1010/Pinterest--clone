import axios from 'axios';

const unsplash = '_89lfBWT1BsHUcvzx_B2AGd2kZZvCTxGEb796F9OflI';

axios.get('/api/endpoint', {
  headers: {
    Authorization: `Bearer ${unsplash}`,
  },
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

  export default unsplash; 