import { Container } from '@mui/material'
import React from 'react'
import NewsCard from './NewsCard'
const NewsContent = ({newsArray,newsResults}) => {
  return <Container maxWidth="md">
    <div>
      <NewsCard />
    </div>
  </Container>
}

export default NewsContent