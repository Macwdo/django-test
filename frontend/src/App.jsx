import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProposalList from './components/proposalList';
import ProposalCreateModal from './components/proposalCreateModal';


const defaultTheme = createTheme();

export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Propostas
          </Typography> 
          <ProposalList/>
          <Typography sx={{ mt: 8, mb: 2 }} variant="h5" component="h2" gutterBottom>
            <ProposalCreateModal/>
          </Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}