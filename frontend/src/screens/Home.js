import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <a href="http://www.cnc-form.fr">cnc form</a>
          </Col>
          <Col sm={6}>2</Col>
          <Col>
            <Row>
              <Col>
                <Button variant="primary">Primary</Button>
              </Col>
              <Col>
                <Button variant="warning">Warning</Button>
              </Col>
              <Col>
                <Button variant="light">Light</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
