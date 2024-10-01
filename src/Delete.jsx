import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const DeleteAccount = () => {
    const [email, setEmail] = useState('');  // Estado para almacenar el correo
    const [password, setPassword] = useState('');  // Estado para almacenar la contraseña
    const [message, setMessage] = useState('');  // Mensajes de error o éxito

    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm('¿Estas seguro de que deseas eliminar tu cuenta? ');

        if (confirmDelete) {
            try {
                const response = await axios.delete('http://localhost:3000/api/delete', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    data: { email, password }  // Enviar correo y contraseña para confirmar la identidad
                });

                setMessage('Tu cuenta ha sido eliminada correctamente');
            } catch (error) {
                setMessage('La cuenta no existe');
                console.error(error);
            }
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center vh-100 p-0" fluid>
            <Row className="justify-content-center w-100">
                <Col xs={12} md={6} lg={4}>
                    <div className="shadow p-4 bg-white rounded">
                        <h2 className="text-center mb-4">Eliminar cuenta</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        
                        <Form>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo" onChange={(e) => setEmail(e.target.value)}
                                    value={email}                                     
                                    required 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)}        
                                    value={password}                                     
                                    required 
                                />
                            </Form.Group>

                            <Form.Group className="text-center">
                                <Button  variant="danger" onClick={handleDeleteAccount} className="btn-lg">                                                                                                                                         
                                    ¿Seguro?
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DeleteAccount;
