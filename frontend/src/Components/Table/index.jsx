import React from 'react'
import styles from "./Table.module.scss"
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { Paper, Grid } from '@mui/material';
import LessonService from '../../service/LessonService';



const Table = ({ level }) => {

    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0)
    const [currentItems, setCurrentItems] = useState(null)
    const itemsPerPage = 70
    console.log(currentItems, "123ax");

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(level.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(level.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, level])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % level.length;
        setItemOffset(newOffset);
    };

    const handleShow = (id) =>{
        console.log(id);
        // try {
        //     LessonService.getDetail(`${id}`).then((res) => {
        //         console.log(res.data);
        //     })
        // } catch (error) {
        //     console.log(error);
        // }
    }

    return (
        <Grid item xs={8} className={styles.vocabContainer} >
            <Paper className={styles.vocabContent} >
                <div className={styles.Container}>
                    <ul>
                        {currentItems?.map((item, index) => (
                            <li key={index} onClick={() => handleShow(item.id)}>
                                <div className={styles.name}>{item.kanji}</div>
                                <div className={styles.subname}>{item.vocabulary}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Paper>
            <div className={styles.paginationContainer}>
                <Paper className={styles.content}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Sau"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="Trước"
                        renderOnZeroPageCount={null}
                        containerClassName={styles.pagination}
                        pageLinkClassName={styles.pageNum}
                        previousLinkClassName={styles.pageNum}
                        nextLinkClassName={styles.pageNum}
                        activeLinkClassName={styles.active}
                    />
                </Paper>
            </div>
        </Grid>
    )
}

export default Table