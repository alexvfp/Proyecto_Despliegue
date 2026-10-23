CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
  email VARCHAR(150) NOT NULL UNIQUE,
  creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email) VALUES
  ('Ana', 'ana@example.com'),
  ('Luis', 'luis@example.com');
