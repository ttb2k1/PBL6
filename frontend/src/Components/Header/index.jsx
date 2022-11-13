import React from 'react'
import styles from './Header.module.scss'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';


export const Header = () => {
    return (
        <AppBar position="fixed" className={styles.headerContainer}>
            <Container >
                <Toolbar Toolbar disableGutters className={styles.contentContainer} >
                    <div className={styles.content}>
                        <Box className={styles.itemNav} >
                            <Button
                                className={styles.btn}
                                href="/learn"
                            >
                                <HomeIcon className={styles.icon} />
                                Tra cứu
                            </Button>
                            <Button
                                className={styles.btn}
                                href="/lesson"
                            >
                                <MenuBookIcon className={styles.icon} />
                                Học Kanji
                            </Button>
                            <Button
                                className={styles.btn}
                                href="/assessment"
                            >
                                <StarIcon className={styles.icon} />
                                Đánh giá chữ viết
                            </Button>
                        </Box>
                    </div>
                </Toolbar >
            </Container>
        </AppBar >
    )
}

export default Header