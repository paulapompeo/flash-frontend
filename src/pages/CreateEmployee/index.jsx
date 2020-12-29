import React, { useState, useEffect } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import * as S from './styles.js';

import api from '../../services/api.js';

const CreateEmployee = () => {

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

  const history = useHistory();

  function handleInputChange(event) {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    cpf: '',
    email: ''
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, lastName, cpf, email } = formData;

    const data = { name, lastName, cpf, email };

    await api.post(`companies/${params.company}/employees`, data).then(() => {
      // alert('Cadastro realizado com sucesso!');
      // history.push('/companies/${params.company}/employees');
      history.goBack();
    }).catch(() => {
      // alert('Erro no cadastro');
    });
    alert('Funcionario(a) cadastrado(a)')
  }

  return (
    <>
      <S.Header />
      <S.Content>
        <S.Title>Novo funcionario(a) da {company.name}</S.Title>

        <S.Form onSubmit={handleSubmit}>

          <S.InputContainer>
            <label htmlFor="name">Nome do(a) funcionário(a)</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />

            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleInputChange}
            />

            <label htmlFor="cpf">CPF</label>
            <span>*somente números</span>
            <input
              type="text"
              name="cpf"
              id="cpf"
              onChange={handleInputChange}
            />


            <label htmlFor="benefits">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
            <button type="submit">Enviar</button>
          </S.InputContainer>
        </S.Form>
        <Link to="/companies">
          <FiChevronLeft size={20} />
            Voltar
        </Link>
      </S.Content>
    </>
  )
};

export default CreateEmployee;
