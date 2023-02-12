import React, { useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { BookItem } from '../../components'
import { getAllBooks } from '../../query/api'

const BooksList = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

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
      <div className='d-flex align-items-center justify-content-between flex-wrap mb-3'>
        <h1 className='mb-1'>Book List</h1>
        <input type="search" value={search} onChange={handleOnChange} />
      </div>
      <Row>
        {
          data.filter((el) => {
            if (el === "") {
              return el;
            }
            else {
              return el.title.toLowerCase().includes(search) || el.author.toLowerCase().includes(search);
            }
          }).map(({ title, author, id }) => (
            <Col xxl={4} md={6} key={id}>
              <BookItem title={title} author={author} id={id} />
            </Col>
          ))
        }
        {/* {
          data?.map(({ title, author, id }) => (
            <Col xxl={4} md={6} key={id}>
              <BookItem title={title} author={author} id={id} />
            </Col>
          ))
        } */}
      </Row>
    </section>
  )
}

export default BooksList