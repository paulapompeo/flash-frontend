import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Checkbox, Row, Col } from 'antd';

import * as S from './styles.js';
import 'antd/dist/antd.css';

import api from '../../services/api.js';

const CreateCompany = () => {

  const history = useHistory();

  function handleInputChange(event) {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function onChange(checkedValues) {
    setCheckData(checkedValues)
    console.log('checked = ', checkedValues);
  }

  const [formData, setFormData] = useState({
    name: '',
    trade: '',
    cnpj: '',
    address: ''
  });

  const [checkData, setCheckData] = useState([])

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, trade, cnpj, address } = formData;
    const [benefits] = checkData;

    const data = { name, trade, cnpj, address, benefits };

    console.log('passou aqui 1')
    await api.post('companies', data).then(() => {
      alert('Cadastro realizado com sucesso!');
    }).catch(() => {
      // alert('Erro no cadastro');
    });
    console.log('passou aqui 2')

    alert('Empresa cadastrada')
    history.push('/companies');
  }

  return (
    <>
      <S.Header />
      <S.Content>
        <S.Title>Cadastro Empresa</S.Title>

        <S.Form onSubmit={handleSubmit}>

          <S.InputContainer>
            <label htmlFor="name">Nome da empresa</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />

            <label htmlFor="trade">Nome fantasia</label>
            <input
              type="text"
              name="trade"
              id="trade"
              onChange={handleInputChange}
            />

            <label htmlFor="cnpf">CNPJ</label>
            <span>*somente números</span>
            <input
              type="text"
              name="cnpj"
              id="cnpj"
              onChange={handleInputChange}
            />

            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleInputChange}
            />

            <label htmlFor="benefits">Beneficios</label>

            <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
              <Row>
                <Col span={8}>
                  <Checkbox value="VT">VT</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="VA">VA</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="VR">VR</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>


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

export default CreateCompany;
