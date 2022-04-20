import styled from "styled-components";
import { TrashFill } from "@styled-icons/bootstrap/TrashFill"
import { Edit } from "@styled-icons/boxicons-regular/Edit"

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 70%;
`;

export const Button = styled.button`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border-radius: 4px;
  color: var(--primary);
  text-decoration: none;
  cursor: pointer;
  margin: 10px 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  box-shadow: 3px 8px 30px -10px rgba(255, 255, 255, 0.541) ;
  background: var(--primary);

  > tr, th {
    background: #3e3a6e;
  }
  
  td,
  th {
    text-align: left;
    padding: 8px;
    border: 1px solid #302e4e;
  }

  td:nth-child(4) {
    width: 40px;
  }

  thead,
  tbody {
    border-collapse: collapse;
    border-radius: 15px;
  }

  tr:nth-child(even) {
    background-color: #1c1a32;
  }

  tr:hover {
    background: #050314;
    transition: all ease 100ms;
  }
`;

export const IconDelete = styled(TrashFill)`
  width: 20px;
  height: 20px;
  color: #fff;
  cursor: pointer;
`

export const IconUpdate = styled(Edit)`
  width: 20px;
  height: 20px;
  color: #fff;
  margin-right: 5px;
  cursor: pointer;
`