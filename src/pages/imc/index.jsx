import { useState } from 'react';
import './index.scss';

import { Link } from 'react-router-dom';



export default function Imc (){

    const [altura, setAltura] = useState (0);
    const [peso, setPeso] = useState (0);
    const [resultado, setResultado] = useState([]);


    function resul(pos){

        
        
        let x = setResultado((altura /peso) * peso)
        
        if( x < 16){
            setResultado([...'magreza grave'])
        }

        else if( x >= 16 && x <= 16.9){
            setResultado([...'magreza moderna'])
        }

        else if( x >= 17 && x <= 18.5){
            setResultado([...'magreza leve'])
        }

        else if( x >= 18.6 && x <= 24.9){
            setResultado([...'peso ideal'])
        }

        else if( x >= 25 && x <= 29.9){
            setResultado([...'sobrepeso'])
        }

        else if( x >= 30 && x <= 34.9){
            setResultado([...'obesidade grau 1'])
        }
        
        let obj = {
            a: altura,
            p: peso,
            x: resultado
        }
        
        setResultado([...resultado, obj])
        
        setAltura('');
        setPeso('');
    }

    return (

        <div className='page-exercicio'>
            
            <div className='faixa'>
                <img className='logo' src="/assets/images/logo-frei.png"/>

                <h1 className='h1-cabecalho'>React Freis</h1>
                
                <Link to='/' className='link-cabecalho'>
                <h2 className='inicio'>Inicio</h2>
                </Link>

                <Link to='/pages/sobre' className='link-cabecalho'>
                <h2 className='sobre-desconto'>Sobre</h2>
                </Link>
            </div>

            <div className='exercicio-10'>
                <Link to='/'>
                    <img className='voltar' src="/assets/images/img-voltar.png"/>
                </Link>

                <h1>Exercício 10 - Calculo de IMC com histórico</h1>
            </div>

            <div className='barra-cor'>
            </div>

            <div className='enunciado'>
                <h3>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação</h3>
            </div>

            <div className='container-exercicio-imc'>

            <div className='container-exercicio'>

                <div className='altura'>
                <h1 className='h1-pedido'>Altura</h1>
                <h1 className='h1-cupom'>Peso</h1>
                </div>

                <div className='peso'>
                <input value={altura} onChange={e => setAltura(e.target.value)}></input>
                <input value={peso} onChange={e => setPeso(e.target.value)}></input>
                </div>

                <button onClick={resul}>Executar</button>
            </div>

                <div className='infos'>

                {resultado.map((item, pos) => 

                    <div key={pos} className='info'>

                        <h1>Altura: {item.a} |</h1>
                        <h1>Peso: {item.p} |</h1>
                        <h1>Situação: {item.x} </h1>

                    </div>
                )}

                </div>

                    <div className='imgs-delete'>

                    <div className='img-delete'>
                        <img src="/assets/images/img-delete.png"/>
                    </div>

                    </div>

            </div>
        </div>

    )
}