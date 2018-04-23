DROP DATABASE phonegap;
## CREACIÓN DE LA BASE DE DATOS
CREATE DATABASE phonegap;
## SELECCIONAMOS LA BASE DE DATOS
USE phonegap;
## CREACIÓN DE LA TABLA UNIMINUTO.
CREATE TABLE Uniminuto(
	id INT(11) NOT NULL AUTO_INCREMENT,
	curso VARCHAR(50) NOT NULL,
	docente VARCHAR(50) NOT NULL,
	estudiante VARCHAR(50)NOT NULL,
	nota1 FLOAT NOT NULL,
	nota2 FLOAT NOT NULL,
	nota3 FLOAT NOT NULL,
	promedio FLOAT NOT NULL,
	observaciones VARCHAR(50) NOT NULL,
	PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
## CONSULTA INSERT
INSERT INTO Uniminuto(curso,docente,estudiante,nota1,nota2,nota3,promedio,observaciones) VALUES ('Desarrollo De Aplicaciones', 'Wilmer Hernandez', 'Brayan Novoa', 5.0, 5.0, 5.0, 5.0,'Beca del 90 Por Ciento');