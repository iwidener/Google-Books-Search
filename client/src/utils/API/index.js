import axios from "axios";

export default {
  // Gets all posts
  getGooglebooks: function () {
    return axios.get("/api/googlebooks");
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
  },

  viewGooglebook: function () {
    return axios.post("/api/googlebooks/")
  },
  
  searchGooglebook: function (title) {
    return axios.get("/api/googlebooks/search?q=" + title);
  }
};
