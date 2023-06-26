import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home/';
import { ListarCliente } from './views/Cliente/Listar/';
import { Menu } from './components/Menu';
import { ListarCompras } from './views/Compra/ListarCompra';
import { ListarCartoes } from './views/Cartao/ListarCartao';
import { ListarEmpresas } from './views/Empresa/ListarEmpresa';
import { ListarPromocoes } from './views/Promocao/ListarPromocao';
// import { Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <div>

      <Router>
        <Menu />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/listar-cliente" component={ListarCliente} />
          <Route path="/listar-compra" component={ListarCompras} />
          <Route path="/listar-cartao" component={ListarCartoes} />
          <Route path="/listar-empresa" component={ListarEmpresas} />
          <Route path="/listar-promocao" component={ListarPromocoes} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
