import { Container, Table } from "reactstrap";

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const ListarCartao = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCartoes = async () => {
        await axios.get(api + "/cartoes")
            .then((response) => {
                console.log(response.data.cartoes);
                setData(response.data.cartoes);
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
        getCartoes();
    }, []);


    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar Informações do Cartão</h1>
                </div>
                {status.type == 'error' ? <Alert color="danger">
                    {status.message}
                </Alert> : ""}

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ClienteId</th>
                            <th>Data Cartão</th>
                            <th>Validade</th>
                   
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>item.ClienteId</td>
                                <td>item.dataAdesao</td>
                                <td>item.validade</td>
                             
                                <td className="text-center/">
                                    <Link to={"/listar-cliente/" + item.id}
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




// export const ListarCartoes = ()=> {
//     return(
//         <div>
//         <Container>
//             <h1>Visualizar Informações do Cartão</h1>
//             <Table striped>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>ClienteId</th>
//                         <th>Data Cartão</th>
//                         <th>Validade</th>
//                         <th>Ação</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th>1</th>
//                         <td>Mark</td>
//                         <td>Otto</td>
//                         <td>@mdo</td>
//                         <td>@mdo</td>
//                     </tr>
//                     <tr>
//                         <th>2</th>
//                         <td>Jacob</td>
//                         <td>Thornton</td>
//                         <td> fat</td>
//                         <td>@mdo</td>
//                     </tr>
//                     <tr>
//                         <th>3</th>
//                         <td>Larry</td>
//                         <td>the Bird</td>
//                         <td>@twitter</td>
//                         <td>@mdo</td>
//                     </tr>
//                 </tbody>
//             </Table>
//         </Container>

//     </div>
//     );
// };
