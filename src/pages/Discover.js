import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
const Discover = () => {
    const books=useSelector((state)=>state.books.discoverList
    )
    return (
        <PageLayout>
            {
                books?.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;