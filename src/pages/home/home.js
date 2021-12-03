import { Component } from "react";
import Header from "../../components/header/header";
import FormAjuda from "../../components/formAjuda/formAjuda";
import SecaoProdutos from "../../components/secaoProdutos/secaoProdutos";
import Footer from "../../components/footer/footer";

export default class Home extends Component {
    render() {
      return (
        <article>
          <Header />
          <FormAjuda />
          <SecaoProdutos />
          <Footer />
        </article>
      );
    }
  }