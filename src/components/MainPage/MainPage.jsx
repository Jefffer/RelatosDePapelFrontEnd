import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import useBooks from "../../hooks/useBooks";

const MainPage = ({ cart, onAddToCart, onRemoveFromCart }) => {
  const { filteredBooks, searchTerm, handleSearchChange } = useBooks();

  return (
    <div className="main-page">
      <Header />

      <main className="main-content d-flex">
        <div className="books-container p-4">
          <h2>Catálogo disponible</h2>
          <div id="search-bar">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Buscar libros..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="books-grid">
            {filteredBooks.length === 0 ? (
              <p>
                No se encontraron libros, prueba a buscar por otro Título o
                Autor.
              </p>
            ) : (
              filteredBooks.map((book) => (
                <div key={book.id} className="book-card">
                  {/* <div className="card book-card"> */}
                    <Link to={`/book/${book.id}`} className="btn btn-primary">
                      <img
                        src={book.cover}
                        className="card-img-top book-cover"
                        alt={book.title}
                      />
                      <h5 id="card-title">{book.title}</h5>
                    </Link>
                    <div className="card-body">
                      <p className="card-text">Autor: {book.author}</p>
                      <p id="card-price" className="card-text">
                        {book.price}€
                      </p>
                    </div>

                    <div className="card-body">
                      <button
                        className="btn btn-primary"
                        onClick={() => onAddToCart(book)}
                      >
                        Agregar al carrito 🛒
                      </button>
                    </div>
                  </div>
                // </div>
              ))
            )}
          </div>
        </div>

        <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />
      </main>
    </div>
  );
};

export default MainPage;
