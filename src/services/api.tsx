import axios from "axios";

const API_URL = `https://dev-api.qr-database.com/`;

export const getUserData = async () => {
  const res = await axios.get(`${API_URL}user`).then((data) => data.data);
  return res;
};
