'use client'
import { useEffect, useState } from 'react';
import { Accordion } from 'flowbite-react';

async function getBooks() {
  const response = await fetch("http://localhost:8000/api/books");

  if(!response.ok) {
    throw new Error('Problem fetching data')
  }

  return response.json();
}

type Book = {
  title: string,
  description: string,
  author: {
    firstname: string,
    lastname: string
  } 
}

export default function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      async function fetchBooks() {
        try {
          const fetchedBooks = await getBooks();
          setBooks(fetchedBooks);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      }
  
      fetchBooks();
    }, []);

    return (
        <>
          {
              books.map((b: Book) => {
                  return(
                      <div className='w-full mb-4' key={b.title}>
                        <Accordion collapseAll>
                          <Accordion.Panel>
                            <Accordion.Title>
                              {b.title}
                            </Accordion.Title>
                            <Accordion.Content>
                              <p className="font-bold text-gray-500 dark:text-gray-400 pb-4 mb-4 border-b">
                                {b.author.firstname} 
                                &nbsp;
                                {b.author.lastname}
                              </p>
                              <p className="text-gray-500 dark:text-gray-400">
                                {b.description}
                              </p>
                            </Accordion.Content>
                          </Accordion.Panel>
                        </Accordion>
                      </div>
                    )
              })
          }
        </>
    )
  }