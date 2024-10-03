import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Existem muitos códigos desnecessários.
  Resolva, Refatore o código e simplifique.
*/

export const Desafio3 = ()=> {
  const [list, setList] = useState([
    1, 2, 3, 4
  ]);

  function mostraQuantidade() {
    const quantidade = list.length;
    return quantidade;
  }

  function mostraLista() {
    return (list.map(item => <li>item: {item}</li>));
  }


  return (
    <>
      <div>
        <span>quantidade: {mostraQuantidade()}</span>
        <ul>
          {mostraLista()}
        </ul>
      </div>
    </>
  );
}
