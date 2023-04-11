import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "75800c5cfe7c45ab928fa23b161d75be",
  },
});
