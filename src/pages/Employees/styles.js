import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  background: rgb(252,50,140);
  background: linear-gradient(90deg, rgba(252,50,140,1) 0%, rgba(252,105,101,1) 85%);
  height: 320px;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: -156px auto;
  padding: 40px 20px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
`;

export const CompanyInfo = styled.div``;

export const CreateEmployee = styled.div`
  width: 152px;
  height: 48px;
  background: #FC2B90;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.2s;
  margin-top: 16px;
  display: flex;
  align-items: center;

  &:hover {
    background: ${shade(0.3, '#FC2B90')};
  }
  
  strong {
    color: #fff;
    text-align: center;
    padding: 8px 5px;
  }
`;
