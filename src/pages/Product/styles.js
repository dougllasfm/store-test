import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack"

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconBack = styled(ArrowBack)`
  width: 34px;
  height: 34px;
  color: #fff;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 70%;
`;

export const Form = styled.form`
  margin-top: 20px;

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  input[type="number"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  input[type="submit"] {
    width: 100%;
    background-color: var(--secondary);
    color: #000;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all ease 0.2s;
    font-size: 16px;
    font-weight: bold;
  }

  input[type="submit"]:hover {
    background-color: #66bfff;
  }

  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }

  > span {
    color: red;
  }
`;
