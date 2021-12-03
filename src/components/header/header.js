import "../header/header.css";
import Button from 'react-bootstrap/Button';

export default function Header() {
    return (
        <navbar className="navbar">
            <p className="titulo-selecao">uma seleção de produtos</p>
            <p className="titulo-especial">especial para você</p>
            <p className="descricao-header">
                Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
            </p>

            <div className="botoes-header">
                <Button style={{ color: '#888888', margin: '0px 30px 0px 30px', paddingLeft: '35px', paddingRight: '35px'}} variant="light"  size="lg">
                    Conheça a Linx
                </Button>

                <Button style={{ color: '#888888', margin: '0px 30px 0px 30px', paddingLeft: '35px', paddingRight: '35px'}} variant="light" size="lg">
                    Ajude o algorítimo
                </Button>

                <Button style={{ color: '#888888', margin: '0px 30px 0px 30px', paddingLeft: '35px', paddingRight: '35px'}} variant="light" size="lg">
                    Seus produtos
                </Button>

                <Button style={{ color: '#888888', margin: '0px 30px 0px 30px', paddingLeft: '35px', paddingRight: '35px'}} variant="light" size="lg">
                    Compartilhe
                </Button>
            </div>
        </navbar>
    )
}