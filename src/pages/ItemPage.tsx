import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';

export const ItemPage = () => {
  const location = useLocation();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const param = queryParams.get('name')?.toString();

    setValue(param || '');

  }, [location]);

  return (
    <>
        <Header></Header>
      <span>{value}</span>
    </>
  );
};
