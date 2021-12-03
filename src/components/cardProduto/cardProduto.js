import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardProduto({ produto }) {
    return (
        <Card style={{ width: '18rem', marginLeft: "15px", marginRight: "15px" }}>
            <Card.Img variant="top" src={produto.foto} />
            <Card.Body>
              <Card.Title>{produto.nome}</Card.Title>
              <Card.Text>
                {produto.descricao}
              </Card.Text>
              <Card.Text>
                  De: R${produto.preco_antigo}
              </Card.Text>
              <Card.Text>
                  Por: R${produto.preco}
              </Card.Text>
              <Card.Text>
                  Ou {produto.parcela.quantidade}x de R${produto.parcela.valor}
              </Card.Text>
              <Button style={{ color: '#888888', margin: '0px 30px 0px 30px', paddingLeft: '35px', paddingRight: '35px'}} variant="light"  size="lg">
                Comprar
              </Button>
            </Card.Body>
        </Card>
    )
}