import "../formAjuda/formAjuda.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FormAjuda() {
    return (
        <section className="secao-formAjuda">
            <div className="div-texto">
                <h3 className="titulo-formAjuda">Ajude o algorítimo a ser mais certeiro</h3>

                <p className="paragrafo-ajuda">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin  eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus,   sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas.    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor.    Vivamus et arcu non felis tristique eleifend.
                </p>

                <p className="paragrafo-ajuda">
                Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar  purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices     orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio     ante suscipit libero, at mattis augue est vel metus.
                </p>
            </div>

            <div className="div-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Seu nome:</Form.Label>
                        <Form.Control placeholder="" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control placeholder="" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control placeholder="" />
                     </Form.Group>

                     {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="Masculino"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="Feminino"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                        ))}

                    <Button style={{ color: '#888888', margin: '0px 30px 0px 30px', paddingLeft: '35px', paddingRight: '35px'}} variant="light"  size="lg">
                        Enviar
                    </Button>
                </Form>
            </div>
        </section>
    )
}