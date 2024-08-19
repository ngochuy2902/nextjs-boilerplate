import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { loginThunk } from '@/store/features/auth/authApi';
import { LoginPayload } from '@/store/features/auth/type';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  LoginContainer,
  ImageSection,
  FormSection,
  StyledForm,
  Title,
} from './styled';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const onFinish = async (values: LoginPayload) => {
    const rs = await dispatch(loginThunk(values));
    if (loginThunk.fulfilled.match(rs)) {
      await router.push('/dashboard');
    } else {
      setErrorLogin(true);
    }
  };

  return (
    <LoginContainer>
      <ImageSection />
      <FormSection>
        <StyledForm
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Title>Login</Title>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {errorLogin && (
            <p style={{ color: 'red', marginBottom: 10 }}>Login failed</p>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
        </StyledForm>
      </FormSection>
    </LoginContainer>
  );
};

export default LoginPage;
