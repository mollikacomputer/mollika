import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Registration.css'
const Registration = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-primary' >Register Now</h2> 
            <Form  >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ConfirmPassword</Form.Label>
          <Form.Control type="ConfirmPassword" placeholder="ConfirmPassword" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    );
};

export default Registration;