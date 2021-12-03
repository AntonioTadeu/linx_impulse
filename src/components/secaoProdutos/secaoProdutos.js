import { Component } from "react";
import CardProduto from "../cardProduto/cardProduto";
import "../secaoProdutos/secaoProdutos.css";

export default class SecaoProdutos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          listaProdutos: [],
        };
    }

    onFalha(error) {
        console.log(error);
    }
    
    componentDidMount() {
        fetch("http://localhost:8060/produto")
        .then((response) => response.json(), this.onFalha)
        .then((json) => this.setState({ listaProdutos: json }), this.onFalha);
    }

    render() {
        return (
            <section className="secao-produtos">
                <div className="div-titulo-secaoProdutos">
                    <hr className="linha-secaoProdutos"></hr>
                    <h3 className="titulo-secaoProdutos">Sua seleção especial</h3>
                    <hr className="linha-secaoProdutos"></hr>
                </div>

                <div className="produtos">
                    {this.state.listaProdutos.map(function (produto) {
                        return (
                            <CardProduto produto={produto} />
                        );
                    })}
                </div>
            </section>
        )
    }
}