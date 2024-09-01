import React from 'react'
import Filter from './Filter'
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setPhoneFilterValue, setEmailFilterValue, setNameFilterValue, setUsernameFilterValue } from '../../store/slices/userSlice';


export default function Filters() {

  const dispatch = useAppDispatch();
  const { phoneFilterValue, emailFilterValue, nameFilterValue, usernameFilterValue } = useAppSelector((state) => state.user);
  

  const handlePhoneFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhoneFilterValue(e.target.value));
  };

  const handleEmailFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailFilterValue(e.target.value));
  };

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameFilterValue(e.target.value));
  };

  const handleUsernameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsernameFilterValue(e.target.value));
  };
  return (
    <div className='filters_container'>
      <Filter placaholder='Search by name' value={nameFilterValue} onChange={handleNameFilterChange} />
      <Filter placaholder='Search by email' value={emailFilterValue} onChange={handleEmailFilterChange} />
      <Filter placaholder='Search by username' value={usernameFilterValue} onChange={handleUsernameFilterChange} />
      <Filter placaholder='Search by phone' value={phoneFilterValue} onChange={handlePhoneFilterChange} />
    </div>
  )
}
