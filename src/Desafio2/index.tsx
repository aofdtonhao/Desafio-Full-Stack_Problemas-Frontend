import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
    Problema: Não vejo problemas.
    Solução: "Se o problema possui solução, não devemos nos preocupar com ele. E se não possui solução, de nada adianta nos preocuparmos" - Epiteto.
*/

export const Desafio2 = ()=> {
  
  const [list, setList] = useState([
    1, 2
  ]);

  return (
    <>
      <ul>
        {list.map(item => <li key={item}>item: {item}</li>)}
      </ul>
    </>
  );

}
