export default function book(props) {
  // console.log("Item data: ", props);
  return (
    <div className="col-md-2 col-4 p-2">
      <div className="book-card">
        <img
          alt={props.booksData.title}
          src={"../../assets/images/sample.png"}
        />
        <div className="book-details pt-2">
          <div className="book-title pb-1">{props.booksData.title}</div>
          <div className="book-author">
            {props.booksData.author_info[0].name}
          </div>
        </div>
      </div>
    </div>
  );
}
