CREATE DATABASE IF NOT EXISTS crud_nodes_db;
USE crud_nodes_db;
CREATE TABLE IF NOT EXISTS recomendation;

INSERT INTO `recomendation` (`Id_usuario`, `name`, `lastname`, `company`, `recomendation`) VALUES
(1, 'Macarena', 'Fernandez', 'Amdocs', 'Los invito a qu dejen su comentario!!'),
(2, 'Sergio ', 'Bollati', 'Claro', 'Muy buena! a seguir sumando...'),
(3, 'Ariel', 'VDKP', 'Nokia', 'Responsable, criteriosa, ojala nos volvamoes acruzar'),
(4, 'Edgardo', 'Ramos', 'Nokia', 'Necesito ayuda con mi página! avisame cuando podemos verlo :) ')
--
-- Índices para tablas volcadas