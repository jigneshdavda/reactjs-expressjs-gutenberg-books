import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import Book from "../components/cards/book";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

export default function Genre() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState("");

  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.bookData);
  // console.log("Redux State: ", reduxState);
  const { book_data } = reduxState;

  useEffect(() => {
    dispatch(fetchData(category, searchData));
  }, [category, dispatch, searchData]);

  // console.log("Book data: ", book_data);

  const handleSearchEnter = () => {
    // console.log("Search data: ", searchData);
    dispatch(fetchData(category, searchData));
  };

  return (
    <div className="row">
      <section className="brand-genre-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-3">
              <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="genre-icon me-3">
                  <img
                    className="go-back"
                    src={"./../assets/images/Back.svg"}
                    alt="back-icon"
                    onClick={() => {
                      navigate(-1);
                    }}
                  />
                </div>
                <div className="category-title">
                  <h2>
                    {category.trim().charAt(0).toUpperCase() +
                      category.slice(1)}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="search-box-block">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-box"
                  onChange={(event) => {
                    setSearchData(event.target.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearchEnter();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brand-genre-body py-5">
        <div className="container">
          <div className="row">
            {book_data.length > 0 ? (
              book_data.map((item, index) => {
                return <Book key={index} booksData={item} />;
              })
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
