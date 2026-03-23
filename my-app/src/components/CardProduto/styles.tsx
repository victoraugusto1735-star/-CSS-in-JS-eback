import styled from '@emotion/styled'
import { BotaoProps } from './types'

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Nome = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000000;
`

export const Preco = styled.div`
  color: #00ff6a;
  font-size: 16px;
  margin-bottom: 12px;
`

export const Botao = styled.button<BotaoProps>`
  background-color: ${(props) =>
    props.adicionado ? '#09ff8c' : '#2e3031'};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  align-items: center;
  display: flex;
  justify-content: center;
`