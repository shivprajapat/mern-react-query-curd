import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { toast, Toaster } from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { BookForm } from '../../components'
import { getBook, updateBook } from '../../query/api';

const CreateBook = () => {
  const { id } = useParams()

  const { data, error, isLoading, isError } = useQuery(["book", { id }], getBook);
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);
  console.log('data', data);
  const navigate = useNavigate();
  const onFormSubmit = async (formData) => {
    await mutateAsync({ ...formData, id })
    toast.success('book update successfully')
    setTimeout(() => {
      navigate('/');
    }, 1000)
  }
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
      <Row>
        <Col xxl={6} lg={8} className='mx-auto'>
          <h1>Update Book</h1>
          <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating} />
        </Col>
      </Row>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </section>
  )
}

export default CreateBook