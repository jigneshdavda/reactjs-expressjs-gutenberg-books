export default function book(props) {
  // console.log("Item data: ", props);
  return (
    <div className="col-md-2 p-2">
      <div className="book-card">
        <img
          alt={ props.booksData.title }
          src={ props.booksData.imageURL }
        />
      </div>
      <div className="book-details pt-2">
        <div className="book-title pb-1">{ props.booksData.title }</div>
        <div className="book-author">{ props.booksData.author_info[0].name }</div>
      </div>
    </div>
  );
}
