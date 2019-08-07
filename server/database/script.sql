CREATE TABLE Administradores
(
	adminId              SERIAL NOT NULL,
	nombreAdm            VARCHAR(100) NOT NULL,
	apellidoAdm          VARCHAR(100) NOT NULL,
	nomUsuario           VARCHAR(30) NOT NULL,
	clave                VARCHAR(30) NOT NULL
);



ALTER TABLE Administradores
ADD PRIMARY KEY (adminId);



CREATE TABLE Bodegas
(
	bodegaId             SERIAL NOT NULL,
	nombreBodg           VARCHAR(50) NOT NULL,
	observacion          VARCHAR(100) NOT NULL
);



ALTER TABLE Bodegas
ADD PRIMARY KEY (bodegaId);



CREATE TABLE Categorias
(
	categoriaId          SERIAL NOT NULL,
	nombreCat            VARCHAR(50) NOT NULL
);



ALTER TABLE Categorias
ADD PRIMARY KEY (categoriaId);



CREATE TABLE Clientes
(
	clienteId            SERIAL NOT NULL,
	nombreCli            VARCHAR(100) NOT NULL,
	cedula               VARCHAR(10) NOT NULL,
	direccionCli         VARCHAR(50) NOT NULL,
	celuCli              VARCHAR(12) NOT NULL,
	fijoCli              VARCHAR(12) 
);



ALTER TABLE Clientes
ADD PRIMARY KEY (clienteId);



CREATE TABLE Detalle_Facturas
(
	detalleId            SERIAL NOT NULL,
	cantidadVenta        INTEGER NOT NULL,
	descripcion          VARCHAR(50) NOT NULL,
	valorTotal           INTEGER NOT NULL,
	facturaId            INTEGER NULL,
	productoId           INTEGER NULL
);



ALTER TABLE Detalle_Facturas
ADD PRIMARY KEY (detalleId);



CREATE TABLE Facturas
(
	facturaId            SERIAL NOT NULL,
	fechaFact            DATE NOT NULL,
	descuento            FLOAT NOT NULL,
	valorUnit            FLOAT NOT NULL,
	iva                  FLOAT NOT NULL,
	clienteId            INTEGER NULL,
	adminId              INTEGER NULL
);



ALTER TABLE Facturas
ADD PRIMARY KEY (facturaId);



CREATE TABLE Perchas
(
	perchaId             SERIAL NOT NULL,
	nombrePer            VARCHAR(50) NOT NULL,
	descripcion          VARCHAR(100) NOT NULL,
	observacion          VARCHAR(100) NOT NULL,
	bodegaId             INTEGER NULL
);



ALTER TABLE Perchas
ADD PRIMARY KEY (perchaId);



CREATE TABLE Productos
(
	productoId           SERIAL NOT NULL,
	nombreProd           VARCHAR(50) NOT NULL,
	precioUnit           FLOAT NOT NULL,
	fechaElab            DATE NOT NULL,
	fechaVenc            DATE NOT NULL,
	cantidadProd         INTEGER NOT NULL,
	proveedorId          INTEGER NOT NULL,
	perchaID             INTEGER NOT NULL,
	categoriaId          INTEGER NOT NULL
);



ALTER TABLE Productos
ADD PRIMARY KEY (productoId);



CREATE TABLE Proveedores
(
	proveedorId          SERIAL NOT NULL,
	nombreProv           VARCHAR(100) NOT NULL,
	correo             VARCHAR(30) NOT NULL,
	celuProv             VARCHAR(12) NOT NULL,
	fijoProv             VARCHAR(12) NOT NULL,
	imgProv             VARCHAR(200) NULL
);



ALTER TABLE Proveedores
ADD PRIMARY KEY (proveedorId);



ALTER TABLE Detalle_Facturas
ADD FOREIGN KEY (facturaId) REFERENCES Facturas (facturaId);



ALTER TABLE Detalle_Facturas
ADD FOREIGN KEY (productoId) REFERENCES Productos (productoId);



ALTER TABLE Facturas
ADD FOREIGN KEY (clienteId) REFERENCES Clientes (clienteId);



ALTER TABLE Facturas
ADD FOREIGN KEY (adminId) REFERENCES Administradores (adminId);



ALTER TABLE Perchas
ADD FOREIGN KEY (bodegaId) REFERENCES Bodegas (bodegaId);



ALTER TABLE Productos
ADD FOREIGN KEY (proveedorId) REFERENCES Proveedores (proveedorId);



ALTER TABLE Productos
ADD FOREIGN KEY (perchaId) REFERENCES Perchas (perchaId);



ALTER TABLE Productos
ADD FOREIGN KEY (categoriaId) REFERENCES Categorias (categoriaId);


create view view_productos
as select nombre from Proveedores

1- cree una vista de la tabla clientes que muestre nombreCompania, nombreCOntacto, direccionCLient