import React from "react";
import { useParams, Link } from "react-router-dom";

const mockBooks = [
  // ... tu array de mockBooks
];

const BookView = () => {
  const { id } = useParams(); // Obtener el id del libro desde la URL
  const book = mockBooks.find((book) => book.id === parseInt(id));

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div className="book-view">
      <div className="book-details">
        <img src={book.cover} alt={book.title} className="book-cover" />
        <h2>{book.title}</h2>
        <p>Autor: {book.author}</p>
        <p>Precio: ${book.price}</p>
        <p>
          Descripción: {book.description || "Este libro aún no tiene descripción disponible."}
        </p>
        <Link to="/" className="btn btn-secondary">
          Volver al catálogo
        </Link>
        <button className="btn btn-primary">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default BookView;
