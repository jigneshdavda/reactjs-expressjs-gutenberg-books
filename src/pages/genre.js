import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import arrowIcon from "../assets/images/Back.svg";
import Book from "../components/cards/book";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

export default function Genre() {
  const { category } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.bookData);
  // console.log("Redux State: ", reduxState);
  const { book_data } = reduxState;

  useEffect(() => {
    dispatch(fetchData(category));
  }, []);

  // console.log("Book data: ", book_data);

  return (
    <div className="row">
      <section className="brand-genre-header">
        <div className="container">
          <div className="row">
            <div className="genre-header">
              <div className="genre-icon">
                <img
                  className="go-back"
                  src={arrowIcon}
                  alt="previous-icon"
                  onClick={() => {
                    navigate(-1);
                  }}
                />
              </div>
              <div className="category-title">
                <h2>
                  {category.trim().charAt(0).toUpperCase() + category.slice(1)}
                </h2>
              </div>
            </div>
          </div>
          <div className="row search-box-block">
            <input type="text" placeholder="Search" className="search-box" />
          </div>
        </div>
      </section>

      <div className="brand-genre-body py-5">
        <div className="container">
          <div className="row">
            {book_data ? (
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
