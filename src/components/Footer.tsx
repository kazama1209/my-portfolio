import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Footer: React.FC = () => {
  return (
    <>       
      <AppBar position='static' elevation={0} color='default'>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant='caption' color='textSecondary'>©2021 Takashiro Kazama</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
