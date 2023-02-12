import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { BookForm } from '../../components'
import { createBook } from '../../query/api';
import toast, { Toaster } from 'react-hot-toast';

const CreateBook = () => {
  const { mutateAsync, isLoading } = useMutation(createBook);
  const navigate = useNavigate()
  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data });
    toast.success('book create successfully')
    setTimeout(() => {
      navigate('/');
    }, 1000)
  }
  return (
    <section>
      <Row>
        <Col xxl={6} lg={8} className='mx-auto'>
          <h1>Create Book</h1>
          <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
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