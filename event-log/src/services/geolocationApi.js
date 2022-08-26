import axios from "axios";

const GEO_API =
  "http://api.positionstack.com/v1/forward?access_key=14dd860ce1209c032b664502aebe7fea&query=";

export const getLocation = async (addr) => {
  try {
    const response = await axios.get(`${GEO_API}${addr}`);
    const data = await response.data.data;
    const latitude = await data[0].latitude;
    const longitude = await data[0].longitude;
    return [latitude, longitude];
  } catch (err) {
    console.error(err.message);
  }
};
