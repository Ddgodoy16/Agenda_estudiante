-- Active: 1699840128730@@localhost@5432@postgres


create table tbl_usuarios
(
    nombre_usuario varchar(30) PRIMARY key,
    correo VARCHAR(70) UNIQUE, 
    contrasena VARCHAR(30),
    telefono NUMERIC,
    created_date TIMESTAMP DEFAULT current_timestamp, 
    deleted_date TIMESTAMP, 
    update_date TIMESTAMP
);

SELECT * from tbl_usuarios

insert into tbl_usuarios
(nombre_usuario, correo, contrasena)
values 
('egodoy', 'godoy@unitec.edu', 'dianormal'), 
('evgodoy', 'nunez@unitec.edu', '1234');

