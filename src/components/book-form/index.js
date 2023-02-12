import React from 'react'
import { useForm } from "react-hook-form";
import { Button, Form, Spinner } from 'react-bootstrap'

const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });
    const onSubmit = data => onFormSubmit(data);

    return (
        <div className='shadow p-3'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Title" {...register("title", { required: true })} />
                    {errors.title && <Form.Control.Feedback type="invalid">
                        Please add a title.
                    </Form.Control.Feedback>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="author" placeholder="Author" {...register("author", { required: true })} />
                    {errors.author && <Form.Control.Feedback type="invalid">
                        Please add a author.
                    </Form.Control.Feedback>}
                </Form.Group>
                <Button variant="danger" mr={2} type="submit">
                    {isLoading ? <Spinner animation="border" size="sm" /> : "Submit"}
                </Button>
            </Form>
        </div>
    )
}

export default BookForm