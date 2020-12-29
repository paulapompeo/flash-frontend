import React, {useState, useEffect} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Table } from 'antd';

import * as S from './styles.js';
import 'antd/dist/antd.css';

import api from '../../services/api.js';

const Employees = () => {
  const [company, setCompany] = useState([]);
  const [employee, setEmployee] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/companies/${params.company}`).then((response) => {
      setCompany(response.data)
      console.log(response.data)
    });
    
    api.get(`/companies/${params.company}/employees`).then((response) => {
      setEmployee(response.data)
      console.log(response.data[0])
    });

  }, [params.company, params.employee]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sobrenome',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <>
      <S.Header />
      <S.Content>
        <S.Title>{company.name}</S.Title>
          
        <Table dataSource={employee} columns={columns} />
        
        <Link to="/">
          <FiChevronLeft size={20} />
            Voltar
        </Link>

        <S.CreateEmployee>
          <Link to={`/companies/${company._id}/employees/createemployee`}>
            <strong>Cadastrar Funcionário</strong>
          </Link>
        </S.CreateEmployee>
      </S.Content>
    </>
  )
};

export default Employees;
