import React from 'react';

type Props = {
  title: string,
  text: string,
}

export const Description = (props: Props): JSX.Element => {
  return (
    <div className='container flex flex-col justify-center items-start '>
      <div className='text-2xl font-bold'>{props.title}</div>
      <div className='items-center'>{props.text}</div>
    </div>
  )
}
