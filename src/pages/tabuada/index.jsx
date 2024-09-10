import './index.scss';

import { Link } from 'react-router-dom';


export default function Tabuada(){




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

            <div className='exercicio-01'>
                <Link to='/'>
                    <img className='voltar' src="/assets/images/img-voltar.png"/>
                </Link>

                <h1>Exercício 11 - Cupom de desconto</h1>
            </div>

            <div className='barra-cor'>
            </div>

            <div className='enunciado'>
                <h3>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</h3>
            </div>

            <div className='container-exercicio'>
                <h1 className='h1-pedido'>Tabuada do:</h1>
                <input className='button-1'></input>

                <button className='button-3'>Executar</button>
            </div>
            <div className='resultado'>
                <p>Resultado: o total é R$ </p>
            </div>
        </div>  
    )



}