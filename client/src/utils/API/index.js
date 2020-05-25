import axios from "axios";

export default {
  // Gets all posts
  getGooglebooks: function (query) {
    return axios.get("/api/googlebooks", { params: { q: query } });
  },
  // Gets the post with the given id
  getGooglebook: function (id) {
    return axios.get("/api/googlebooks/" + id);
  },
  // Deletes the post with the given id
  deleteGooglebook: function (id) {
    return axios.delete("/api/googlebooks/" + id);
  },
  //  Saves a post to the database
  saveGooglebook: function (googlebookData) {
    return axios.post("/api/googlebooks", googlebookData);
  }
};
