import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1mk2Dff44ReI9O5_oSaD3IbNHS-pPnbcvcfEVGxmL8Pl6cidpDdJzd8xEhHEZaMHMNhDcvp2MOS7sSELTJpCg51-Swkbr8jw-TZ43YEVDO4Py4LRRISZeEsIRYPBZXYx'
    }
});

