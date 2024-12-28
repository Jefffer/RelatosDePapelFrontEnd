import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BookDetails.css";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";


const BookView = ({ cart, handleRemoveFromCart }) => {
  const { id } = useParams(); // Obtener el id del libro desde la URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/books-info.json")
      .then((response) => response.json())
      .then((data) => {
        const foundBook = data.find((b) => b.id === parseInt(id));
        setBook(foundBook);
      })
      .catch((error) => console.error("Error al cargar libros:", error));
  }, [id]);

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div className="book-view">
      <Header />
      <main className="main-content d-flex">
        <div className="book-details">
          <img
            src={book.cover}
            alt={book.title}
            className="book-cover-details"
          />
          <h2>{book.title}</h2>
          <p>Autor: {book.author}</p>
          <p>Precio: ${book.price}</p>
          <p>
            Descripción:{" "}
            {book.description ||
              "Este libro aún no tiene descripción disponible."}
          </p>
          <Link to="/main" className="btn btn-secondary">
            Volver al catálogo
          </Link>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
        {/* <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/> */}
      </main>
    </div>
  );
};

export default BookView;
