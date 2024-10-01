import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

function HeaderChatUI() {
  return (
    <Container fluid className="h-100 p-0">
      {/* Header */}
      <Row className="shadow m-0 pt-3 pb-3">
        <Col>
          <h3 className="fw-bold">ChatApp</h3>
        </Col>
      </Row>

      <Row className="flex-grow-1 m-0">
        {/* Chats Sidebar */}
        <Col xs={12} md={4} lg={3} className="bg-light p-3 shadow-sm">
          {/* Barra de búsqueda */}
          <Form className="mb-3">
            <Form.Control type="text" placeholder="Buscar..." />
          </Form>
          <div className="d-flex justify-content-between mb-3">
            <i className="bi bi-chat-left-text fs-2 me-3 d-flex justify-content-center align-items-center" style={{ flex: '1 1 30%' }}></i>
            <i className="bi bi-telephone fs-2 me-3 d-flex justify-content-center align-items-center" style={{ flex: '1 1 30%' }}></i>
            <i className="bi bi-people fs-2 d-flex justify-content-center align-items-center" style={{ flex: '1 1 30%' }}></i>
          </div>
          <div className="mb-3">
            <h5 className="fw-bold fs-4">Chats</h5>
          </div>
          {/* Cajas de chat con imagen y detalles */}
          {Array.from({ length: 5 }, (_, i) => (
            <div className="chat-box mb-2 p-2 border rounded d-flex align-items-center" key={i}>
              <div
                className="me-3"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff", // Color de fondo del círculo
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {`C${i + 1}`} {/* Inicial del contacto */}
              </div>
              <div>
                <strong>Contacto {i + 1}</strong>
                <div className="text-muted">Último mensaje del contacto</div>
              </div>
            </div>
          ))}
        </Col>

        {/* Main Chat Interface */}
        <Col xs={12} md={8} lg={9} className="bg-white pr-3 pl-3 shadow-sm d-flex flex-column">
          {/* Header de la conversación sin margen */}
          <Row className="align-items-center p-3 mb-3" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <Col xs="auto">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff", // Color de fondo del círculo de la foto de perfil
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                P {/* Inicial del contacto */}
              </div>
            </Col>
            <Col>
              <div>
                <strong>Nombre del Contacto</strong>
                <div className="text-muted">Última vez activo: hace 10 minutos</div>
              </div>
            </Col>
          </Row>

          {/* Contenedor para mostrar los mensajes */}
          <div className="message-area mb-3" style={{ flexGrow: 1, maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
            {/* Aquí irían los mensajes */}
            <p><strong>Contacto 1:</strong> Hola, ¿cómo estás?</p>
            <p><strong>Tú:</strong> ¡Hola! Estoy bien, gracias.</p>
            <p><strong>Contacto 1:</strong> ¿Qué has estado haciendo?</p>
          </div>

          {/* Campo de entrada de mensajes */}
          <Row>
            <Col xs={10}>
              <Form.Control type="text" placeholder="Escribe un mensaje..." />
            </Col>
            <Col xs={2}>
              <Button variant="primary" className="w-100">
                <i className="bi bi-paperclip"></i> Adjuntar
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderChatUI;
