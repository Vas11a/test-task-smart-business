import React from 'react'

interface Props {
    placaholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Filter({placaholder, value, onChange}: Props) {
  return (
    <input type="text" className='filter' placeholder={placaholder} value={value} onChange={onChange} />
  )
}
