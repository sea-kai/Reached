import React from 'react';
import 'react-clock/dist/Clock.css';
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from 'react-time-picker/dist/entry.nostyle';

type Props = {
  onChange: (e: React.SetStateAction<string>) => void,
  value: string,
}

export const TimePickerItem = (props: Props): JSX.Element => {
  return (
    <div >
      <TimePicker
        className='w-56 md:w-36 h-7'
        autoFocus = {true}
        onChange = {props.onChange}
        value = {props.value}
      />
    </div>
  )
}
