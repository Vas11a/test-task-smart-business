import React, { useEffect, useState } from 'react';
import userService from './http';
import Filters from './components/filters/Filters';
import { useAppDispatch } from './hooks';
import { setUsers } from './store/slices/userSlice';
import loader from './assets/loader.svg';
import Table from './components/table/Table';
export default function App(){
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await userService.getUsers();
      dispatch(setUsers(response.data));
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    
    fetchUsers()
  }, [])


  return (
    <div className="wrapper">
      <div className='header'>
        <h1 className='title'>User table</h1>
        {
          isLoading && <img src={loader} className='loader' alt="Loading..." />
        }        
      </div>
      <hr />
      <Filters/>
      <hr />
      <Table/>
    </div>
  );
}

