import React from 'react';

type Props = {
  title: string,
  text: string,
}

export const Description = (props: Props): JSX.Element => {
  return (
    <div className='container flex flex-col justify-center items-start ml-10'>
      <div className='text-5xl font-bold'>{props.title}</div>
      <div className='text-2xl'>{props.text}</div>
    </div>
  )
}
