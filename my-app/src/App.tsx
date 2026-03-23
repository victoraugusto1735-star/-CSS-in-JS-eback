import CardProduto from './components/CardProduto/index';
import React from "react";
import styled from "@emotion/styled";

// Container principal
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff05ff, #ee0d51);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  color: #000000;

`;

// Título estilizado
const Titulo = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  
`;

// Área dos cards
const Lista = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Titulo>Minha Loja Gamer</Titulo>

      <Lista>
        <CardProduto nome="Teclado Mecânico RGB" preco={299.9} />
        <CardProduto nome="Mouse Gamer 16000 DPI" preco={149.9} />
        <CardProduto nome="Headset Surround 7.1" preco={199.9} />
      </Lista>
    </Container>
  );
}