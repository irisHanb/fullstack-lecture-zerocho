import React from 'react';
import { Menu, Input, Button } from 'antd';
import Link from 'next/link';

const { Search } = Input;

const AppLayout = ({ children }) => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </Menu.Item>
      </Menu>
      <Link href="/signUp">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
      {children}
    </>
  );
};

export default AppLayout;
