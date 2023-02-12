const api = process.env.REACT_APP_API_SERVER

// ** Get All Books!
const getAllBooks = async () => {
    const response = await fetch(`${api}/books`);
    if (!response.ok) {
        throw new Error("Something went wrong.");
    }
    return response.json();
};

// ** Create Book
const createBook = async ({ ...data }) => {
    const response = await fetch(`${api}/books/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    },

    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

// ** Delete Book
const removeBook = async (id) => {
    const response = await fetch(`${api}/books/${id}`,
        { method: "DELETE" }
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return true;
};
// ** get ID Book
const getBook = async ({ queryKey }) => {
    const [_key, { id }] = queryKey;
    const response = await fetch(`${api}/books/${id}`);

    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
}
// ** get ID Book
const updateBook = async ({ id, ...data }) => {
    const response = await fetch(`${api}/books/${id}`, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
}
export { getAllBooks, createBook, removeBook, getBook, updateBook }