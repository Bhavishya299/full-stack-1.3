import BookItem from "./bookitem";

function BookList({ books, removeBook }) {
  if (books.length === 0) {
    return <p className="text-center text-gray-500">No books found.</p>;
  }

  return (
    <div className="space-y-3">
      {books.map(book => (
        <BookItem
          key={book.id}
          book={book}
          removeBook={removeBook}
        />
      ))}
    </div>
  );
}

export default BookList;
