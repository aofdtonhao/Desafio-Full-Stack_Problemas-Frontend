import React from "react";
import { Item } from "./Item";
import { useDesafio5Controller } from "./useDesafio5Controller";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e melhore a performance.

  Obs. considere o componente filho também para resolver esse desafio

  Comentários sobre a sua solução:
    Problema: O principal problema estava no "renderCounter".
    Solução: Coloquei o incremento do renderCounter.current pra um useEffect().
*/

export function Desafio5() {

  const { list, addItem, numero, parOuImpar } = useDesafio5Controller();
  
  return (
    <>
      <button onClick={addItem}  data-testid="btn1">adiciona + 1 item na lista</button>
      <span data-testid="size">{list.length}</span>
      <ul>
        {list.map((item) => (
          <Item key={item} valor={item} parOuImpar={parOuImpar} />
        ))}
      </ul>
      <p>
        {numero} é  {parOuImpar(numero)}
      </p>
    </>
  );

}
