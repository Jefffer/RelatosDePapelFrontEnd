import { useState, useEffect } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/books-info.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error al cargar libros:", error));
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredBooks = books.filter((book) => {
    const searchText = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
    );
  });

  const findBookById = (id) => books.find((book) => book.id === parseInt(id));

  return {
    books,
    filteredBooks,
    searchTerm,
    handleSearchChange,
    findBookById
  };
};

export default useBooks;
