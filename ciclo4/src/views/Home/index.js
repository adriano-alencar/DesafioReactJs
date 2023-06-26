import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <a href="/listar-cliente" className="btn btn-outline-success btn-sm"
                        >Cliente</a>
                        <a href="/listar-cartao" className="btn btn-outline-success btn-sm"
                        >Cartao</a>
                        <a href="/listar-compra" className="btn btn-outline-success btn-sm"
                        >Compra</a>
                        <a href="/listar-promocao" className="btn btn-outline-success btn-sm"
                        >Promocao</a>
                        <a href="/listar-empresa" className="btn btn-outline-success btn-sm"
                        >Empresa</a>
                    </div>
                </div>

            </Container>
        </div>
    );
};

