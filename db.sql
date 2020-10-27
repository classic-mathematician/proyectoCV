CREATE DATABASE db_articulos;

USE db_articulos;


CREATE TABLE articulo(
    id INT(12) NOT NULL,
    nombre varchar(80) NOT NULL,
    img TEXT NOT NULL,
    categoria VARCHAR(40) NOT NULL,
    descripcion VARCHAR(200) NOT NULL
);


ALTER TABLE articulo
    ADD PRIMARY KEY (id);

ALTER TABLE articulo
    MODIFY id INT(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

    