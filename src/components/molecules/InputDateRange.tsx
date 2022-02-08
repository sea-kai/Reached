import React, {useState, VFC} from 'react';
import { DatePickerItem } from '../atoms/DatePickerItem';
import { TimePickerItem } from 'src/components/atoms/TimePickerItem';


export const InputDateRange: VFC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState<string>('10:00');
  const [endTime, setEndTime] = useState<string>('10:00');
return (
  <div className = 'flex flex-row my-6 md:my-3'>
    <div className = 'mx-16 md:mx-8'>
      <label className = 'w-20 text-lg font-semibold'>開始日時</label>
      <div className = 'flex flex-row '>
        <DatePickerItem
          selected = {startDate}
          onChange = {(date) => setStartDate(date)}
          disabled = {false}
          placeholder = '日付を選択してください'
          />
        <TimePickerItem
          onChange = {(startTime) => setStartTime(startTime)}
          value = {startTime}
          />
      </div>
    </div>
    <div className = 'mx-16 md:mx-8'>
      <text className = 'w-20 text-lg font-semibold'>終了日時</text>
      <div className = 'flex flex-row'>
        <DatePickerItem
          selected = {startDate}
          onChange = {(startDate) => setStartDate(startDate)}
          disabled = {true}
          />
        <TimePickerItem
          onChange = {(endTime) => setEndTime(endTime)}
          value = {endTime}
          />
        </div>
    </div>
  </div>
)
}

