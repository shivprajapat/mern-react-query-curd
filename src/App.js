import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { BooksList, CreateBook, UpdateBook, ViewBook } from './pages'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container className='mt-4'>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="//:id" element={<ViewBook />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />
        </Routes>
      </Container>
    </Fragment>
  )
}

export default App