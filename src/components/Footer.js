import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <AppBar position="static">
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Copyrigth &copy; reko5
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Footer;
/*
import React from "react";
import 'bootstrap';

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col className="text-center py-3">Copyrigth &copy; reko5 </Col>
      </Row>
    </Container>
  );
}
*/