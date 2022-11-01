import { Link } from "react-router-dom";

export default function Genre(props) {
  return (
    <div className="col-md-6 mb-4">
      <Link to={`/genre/${props.title.toLowerCase()}`}>
        <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="me-2">
              <img
                src={"./assets/images/" + props.title + ".svg"}
                className="genre-card-icon"
                alt={props.title}
              />
            </div>
            <div className="genre-title">
              <h5>{props.title}</h5>
            </div>
          </div>
          <div>
            <p className="go-to-genre-button">
              <img src={"./assets/images/Next.svg"} alt="next-icon" />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
