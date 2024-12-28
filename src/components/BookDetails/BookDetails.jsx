import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BookDetails.css";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";

const BookView = ({ cart, onAddToCart, onRemoveFromCart }) => {
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
    return <p>Libro no encontrado!!</p>;
  }

  return (
    <div className="book-view">
      <Header />
      <main className="main-container">
        <div className="book-details">
          <div className="book-image">
            <img
              src={book.cover}
              alt={book.title}
              className="book-cover-details"
            />
          </div>
          <div className="book-info">
            <h2>{book.title}</h2>
            <p><strong>Autor: {book.author}</strong></p>
            <p id="price-detail">{book.price}€</p>
            <p>{book.description}</p>

            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(book)}
            >
              Agregar al carrito
            </button>
            <br />
            <br />
            <Link to="/main" className="btn btn-secondary">
              Volver al catálogo
            </Link>
          </div>
        </div>
        <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />
      </main>
    </div>
  );
};

export default BookView;
