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
    margin-top: 80px;
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

export const Form = styled.form`
  margin-top: 80px;
  max-width: 960px;

  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    font-size: 14px;
    margin-top: 24px;
  }
  span{
    font-size: 10px;
  }

  input {
    height: 48px;
    padding: 16px;
    border: 1px solid #a8a8b3;
    border-radius: 10px;
    color: #2b3939;
    background-color: #F6F8FA;
    margin-top: 8px;
  }

  button {
    width: 120px;
    height: 48px;
    background: #FC2B90;
    padding: 8px;
    margin-top: 24px;

    border-radius: 16px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.3, '#FC2B90')};
    }
`;