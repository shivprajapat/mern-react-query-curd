import React from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { removeBook } from '../../query/api';

const BookItem = ({ id, title, author }) => {
  const queryClient = useQueryClient()

  const { mutateAsync, isLoading } = useMutation(removeBook)
  const navigate = useNavigate()

  const removeItem = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries('books')

  }
  return (
    <Card className='shadow border-0 mb-3'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{author}</Card.Text>
        <Card.Footer className='bg-transparent border-0 ps-0'>
          <Button size='sm' variant="success" onClick={()=>navigate(`/${id}`)}>View</Button>
          <Button size='sm' variant="primary" className='mx-2' onClick={()=>navigate(`/update-book/${id}`)}>Edit</Button>
          <Button size='sm' variant="danger" onClick={removeItem}>
            {isLoading ? <Spinner animation="border" size="sm" /> : "Delete"}
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default BookItem