import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function HomePage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your New Toolpad App Template!
      </Typography>
      <Typography variant="body1">
        This is the starting point for your next project. You can begin by editing this page.
      </Typography>
    </Container>
  );
}
