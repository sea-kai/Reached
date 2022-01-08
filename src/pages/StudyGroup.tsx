import React, { useState, VFC } from 'react';
import { Layout } from 'src/components/templates/Layout';
import { Description } from 'src/components/atoms/Description';
import { StudyGroupDescription } from 'src/assets/DescriptionData';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const StudyGroup: VFC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Layout title='StudyGroup'>
      <div className = 'flex flex-col'>
        <div className='flex flex-row justify-between w-screen'>
          <Description title={StudyGroupDescription.title} text={StudyGroupDescription.text}/>
          <img className='w-2/5' src='/undraw_Conversation.png' alt='studyGroup' />
        </div>
        <div className='flex flex-row w-8'>
          <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          fixedHeight
          />
        </div>
      </div>
    </Layout>
  )
}

export default StudyGroup;
