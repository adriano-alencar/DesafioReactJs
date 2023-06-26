import { Container, Table } from "reactstrap";

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const ListarEmpresa = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getEmpresas = async () => {
        await axios.get(api + "/empresas")
            .then((response) => {
                console.log(response.data.empresas);
                setData(response.data.empresas);
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
        getEmpresas();
    }, []);


    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar Informações da Empresa</h1>
                </div>
                {status.type == 'error' ? <Alert color="danger">
                    {status.message}
                </Alert> : ""}

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Data Adesão</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>item.id</td>
                                <td>item.nome</td>
                                <td>item.dataAdesao</td>
                                <td className="text-center/">
                                    <Link to={"/listar-empresa/" + item.id}
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



// export const ListarEmpresas = ()=> {
//     return(
//         <div>
//         <Container>
//             <h1>Visualizar Informações da Empresa</h1>
//             <Table striped>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Nome</th>
//                         <th>Data Adesão</th>
//                         <th>Ação</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th>1</th>
//                         <td>Mark</td>
//                         <td>Otto</td>
                        
                      
//                     </tr>
//                     <tr>
//                         <th>2</th>
//                         <td>Jacob</td>
//                         <td>Thornton</td>
                       
                     
//                     </tr>
//                     <tr>
//                         <th>3</th>
//                         <td>Larry</td>
//                         <td>the Bird</td>
                       
                     
//                     </tr>
//                 </tbody>
//             </Table>
//         </Container>

//     </div>
//     );
// };
