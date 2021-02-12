import React from 'react'
import SliderInfo from '../components/SliderInfo'

export const Gallery: React.FC = () => {
  console.log('Render Gallery')

  return (
    <div style={{ height: '700px' }}>
      <SliderInfo />
    </div>
  )
}