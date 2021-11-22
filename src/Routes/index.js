import React from 'react';
import  Loading  from '../components/Loading/Loading';
import  Routes  from './Routes';
import { useSelector } from 'react-redux';


const Route = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
      <>
        {isLoading ? <Loading/> : <Routes/>}
      </>
  )
};

export default Route;





