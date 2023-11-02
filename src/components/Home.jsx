// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Book from './Book';
import { LuChevronsUpDown } from 'react-icons/lu';




const Home = () => {
    const [bookList, setBooklist] = useState([]);
    const [sortedBooks, setSortedBooks] = useState([]);
    // const [sortBy, setSortBy] = useState(null);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    // search 
    const [searchQuery, setSearchQuery] = useState('')


    // console.log(jobList)

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooklist(data);
                setSortedBooks(data);
            })
    }, [])



    // Function to sort the books by category

    // const handleSortByCategory = () => {
    //     // Sort the books by category
    //     const sortedData = bookList.slice().sort((a, b) => a.category.localeCompare(b.category));
    //     setSortedBooks(sortedData);
    //     setSortBy('category');
    // };





    // Function to sort the books by price

    // Sort the books by low to high price
    const handleSortByPriceLow = () => {
        const sortedData = bookList.slice().sort((a, b) => a.price - b.price);
        setSortedBooks(sortedData);
        // setSortBy('price');
    };


    // Sort the books by high to low price

    const handleSortByPriceHigh = () => {
        const sortedData = bookList.slice().sort((a, b) => b.price - a.price);
        setSortedBooks(sortedData);
        // setSortBy('price');
    };






    // pagination
    // Calculate the indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const paginatedBooks = sortedBooks.slice(startIndex, endIndex);   *TODO

    const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };




    // Filter books by category
    const filteredBooks = sortedBooks.filter((book) =>
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };







    return (
        <div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>


                {/* sorting */}
                <div className=' flex justify-end gap-5 mb-10'>
                    <div>
                        <input
                            type="text"
                            placeholder="Search by category"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="p-3 m-3 border rounded-md "
                        />
                    </div>
                    <div>
                        <div className="dropdown mt-3">
                            <label tabIndex={0} className="btn btn-outline btn-success">Price <LuChevronsUpDown className='text-2xl'></LuChevronsUpDown> </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={handleSortByPriceLow}>Low to High</a></li>
                                <li><a onClick={handleSortByPriceHigh}>High to Low</a></li>
                            </ul>

                        </div>

                    </div>
                </div>



                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        filteredBooks.slice(startIndex, endIndex).map((bl, index) =>
                            // eslint-disable-next-line react/jsx-key
                            <Book bl={bl} key={index}></Book>
                        )
                    }
                </div>
            </div>



            <div className="my-5 text-center">
                <button
                    className={`mx-2 px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'
                        }`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    className={`mx-2 px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'
                        }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};



export default Home;