import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import useBooks from "../../hooks/useBooks";
import {
  Container,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Tooltip // Importa Tooltip
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { FaCartPlus } from "react-icons/fa";

const MainPage = ({ cart, onAddToCart, onRemoveFromCart }) => {
  const { filteredBooks, searchTerm, handleSearchChange } = useBooks();

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: 2,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Catálogo disponible
            </Typography>
            <TextField
              fullWidth
              label="Buscar libros... 🔎"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ marginBottom: 2 }}
            />
            <Grid container spacing={3} justifyContent="center">
              {filteredBooks.length === 0 ? (
                <Grid item xs={12}>
                  <Typography variant="body1">
                    No se encontraron libros, prueba con otro título o autor.
                  </Typography>
                </Grid>
              ) : (
                filteredBooks.map((book) => {
                  const coverImage = book.cover
                    ? `/${book.cover}.jpg`
                    : "/placeholder.png";

                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={book.id}
                      sx={{
                        marginBottom: 3,
                        flexBasis: { xs: "100%", sm: "48%", md: "30%" },
                        maxWidth: { xs: "100%", sm: "48%", md: "30%" },
                      }}
                    >
                      <Card
                        sx={{
                          boxShadow: 3,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Link
                          to={`/book/${book.id}`}
                          style={{
                            textDecoration: "none",
                            padding: 10,
                            paddingBottom: 0,
                            backgroundColor: "#00000008",
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              height: 300,
                              objectFit: "contain",
                              marginTop: 1,
                              transition: "transform 0.3s ease-in-out",
                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                            }}
                            image={coverImage}
                            alt={book.title}
                          />
                          <CardContent
                            sx={{
                              padding: 1,
                              display: "flex",
                              flexDirection: "column",
                              paddingBottom: 0,
                            }}
                          >
                            <Typography
                              variant="h5"
                              component="div"
                              sx={{
                                marginBottom: 1,
                                "&:hover": {
                                  color: "primary.main",
                                },
                              }}
                            >
                              {book.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Por <strong> {book.author} </strong>
                            </Typography>
                          </CardContent>
                        </Link>
                        <CardContent
                          sx={{
                            padding: 2,
                            marginTop: 1,
                            paddingTop: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            '& > :not(style) + :not(style)': {
                              marginTop: 2,
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold", color: "gray" }}>
                              {book.price}€
                            </Typography>
                            <Tooltip title={book.rating}> {/* Envuelve Rating con Tooltip */}
                              <Rating value={book.rating} readOnly />
                            </Tooltip>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            Género <strong> {book.category} </strong>
                          </Typography>
                          <Button
                            variant="contained"
                            onClick={() => onAddToCart(book)}
                            disabled={book.stock <= 0}
                            sx={{ width: "100%" }}
                            startIcon={<FaCartPlus />}
                          >
                            {book.stock > 0
                              ? "Agregar al carrito"
                              : "Agotado"}
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default MainPage;