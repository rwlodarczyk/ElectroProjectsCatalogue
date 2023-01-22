import { ThemeProvider } from '@emotion/react'
import { Typography, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactFragment, ReactPortal } from 'react';

const darkTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#20C20E',
            }
        },
        typography: {
            fontFamily: 'Open Sans, sans-serif',
        }
    }
)

interface Props {
    children: ReactFragment | ReactPortal | boolean | null | undefined;
}

const Theme = ({children} : Props) => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

export default Theme