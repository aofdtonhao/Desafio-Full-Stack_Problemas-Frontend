import {Desafio4} from '../Desafio4';
import {waitFor, render, getNodeText} from '@testing-library/react';
import user from '@testing-library/user-event';

describe('Desafio4',()=>{

  it('Deve ser Renderizado com os valores corretos 1',async ()=>{
    const component = render(<Desafio4 />);
    const btn1 =await component.getByTestId('btn1');
    const btn2 =await component.getByTestId('btn2');
    const btn3 =await component.getByTestId('btn3');
    const length = await component.getByTestId('length');
    const v1 = await component.getByTestId('v1');
    const v2 = await component.getByTestId('v2');
    const v3 = await component.getByTestId('v3');
    const total = await component.getByTestId('total');
    await user.click(btn1);
    await user.click(btn1);
    await user.click(btn1);
    await user.click(btn2);
    await user.click(btn2);
    await user.click(btn2);
    await user.click(btn3);
    await user.click(btn3);
    await user.click(btn1);
    await user.click(btn1);
    await waitFor(()=>expect(getNodeText(length)).toEqual('tamanho da lista: 11'));
    expect(getNodeText(v1)).toEqual('v1: 5');
    expect(getNodeText(v2)).toEqual('v2: 3');
    expect(getNodeText(v3)).toEqual('v3: 2');
    expect(getNodeText(total)).toEqual('total: 10');
    expect(component).toMatchSnapshot();
  });

  it('Deve ser Renderizado com os valores corretos 2',async ()=>{
    const  component = render(<Desafio4 />);
    const btn1 =await component.getByTestId('btn1');
    const btn2 =await component.getByTestId('btn2');
    const btn3 =await component.getByTestId('btn3');
    const length = await component.getByTestId('length');
    const v1 = await component.getByTestId('v1');
    const v2 = await component.getByTestId('v2');
    const v3 = await component.getByTestId('v3');
    const total = await component.getByTestId('total');
    await user.click(btn1);
    await user.click(btn2);
    await user.click(btn2);
    await user.click(btn3);
    await user.click(btn3);
    await user.click(btn1);
    await user.click(btn1);
    await waitFor(()=>expect(getNodeText(length)).toEqual('tamanho da lista: 8'));
    expect(getNodeText(v1)).toEqual('v1: 3');
    expect(getNodeText(v2)).toEqual('v2: 2');
    expect(getNodeText(v3)).toEqual('v3: 2');
    expect(getNodeText(total)).toEqual('total: 7');
    expect(component).toMatchSnapshot();
  });

});
