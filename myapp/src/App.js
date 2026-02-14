import { useState } from "react";
import BookList from "./components/booklist";
import AddBookForm from "./components/addbookform";
import SearchBar from "./components/searchbar";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { id: 2, title: "Atomic Habits", author: "James Clear", year: 2018 },
    { id: 3, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>📚 Library Management UI</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddBookForm addBook={addBook} />
      <BookList books={filteredBooks} removeBook={removeBook} />
    </div>
  );
}

export default App;
