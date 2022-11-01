import axios from "axios";
import { SET_DATA } from "./actiontypes";

export const fetchData = (category_name, search_data) => {
  const url = "http://localhost:8080/api/books";
  const postData = JSON.stringify({
    book_number: "",
    language: "",
    mime_type: "",
    author: search_data,
    title: search_data,
    topic: category_name,
    limit: "25",
  });
  const requestHeaders = {
    headers: { "Content-Type": "application/json" },
  };

  return (dispatch) => {
    axios
      .post(url, postData, requestHeaders)
      .then((response) => {
        let result = response.data.result;
        dispatch({
          type: SET_DATA,
          payload: result,
        });
      })
      .catch((err) => console.log(err));
  };
};
