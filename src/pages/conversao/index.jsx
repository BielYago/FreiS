import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../componentes/cabecalho';
import Treino from '../../componentes/treinos'


export default function Conversao(){
    
    const [valorGramas, setValorGramas] = useState(0)
    const [resultado, setResultado] = useState(0)

    function gramas(){
        let x = valorGramas * 1000
        setResultado(x)
    }

    let e02 = [
        {
            titulo: 'Exercício 02 - Conversão de Kg/gramas',
            barra_cor: 'azul-claro',
            descricao: 'Implementar um programa em Javascript para converter kilos em gramas'
        }
    ]

    return(

        <div>
            <div className='page-converter'>
            
            <Cabecalho/>

            <div>

                {e02.map(treino =>
                    <Treino
                        titulo = {treino.titulo}
                        barra_cor = {treino.barra_cor}
                        descricao = {treino.descricao}
                    />
                )}
            </div>

            <div className='container-conversao'>
                <h1 className='valor-conversao'>Valor em killos</h1>
                <input className='button-valor' value={valorGramas} onChange={e=> setValorGramas(e.target.value)}></input>

                <button  className='executar' onClick={gramas} >Executar</button>
            </div>

            <div className='gramas'>
                <p>Resultado: O total é R$ {resultado.toFixed(2)}</p>
            </div>
        </div>  
        </div>
    ) 
} 