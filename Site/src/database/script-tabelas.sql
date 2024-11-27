CREATE DATABASE corinthianodecoracao;
USE corinthianodecoracao;


CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(25)
);

CREATE TABLE resultado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pontos INT,
    dtRealizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM usuario;
SELECT * FROM resultado;



