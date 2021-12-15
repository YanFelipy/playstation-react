import axios from "axios";

// let userData = localStorage.getItem("psreact:userData");

//if (userData) {
 // userData = JSON.parse(userData);
// }

export const api = axios.create({
  baseURL: "http://localhost:3003",
  
});
