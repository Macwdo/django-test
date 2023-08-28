import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../services/api';
import { Button, CircularProgress } from '@mui/material';

export default function ProposalList() {

  const [proposals, setProposals] = useState([])
  
  const getProposals = async () => {
    const request = await api.get("proposal/");
    setProposals(request.data);  
  }

  useEffect(() => {
    getProposals()
  }, [])

  const getProposalStatusIcon = (automatic_status) => {
    switch (automatic_status) {
      case 'accepted':
        return <CheckIcon color="success" />;
      case 'pending':
        return <AutorenewIcon color="primary" />;
      case 'denied':
        return <DoDisturbIcon color="error" />;
      default:
        return null;
    }
  };

  return (
    <List>
      {
      proposals.map(proposal => proposals ? (
        <ListItem
          key={proposal.id}
          sx={{
            background: proposal.approved ? '#6CEE67' : '',
            borderRadius: 2,
            m: 2,
            boxShadow: 1,
          }}
        >
          <ListItemText primary="Nome" secondary={`${proposal.name}`} />
          <ListItemText primary="Documento" secondary={`${proposal.document}`} />
          <ListItemIcon>{getProposalStatusIcon(proposal.automatic_status)}</ListItemIcon>
        </ListItem>
      ) : <CircularProgress/>
      )
    }
    </List>
  );
}
