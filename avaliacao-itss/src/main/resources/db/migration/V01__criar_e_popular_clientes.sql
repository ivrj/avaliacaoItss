--drop TABLE cliente


CREATE TABLE cliente
(
  id serial primary key not null,
  cpf character varying(11),
  nome character varying(30),
  telefone character varying(14)

) ;


INSERT INTO cliente (cpf , nome, telefone ) values ('74269688041', 'Jose de Almeida', '(86)2927-0685');
INSERT INTO cliente (cpf , nome, telefone ) values ('29900824091', 'Joao Bonifácio', '(86)98525-9285');
INSERT INTO cliente (cpf , nome, telefone ) values ('00918441005', 'Marcos Joaquim', '(91)98332-0434');
INSERT INTO cliente (cpf , nome, telefone ) values ('87011553002', 'Sebastiao Alfonso', '(91)2716-3413');
INSERT INTO cliente (cpf , nome, telefone ) values ('06124889005', 'Paulo Amorim', '(96)98767-1791');


