import React from 'react'
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <> 
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 text-white">DSVendas</h1>
                    <p className="lead text-white">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                  
                    <p className="text-white">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <div>
                    <Link className="btn btn-primary btn-lg text-white" to="/">
                        Voltar para tela de Login
                    </Link>
        </div>   
                </div>

            </div>
            
        </>
    )
}

export default Homepage
