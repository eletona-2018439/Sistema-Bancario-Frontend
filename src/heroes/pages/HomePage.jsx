import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Row, Col } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <>
      <hr />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="imagen1.jpg"
            alt="Imagen 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="imagen2.jpg"
            alt="Imagen 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="imagen3.jpg"
            alt="Imagen 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="imagen4.jpg"
            alt="Imagen 4"
          />
        </Carousel.Item>
      </Carousel>

      <div className="container mt-5">
        <h2>Conoce más acerca de nosotros</h2>
        <hr />
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="imagen5.jpg" />
              <Card.Body>
                <Card.Title>Amplia variedad de opciones para satisfacer tus necesidades financieras</Card.Title>
                <Card.Text>
                  En All Star, te ofrecemos una amplia gama de servicios financieros para que puedas encontrar exactamente lo que necesitas. Desde crear cuentas, diferentes tipos de cuenta como de ahorro con características especiales hasta transferencias atractivos, queremos brindarte la comodidad de tener todas tus necesidades financieras en un solo lugar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="imagen7.jpg" />
              <Card.Body>
                <Card.Title>Atención personalizada y un servicio excepcional para ti y tu familia</Card.Title>
                <Card.Text text="justific">
                  En nuestro banco All Star, nos importas de verdad. Valoramos la relación personalizada con nuestros clientes y nos comprometemos a brindarte un servicio excepcional. Nuestro equipo altamente capacitado está aquí para escucharte, comprender tus necesidades y proporcionarte soluciones financieras adaptadas a tu situación particular.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="imagen6.jpg" />
              <Card.Body>
                <Card.Title>Innovación y tecnología avanzada para una experiencia bancaria de vanguardia</Card.Title>
                <Card.Text>
                  Sabemos que el mundo está en constante evolución y que la tecnología desempeña un papel fundamental en nuestras vidas. En nuestro banco, nos mantenemos a la vanguardia de la innovación y la tecnología avanzada para ofrecerte una experiencia bancaria moderna y conveniente. Con nuestros servicios de banca en línea y nuestras aplicaciones móviles intuitivas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="container">
        <header className="text-center mt-4">
          <h1>¡Gracias por preferirnos!</h1>
          <hr />
        </header>
        <main>
          <div className="row mt-4">
            <div className="col-md-6">
              <section>
                <h2>Contacto</h2>
                <p>Puedes comunicarte con nosotros a través de los siguientes medios:</p>
                <ul>
                  <li>Teléfono: 123-456-7890</li>
                  <li>Email: allstar@gmail.com</li>
                  <li>Dirección: Calle Principal #123, Ciudad de Guatemala</li>
                </ul>
              </section>
            </div>
            <div className="col-md-6">
              <section>
                <h2>Redes Sociales</h2>
                <p>Síguenos en nuestras redes sociales para estar al tanto de nuestras novedades:</p>
                <a href="https://www.facebook.com/ejemplonbank">
                  <img
                    src="facebook.jpg"
                    alt="Facebook"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }} // Ajusta el tamaño del ícono de Facebook
                  />
                </a>

                <a href="https://www.twitter.com/ejemplonbank">
                  <img
                    src="twitter.jpg"
                    alt="Twitter"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }} // Ajusta el tamaño del ícono de Twitter
                  />
                </a>

                <a href="https://www.instagram.com/ejemplonbank">
                  <img
                    src="instagram.jpg"
                    alt="Instagram"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }} // Ajusta el tamaño del ícono de Instagram
                  />
                </a>
              </section>
            </div>
          </div>
        </main>
        <footer className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Bank All Star. Todos los derechos reservados.</p>
        </footer>
      </div>

    </>
  );
};