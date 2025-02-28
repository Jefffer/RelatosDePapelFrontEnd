import { useState, useEffect } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/ms-book-catalogue/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ targetMethod: "GET" }),
        });

        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }

        const data = await response.json();
        setBooks(data.filter(book => book.visible)); // Filtramos solo libros visibles
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { filteredBooks, searchTerm, handleSearchChange };
};

export default useBooks;
