import React from 'react';

import { InputDateRange } from 'src/components/molecules/InputDateRange';
import { CreateEventInput } from 'src/types/API'
export const EventInput: React.FC = () => {
  return (
    <div className = 'w-full border-2'>
      <text className = 'text-2xl md:text-xl'>
        新しい勉強会を作成
      </text>
      <InputDateRange />
    </div>
  )
}
