import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [data, setData] = useState({ //Aqui se guarda lo que hayas puesto en el formulario
    email: sessionStorage.getItem('email'),
    password: '',
    confirmPassword:''
  })
  const { token } = useParams();  // Aquí se obtiene el token desde la URL
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = async () => {
    if (data.password !== data.confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      console.log('1' + data.password + '2' + data.confirmPassword)
      return;
    }

    try {
      await axios.put('http://localhost:3000/api/login/',data);
      setMessage('Tu contraseña ha sido restablecida exitosamente.');
      
      setTimeout(() => {
        navigate('/login');  // Redirige al usuario a la pantalla de inicio de sesión
      }, 3000);  // Espera 3 segundos antes de redirigir

    } catch (error) {
      setMessage('Hubo un error al restablecer la contraseña. Por favor intenta nuevamente.');
      alert(data.email)
      console.log(error);
    }
  };

  const handleChange = (e) => { //Con este metodo se guardan los datos del formulario, no se como funciona me lo encontre por ahi
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
                <Form.Control type="password" placeholder="Ingresa tu nueva contraseña" name='password' onChange={handleChange}            
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirma tu nueva contraseña</Form.Label>
                <Form.Control type="password" placeholder="Confirma tu nueva contraseña" name='confirmPassword' onChange={handleChange}                                                
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
