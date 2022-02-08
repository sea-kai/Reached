import React from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja"


type Props = {
  selected: Date,
  onChange: (e: React.SetStateAction<Date>) => void
  disabled?: boolean
  placeholder?: string
}

export const DatePickerItem = (props: Props): JSX.Element => {
  return (
    <div >
      <DatePicker
        className='ml-2 h-7 border border-black'
        locale = {ja}
        dateFormat = "yyyy-MM-dd"
        selected = {props.selected}
        onChange = {props.onChange}
        disabled = {props.disabled}
        placeholderText = {props.placeholder}
      />
    </div>
  )
}


