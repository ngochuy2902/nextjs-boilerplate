import styled from 'styled-components';
import { Form } from 'antd';

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const ImageSection = styled.div`
  flex: 2;
  background-image: url('/login.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;
