import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { BookItem } from '../../components'
import { getAllBooks } from '../../query/api'

const BooksList = () => {

  const { data, isLoading, isError, error } = useQuery('books', getAllBooks);

  if (isLoading) {
    return (
      <div className='custom-spinner'>
        <Spinner animation="border" />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <section>
      <h1>Book List</h1>
      <Row>
        {
          data?.map(({ title, author, id }) => (
            <Col xxl={4} md={6} key={id}>
              <BookItem title={title} author={author} id={id} />
            </Col>
          ))
        }
      </Row>
    </section>
  )
}

export default BooksList