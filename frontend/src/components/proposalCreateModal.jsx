import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Container, TextField } from '@mui/material';
import api from '../services/api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ProposalCreateModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [name, setName] = useState("")
  const handleName = (value) => setName(value);
  
  const [document, setDocument] = useState("")
  const handleDocument = (value) => setDocument(value);
  
  const handleSubmit = () => {
    setOpen(false)
    api.post("proposal/",
      {
        name: name,
        document: document   
      }
    )
    window.location.href = "/"

  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Nova Proposta</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography sx={{ ml: 6 }} id="modal-modal-title" variant="h4" >
                Nova Proposta
            </Typography>
              <Container component="main" sx={{ mt: 3}}>
                <TextField onChange={e => handleName(e.target.value)} label="Nome" sx={{ mb: 2 , width: "100%"}} variant="outlined" />
                <TextField onChange={e => handleDocument(e.target.value)} label="Documento" sx={{ mb: 2 , width: "100%"}} variant="outlined" />
                <Button onClick={handleSubmit} sx={{ mb: 2 , width: "100%"}} variant="contained">Enviar</Button>
            </Container>
        </Box>
      </Modal>
    </div>
  );
}
