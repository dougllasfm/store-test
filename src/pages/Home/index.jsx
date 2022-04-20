import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Container,
  Content,
  Table,
  Button,
  IconUpdate,
  IconDelete,
} from "./styles";

import { requestApiAction, removeProductAction } from "../../store/actions/actions";

const Home = (props) => {
  const navigation = useNavigate();

  useEffect(() => {
    if (props.data.length <= 0 || props.data.length === undefined) {
      props.requestApiAction();
    }
  });

  return (
    <Container>
      <Content>
        <h1>Produtos</h1>
        <Link to="/newProduct">
          <Button>Adicionar novo produto</Button>
        </Link>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.data.length > 0 &&
              props.data.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.price.toFixed(2).replaceAll(".", ",")}</td>
                    <td>{element.quantity}</td>
                    <td>
                      <IconUpdate onClick={() => {
                        navigation("/newProduct", { state: { id: element.id, name: element.name, price: element.price, quantity: element.quantity}})
                      }}/>
                      <IconDelete onClick={() => {
                        props.removeProductAction(element.id)
                      }}/>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestApiAction,
      removeProductAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
