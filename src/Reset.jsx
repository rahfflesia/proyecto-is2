import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();  // Aquí se obtiene el token desde la URL
  const navigate = useNavigate();

  const handleReset = async () => {
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/api/reset/${token}`, { password });
      setMessage('Tu contraseña ha sido restablecida exitosamente.');
      
      setTimeout(() => {
        navigate('/login');  // Redirige al usuario a la pantalla de inicio de sesión
      }, 3000);  // Espera 3 segundos antes de redirigir

    } catch (error) {
      setMessage('Hubo un error al restablecer la contraseña. Por favor intenta nuevamente.');
      console.log(error);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 p-0" fluid>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4}>
          <div className="shadow p-4 bg-white rounded">
            <h2 className="text-center mb-4">Restablecer contraseña</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <Form>
              <Form.Group className="mb-3" controlId="formNewPassword">
                <Form.Label>Nueva contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu nueva contraseña" onChange={(e) => setPassword(e.target.value)}
                  value={password}                   
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirma tu nueva contraseña</Form.Label>
                <Form.Control type="password" placeholder="Confirma tu nueva contraseña" onChange={(e) => setConfirmPassword(e.target.value)}                                     
                  value={confirmPassword}                 
                  required 
                />
              </Form.Group>
              <Button variant="primary" className="w-100 mb-3 mt-3" onClick={handleReset}>
                Restablecer contraseña
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
