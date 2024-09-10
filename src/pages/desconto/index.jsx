import { useState } from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../componentes/cabecalho';
import Treinos from '../../componentes/treinos';


export default function Cupon(){

    const [valorPedido, setValorPedido] = useState(0)
    const [valorCupom, setValorCupom] = useState(0)
    const [resultado, setResultado] = useState(0)


    function total(){
        let novo = (valorPedido - valorCupom)
        setResultado(novo)
    }


    let e01 = [
        {
            titulo: 'Exercício 01 - Cupom de Desconto',
            barra_cor: 'amarelo',
            descricao: 'Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.'
        }
    ]

    return(

        
        <div className='page-exercicio'>
            
            <div className='faixa'>
                <Cabecalho/>
            </div>

            <div>
                {e01.map(treino =>
                    <Treinos
                        titulo = {treino.titulo}
                        barra_cor = {treino.barra_cor}
                        descricao = {treino.descricao}
                    />
                )}
            </div>

            <div className='container-exercicio'>
                <h1 className='h1-pedido'>Informe o valor do pedido</h1>
                <input className='button-1' value={valorPedido} onChange={e=>setValorPedido(e.target.value)}></input>

                <h1 className='h1-cupom'>Informe o valor do cupom</h1>
                <input className='button-2' value={valorCupom}  onChange={e=>setValorCupom(e.target.value)}></input>

                <button className='button-3' onClick={total}  >Executar</button>
            </div>
            
            <div className='resultado'>
                <p>Resultado: o total é R$ {resultado.toFixed(2)}</p>
            </div>
        </div> 
    )
}