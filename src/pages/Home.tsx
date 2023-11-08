import React from 'react';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import TodoContext from '../components/home/Reducers';
import { Footer } from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <h1>홈 페이지</h1>
      <TodoContext />
      <Footer />
    </>
  );
};

export default Home;