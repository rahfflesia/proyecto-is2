import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 p-0" fluid>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4}>
          <div className="shadow p-4 bg-white rounded">
            <h2 className="text-center mb-4">Inicia sesión</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check type="checkbox" label="Recuérdame"/>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Iniciar sesión
              </Button>
            </Form>
            <span>¿No tienes una cuenta? <a href="#">Regístrate</a></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
