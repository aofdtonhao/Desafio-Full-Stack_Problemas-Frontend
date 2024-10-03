/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
    Problema: JSX expressions must have one parent element.ts(2657).
    Solução: Wrap in JSX fragment.
*/

export const Desafio1 = ()=> {
  return (
      <>
        <span>item 1</span>
        <br />
        <span>item 2</span>
      </>
  );
}
