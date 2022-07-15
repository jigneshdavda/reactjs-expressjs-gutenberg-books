import arrowIcon from "../../assets/images/Next.svg";
import { Link } from "react-router-dom";

export default function Genre(props) {
  return (
    <div className="col-md-6 p-2">
      <div className="genre-card">
        <div className="row">
          <div className="col-2 genre-icon">
            <img src="" alt="" />
          </div>
          <div className="col-8 genre-title">{props.title}</div>
          <div className="col-2 genre-link">
            <Link to={`/genre/${props.title.toLowerCase()}`}>
              <img src={arrowIcon} alt="next-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
