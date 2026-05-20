import React from 'react'
// import styles from "./Cards.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import fono from "../../Imagens/fono.jpg";

const Cards = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fono} />

      <Card.Body>
        <Card.Title>Autismo</Card.Title>

        <Card.Text>
          Atendimento especializado para TEA.
        </Card.Text>

        <Button variant="success">
          Saiba mais
        </Button>

      </Card.Body>
    </Card>
  )
}

export default Cards