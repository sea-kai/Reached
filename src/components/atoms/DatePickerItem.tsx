import React from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja"


type Props = {
  selected: Date,
  onChange: (e: React.SetStateAction<Date>) => void
}

export const DatePickerItem = (props: Props): JSX.Element => {
  return (
    <DatePicker
      locale = {ja}
      dateFormat = "yyyy-MM-dd"
      selected = {props.selected}
      onChange = {props.onChange}
    />
  )
}


