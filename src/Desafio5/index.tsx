import React from "react";
import { Item } from "./Item";
import { useDesafio5Controller } from "./useDesafio5Controller";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e melhore a performance.

  Obs. considere o componente filho também para resolver esse desafio

  Comentários sobre a sua solução:
    Problema: TODO.
    Solução: TODO.
*/

export function Desafio5() {
  const { list, addItem, numero, parOuImpar } = useDesafio5Controller();
  return (
    <>
      <button onClick={addItem} data-testid="btn1">adiciona + 1 item na lista</button>
      <p data-testid="size">tamanho da lista: {list.length}</p>
      <p>
        {numero} é {parOuImpar(numero)}
      </p>
      <ul>
        {list.map((item) => (
          <Item valor={item + 1} parOuImpar={parOuImpar} />
        ))}
      </ul>
    </>
  );
}
