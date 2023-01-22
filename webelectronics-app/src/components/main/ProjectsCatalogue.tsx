import React from 'react'
import './ProjectsCatalogue.css';
import { Box, Grid } from '@mui/material';
import bjtlogo from '../../images/bjtlogo.gif';
import jumbotron from '../../images/jumbotron.mp4';
import WritingText from '../animations/WritingText';
import CurrentDateSpan from '../../utils/CurrentDateSpan';

const ProjectsCatalogue = () => {
  return (
    <React.Fragment>
      <video className="R-VideoPlayer" autoPlay muted loop id="myVideo">
        <source src={jumbotron} type="video/mp4" />
      </video>
      <Box className="R-Jumbotron" maxWidth="lg">
        <Grid container>
          <Grid item xs={2}>
            <img className="R-BJTLogo" src={bjtlogo} alt="Bipolar junction transistor animated logo" />
          </Grid>
          <Grid item xs={8}>
            <p className="R-TitleTypography">Electronic projects catalogue</p>
            <CurrentDateSpan/>
            <WritingText>
              Hello fellow human. Allow me to honourably present a catalogue of electronic projects, all of which are well suitable for both beginners and intermediate hobbyists.
              Each project contains a detailed description of the circuit, a list of components, and the source code, if applicable.
              Feel free to browse through the catalogue and use the projects for your own purposes.
            </WritingText>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default ProjectsCatalogue