import { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Button, Input, Checkbox } from 'antd';

const SignUp = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) setPasswordError(true);
    if (!term) setTermError(true);
    if (password) console.log(id, nick, password, passwordCheck, term);
  };
  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangeNick = e => {
    setNick(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = e => {
    setTermError(!e.target.checked);
    setTerm(e.target.checked);
  };

  // custom hook
  const useInput = (inputValue = null) => {
    const [value, setter] = useState(inputValue);
    const handler = e => {
      setter(e.target.value);
    };
    return [value, handler];
  };

  // const [id, onChangeId] = useInput('');

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.1/antd.min.css"
        />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 15 }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <Input
              name="user-nick"
              value={nick}
              required
              onChange={onChangeNick}
            />
          </div>
          <div>
            <label htmlFor="user-password" value={password}>
              비밀번호
            </label>
            <Input
              name="user-password"
              type="password"
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
              여유부릴 시간이 없다.
            </Checkbox>
            {termError && (
              <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>
            )}
          </div>
          <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
            회원가입하기
          </Button>
        </Form>
      </AppLayout>
    </>
  );
};

export default SignUp;
