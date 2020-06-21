import axios from "axios";
const set_auth_token = (token) => {
  if (token) axios.defaults.headers.common["x-auth-token"] = token;
  else delete axios.defaults.headers.common["x-auth-token"];
};
export default set_auth_token;
