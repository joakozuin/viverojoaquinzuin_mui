import * as React from 'react';
import {useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ErrorMensaje(props) {

   const {abrir,cerrar,mensaje} = props;

  return (
    <div>
      
      <Modal
        open={abrir}
        onClose={cerrar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Se a producido un error
          </Typography>
          <Alert variant="filled" severity="error">
                 {mensaje}
          </Alert>  
        </Box>
      </Modal>
    </div>
  );
}