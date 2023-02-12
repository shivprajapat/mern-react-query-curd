import React from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook } from '../../query/api';

const ViewBook = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { data, error, isLoading, isError } = useQuery(["book", { id }], getBook);
  // console.log('data =>> :', data)
  // console.log('id =>> :', id)
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

  const { title, author } = data;
  return (
    <section>
      <Row>
        <Col xxl={6} lg={8} className='mx-auto'>
          <h1>View Book</h1>
          <Card className='shadow border-0 mb-3'>
            <Card.Body>
              <div className='d-flex justify-content-between'>
                <Card.Title>{title}</Card.Title>
                <Button size='sm' variant="danger">ID : {data.id}</Button>
              </div>
              <Card.Text>{author}</Card.Text>
              <Card.Footer className='bg-transparent border-0 ps-0 text-center'>
                <Button size='md' variant="danger" onClick={() => navigate(-1)}>Back</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default ViewBook