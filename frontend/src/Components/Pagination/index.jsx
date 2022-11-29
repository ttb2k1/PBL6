import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {

    const { data } = props
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0)
    const [currentItems, setCurrentItems] = useState(null)
    const itemsPerPage = 70

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data])
    // const endOffset = itemOffset + itemsPerPage;
    // const currentItems = data.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="items">
                {
                    currentItems.map((item) => {
                        return {
                            
                        }
                    })
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Sau >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Trước"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="pageNum"
                previousLinkClassName='pageNum'
                nextLinkClassName='pageNum'
                activeLinkClassName='active'
            />
        </>
    );
}

export default Pagination