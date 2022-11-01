import "../App.css";
import Genre from "../components/cards/genre";
import { APP_NAME, APP_DESCRIPTION } from "../util/constants";

// Constant Genres to show on homepage
const genres = [
  "Fiction",
  "Philosophy",
  "Drama",
  "History",
  "Humour",
  "Adventure",
  "Politics",
];

export default function Home() {
  return (
    <div className="row">
      <section className="brand-header p-5">
        <div className="container">
          <h1>{APP_NAME}</h1>
          <p>{APP_DESCRIPTION}</p>
        </div>
      </section>

      <div className="brand-body py-5">
        <div className="container">
          <div className="row">
            {genres.map((genre, index) => (
              <Genre key={index} title={genre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
