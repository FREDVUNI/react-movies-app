import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar,Box,Toolbar,Typography,Button } from '@mui/material'

const Header = () => {
    return (
        <>
            <Box sx={{flexGrow:1}}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography style={{ fontWeight:"700", marginLeft:"40px" }} sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{ fontSize:"18px" }}>movie watch list</Link>
                        </Typography>
                        <Link to="/">
                            <Button color="inherit" style={{ fontWeight:"400", fontSize:"16px" }}>watch List</Button>
                        </Link>
                        <Link to="/watched-movies">
                            <Button color="inherit" style={{ fontWeight:"400", fontSize:"16px" }}>watched</Button>
                        </Link>
                        <Link to="/add-movies">
                            <Button color="inherit" style={{ fontWeight:"400", fontSize:"16px" }}>Add movies</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header
