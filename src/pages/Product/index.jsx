import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addProductAction, updateProductAction } from "../../store/actions/actions";
import { Container, Content, Form, Header, IconBack } from "./styles";

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().positive().required(),
    quantity: yup.number().positive().integer().required(),
  })
  .required();

const Product = (props) => {
  const navigation = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function onSubmit(data) {
    try {
      if (!location.state) {
        props.addProductAction(data);
        navigation("/");
      } else {
        data.id = location.state.id
        props.updateProductAction(data)
        navigation("/");
      }
    } catch (error) {}
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>Adicionar novo produto</h1>
          <IconBack
            onClick={() => {
              navigation("/");
            }}
          />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome do produto"
            {...register("name", { value: location.state ? location.state.name : ""})}
          />
          {errors.name && <span>Nome é obrigatório! </span>}
          <input
            type="number"
            step="0.01"
            placeholder="Preço"
            {...register("price", { value: location.state ? location.state.price : ""})}
          />
          {errors.price && <span>Informe um preço!</span>}
          <input
            type="number"
            placeholder="Quantidade"
            {...register("quantity", { value: location.state ? location.state.quantity : ""})}
          />
          {errors.quantity && <span>Informe a quantidade!</span>}

          <input type="submit" value={location.state ? "Atualizar produto" : "Cadastrar produto"} />
        </Form>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addProductAction,
      updateProductAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
