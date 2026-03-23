import React from "react";
import { useState } from 'react'
import { Card, Nome, Preco, Botao } from './styles'
import { CardProdutoProps } from './types'

export default function CardProduto({ nome, preco }: CardProdutoProps) {
  const [adicionado, setAdicionado] = useState(false)

  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>R$ {preco.toFixed(2)}</Preco>

      <Botao
        adicionado={adicionado}
        onClick={() => setAdicionado(!adicionado)}
      >
        {adicionado ? 'Adicionado' : 'Adicionar ao carrinho'}
      </Botao>
    </Card>
  )
}