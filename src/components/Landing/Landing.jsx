import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Landing = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/main");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(interval);
    },);

    return (
        <Box
            sx={{
                backgroundColor: "#8298c6",
                width: "100vw",
                height: "100vh",
                margin: 0,
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#e9e7db",
                }}
            >
                <Typography variant="h1" sx={{ fontSize: "5.5rem", marginBottom: "1rem" }}>
                    RELATOS DE PAPEL 📔
                </Typography>
                <Box sx={{ fontSize: "1.3rem" }}>
                    <a
                        id="my-name"
                        href="https://github.com/Jefffer"
                        target="_blank"
                        style={{
                            color: 'inherit', // Mantener el color del texto
                            textDecoration: 'none', // Eliminar subrayado
                        }}
                    >
                        POR JEFFERSON RODRIGUEZ{" "}
                        {/* <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                            alt="GitHub"
                        /> */}
                    </a>
                    <br />
                    <br />
                    <Typography variant="body1">
                        Serás redirigido a la página principal en{" "}
                        <span
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                color: "#ff6347",
                                backgroundColor: "#e9e7db",
                                padding: "10px 20px",
                                borderRadius: "10px",
                                marginTop: "10px",
                                display: "inline-block",
                            }}
                        >
                            {countdown}
                        </span>{" "}
                        segundos...
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Landing;