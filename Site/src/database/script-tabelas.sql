create database corinthianodecoracao;
use corinthianodecoracao;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(60),
senha varchar(32)
);

create table resultado(
idResultado int primary key auto_increment,
fkUsuario int,
	foreign key (fkUsuario) references usuario(idUsuario),
dtResultado datetime default current_timestamp,
pontos int
);