import React from 'react'
import { SectionContainer } from './styled'

const Section = ({children}) => {
  return (
    <SectionContainer >
      {children}
    </SectionContainer>
  )
}

export default Section