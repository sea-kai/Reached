import React from 'react';

type Props = {
  title: string,
  text: string,
}

export const Description = (props: Props): JSX.Element => {
  return (
    <div className='flex flex-col items-start mt-16 ml-8 w-2/5'>
      <h1 className='text-6xl font-bold'>{props.title}</h1>
      <h2 className='my-8 text-2xl'>{props.text}</h2>
    </div>
  )
}
