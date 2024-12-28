import React, { useState } from "react";
import "./MainPage.css";

const mockBooks = [
  { id: 1, title: "Cien años de soledad", author: "Gabriel García Márquez", price: 20 },
  { id: 2, title: "1984", author: "George Orwell", price: 15 },
  { id: 3, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", price: 25 },
  { id: 4, title: "El principito", author: "Antoine de Saint-Exupéry", price: 10 },
];

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleRemoveFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };

  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-page">
      <header className="main-header d-flex justify-content-between align-items-center p-3">
        <h1 id="title">Relatos de Papel</h1>
        <p>Aquí podrás encontrar una gran selección de libros en formato físico y digital.</p>
        
        {/* <div className="cart">
          <h4>Carrito</h4>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="d-flex justify-content-between align-items-center">
                  <span>{item.title}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>El carrito está vacío</p>
          )}
        </div> */}

        <input
          type="text"
          className="form-control search-bar"
          placeholder="Buscar libros..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

      </header>

      

      <main className="main-content d-flex">
        <div className="books-container p-4">
          <h2>Libros disponibles</h2>
          <div className="row">
            {filteredBooks.map((book) => (
              <div key={book.id} className="col-md-3 mb-4">
                <div className="card book-card">
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Autor: {book.author}</p>
                    <p className="card-text">Precio: ${book.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(book)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="cart-container">
          <h4>Carrito</h4>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="d-flex justify-content-between align-items-center">
                  <span>{item.title}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>El carrito está vacío</p>
          )}
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
