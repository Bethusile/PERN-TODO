// client/src/components/EditTodo.js

import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog, // MUI's Modal component
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

const EditTodo = ({ todo }) => {
  // State for the modal open/close status
  const [open, setOpen] = useState(false);
  
  // State for the description currently being edited (initialized with the existing description)
  const [description, setDescription] = useState(todo.description);

  // Function to open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
    // Reset the input field back to the original description on close/cancel
    setDescription(todo.description);
  };

  // Function to handle the form submission (PUT request)
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      
      // Send the PUT request to the backend
      const response = await fetch(`/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // Reload the window to see the updated list
      // In a real application, you might just update the state of the parent (ListTodo)
      window.location = "/";

    } catch (err) {
      console.error(err.message);
    }
  };

  // --- RENDERING ---
  return (
    <div>
      {/* 1. EDIT BUTTON: Triggers the modal open */}
      <IconButton 
        aria-label="edit" 
        onClick={handleClickOpen}
        sx={{ color: '#00D1FF' }} // Vibrant edit color
      >
        <EditIcon />
      </IconButton>

      {/* 2. DIALOG/MODAL */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        PaperProps={{ 
            sx: { 
                // Glassmorphism effect on the modal
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(10px)', 
                color: 'white' 
            } 
        }}
      >
        <DialogTitle sx={{ color: 'cyan', fontWeight: 'bold' }}>
            Edit To-Do
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        
        <DialogContent dividers>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="To-Do Description"
                type="text"
                fullWidth
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ 
                    input: { color: 'white' }, // Input text color
                    '& .MuiInputLabel-root': { color: 'cyan' }, // Label color
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.4)' },
                        '&:hover fieldset': { borderColor: 'cyan' },
                        '&.Mui-focused fieldset': { borderColor: '#00D1FF' },
                    }
                }}
            />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="outlined">
            Cancel
          </Button>
          <Button 
            onClick={updateDescription} 
            color="primary" 
            variant="contained"
            sx={{
                // Vibrant save button style
                background: '#21CBF3 100%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTodo;