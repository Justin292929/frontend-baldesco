import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Dropdown, Alert } from 'react-bootstrap';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const publicKey = 'your_public_key';

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setAlert({ show: true, message: 'Message sent successfully!', variant: 'success' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setAlert({ show: true, message: 'Failed to send message. Please try again.', variant: 'danger' });
      });
  };

  return (
    <div style={{ backgroundColor: '#013220', color: 'white', padding: '50px 20px', minHeight: '100vh' }}>
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Me</h1>
        <p style={{ textAlign: 'center', marginBottom: '50px' }}>
          Feel free to reach out to me anytime! Fill out the form below or connect with me on social media.
        </p>
        {alert.show && (
          <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
            {alert.message}
          </Alert>
        )}
        <Row>
          <Col md={6} className="mb-4">
            <h3>Get in Touch</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email (e.g., example@domain.com)"
                  required
                />
              </Form.Group>
              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Connect with Me</h3>
            <p>Follow me on social media for updates and more.</p>
            <div style={{ fontSize: '24px', display: 'flex', gap: '20px', marginTop: '20px' }}>
              <a
                href="https://www.facebook.com/profile.php?id=100014371423903"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#3b5998', textDecoration: 'none' }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#333', textDecoration: 'none' }}
              >
                <FaGithub />
              </a>
            </div>
            <Dropdown className="mt-4">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                More Options
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={toggleContactInfo}>
                  Contact Me
                </Dropdown.Item>
                <Dropdown.Item href="/abouts">About Me</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {showContactInfo && (
              <div style={{ marginTop: '20px', backgroundColor: '#222', padding: '15px', borderRadius: '8px' }}>
                <h5>Contact Information</h5>
                <p><strong>Email:</strong> justinbaldesco@gbox.ncf.edu.ph</p>
                <p><strong>Phone:</strong> 09999643137</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;