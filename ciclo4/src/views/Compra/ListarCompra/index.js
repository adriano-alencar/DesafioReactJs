import { Container, Table } from "reactstrap";

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const ListarCompra = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async () => {
        await axios.get(api + "/compras")
            .then((response) => {
                console.log(response.data.compras);
                setData(response.data.compras);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Sem conexão om a API.'
                })
                // console.log("Erro: Sem conexão com a API.")
            })
    }

    useEffect(() => {
        getCompras();
    }, []);


    return (
        <div>
            <Container>

                <div className="d-flex">
                    <div>
                        <h1>Visualizar Informações da Compra</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="cadastrarcompra"
                            className="btn btn-outline- primary btn-sm">Cadastrar</Link>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>CartaoId</th>
                            <th>PromoçãoId</th>
                            <th>Data</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.CartaoId}>
                                <td>item.CartaoId</td>
                                <td>item.PromocaoId</td>
                                <td>item.data</td>
                                <td>item.quantidade</td>
                                <td>item.valor</td>
                                <td className="text-center/">
                                    <Link to={"/listar-compra/" + item.CartaoId}
                                        className="btn btn-outline-primary btn-sm">Consultar</Link>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </Table>

            </Container>

        </div>
    );
};




// export const ListarCompras = () => {
//     return (
//         <div>
//             <Container>
//                 <h1>Visualizar Informações da Compra</h1>
//                 <Table striped>
//                     <thead>
//                         <tr>
//                             <th>Cartão ID</th>
//                             <th>Promoção ID</th>
//                             <th>Data</th>
//                             <th>Quantidade</th>
//                             <th>Valor</th>
//                             <th>Ação</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th>1</th>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                             <td>@mdo</td>
//                         </tr>
//                         <tr>
//                             <th>2</th>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td> fat</td>
//                             <td>@mdo</td>
//                         </tr>
//                         <tr>
//                             <th>3</th>
//                             <td>Larry</td>
//                             <td>the Bird</td>
//                             <td>@twitter</td>
//                             <td>@mdo</td>
//                         </tr>
//                     </tbody>
//                 </Table>
//             </Container>

//         </div>

//     );
// };
