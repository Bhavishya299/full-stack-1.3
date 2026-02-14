function BookItem({ book, removeBook }) {
  return (
    <div className="border p-3 rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author} • {book.year}</p>
      </div>

      <button
        onClick={() => removeBook(book.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default BookItem;
