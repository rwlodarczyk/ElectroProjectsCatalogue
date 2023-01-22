import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './Header.css';

type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar className="R-AppBar" position="fixed">
        <Toolbar className="R-AppBar">
            <Typography>rwlodarczyk</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header