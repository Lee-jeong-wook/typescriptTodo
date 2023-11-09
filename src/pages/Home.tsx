import React from 'react';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import TodoContext from '../components/home/Reducers';
import { Footer } from '../components/layout/Footer';
import { Mobile, PC } from '../components/MediaQuery';

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <h1>홈 페이지</h1>
      <TodoContext />
      <Footer />
      <Mobile>
        <div>모바일 입니다</div>
      </Mobile>
      <PC>
        <div>PC 입니다</div>
      </PC>
    </>
  );
};

export default Home;