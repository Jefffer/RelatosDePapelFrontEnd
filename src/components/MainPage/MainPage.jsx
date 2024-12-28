import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";

// const mockBooks = [
//   {
//     id: 5234,
//     title: "Estudio en Escarlata",
//     author: "Arthur Conan Doyle",
//     price: 16.8,
//     cover:
//       "https://m.media-amazon.com/images/I/71j2VixYTmS._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 6345,
//     title: "1984",
//     author: "George Orwell",
//     price: 15.9,
//     cover:
//       "https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 9845,
//     title: "Harry Potter y el prisionero de Azkaban",
//     author: "J.K. Rowling",
//     price: 25,
//     cover:
//       "https://m.media-amazon.com/images/I/81k9yx9N5+L._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 1029,
//     title: "El Señor de los Anillos: La Comunidad del Anillo",
//     author: "J.R.R. Tolkien",
//     price: 35.5,
//     cover:
//       "https://m.media-amazon.com/images/I/91GGJZ19aEL._UF1000,1000_QL80_.jpg",
//   },
//   {
//     id: 3925,
//     title: "La Santa Biblia",
//     author: "El mismísimo Jesucristo",
//     price: 22,
//     cover:
//       "https://m.media-amazon.com/images/I/61HqoXEqQ9L._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 1942,
//     title: "Berzerk Volumen 1",
//     author: "Kentaro Miura",
//     price: 28,
//     cover:
//       "https://m.media-amazon.com/images/I/71lnvXSiITL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 9453,
//     title: "Don Quijote de la Mancha",
//     author: "Miguel de Cervantes",
//     price: 29,
//     cover:
//       "https://m.media-amazon.com/images/I/91CIwR3QU1L._UF1000,1000_QL80_.jpg",
//   },
//   {
//     id: 3452,
//     title: "El coronel no tiene quien le escriba",
//     author: "Gabriel García Márquez",
//     price: 16.9,
//     cover:
//       "https://m.media-amazon.com/images/I/811MoGVEr4L._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 9556,
//     title: "Cien años de soledad",
//     author: "Gabriel García Márquez",
//     price: 24.9,
//     cover:
//       "https://m.media-amazon.com/images/I/91TvVQS7loL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 1001,
//     title: "World of Warcraft: Nuevos sabores de Azeroth",
//     author: "Chelsea Monroe-Cassel",
//     price: 27.9,
//     cover:
//       "https://m.media-amazon.com/images/I/81YE9xjPz7L._AC_UF894,1000_QL80_.jpg",
//   },
// ];

const MainPage = ({ cart, onAddToCart, onRemoveFromCart }) => {
  const [books, setBooks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
//   const [cart, setCart] = useState([]);

  // Cargar los datos del JSON
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

          <div className="row">
            {filteredBooks.length === 0 ? (
              <p>
                No se encontraron libros, prueba a buscar por otro Título o
                Autor.
              </p>
            ) : (
              filteredBooks.map((book) => (
                <div key={book.id} className="col-md-3 mb-4">
                  <div className="card book-card">
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
                </div>
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
