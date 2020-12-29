import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api.js';

import * as S from './styles.js';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    api.get('companies').then((response) => {
      setCompanies(response.data);
    });
  }, []);

  return (
    <>
      <S.Header />
      <S.Content>
        <S.Title>Empresas</S.Title>

        <S.Companies>
          {companies.map((company) => (
            // eslint-disable-next-line no-underscore-dangle
            <Link key={company.name} to={`/companies/${company._id}/employees`}>
              <div>
                <strong>{company.name}</strong>
                <p>{company.trade}</p>
                <span>{company.address}</span>
              </div>
                {/* <div>
                  <ul>
                    {company.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                  </ul>
                </div> */}

              <FiChevronRight size={32} />
            </Link>
          ))}
        </S.Companies>

        <S.CreateCompany>
          <Link to={`/createcompany`}>
            <strong>Cadastrar Empresa</strong>
          </Link>
        </S.CreateCompany>
      </S.Content>
    </>
  );
};

export default Companies;
