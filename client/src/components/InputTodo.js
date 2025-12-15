// client/src/components/InputTodo.js

import React, { useState } from "react";
// Import necessary MUI components
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

const InputTodo = () => {
  // State to store the description text entered by the user
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    try {
      const body = { description };
      
      // The `proxy` in client/package.json redirects this to http://localhost:5000/todos
      const response = await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // Reload the window to see the new todo in the list immediately
      window.location = "/";
      
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 5, mb: 3 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ 
            color: 'white', // White text for visibility on dark background
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)', // Subtle glow for 'vibrant' theme
            fontWeight: 700
        }}
      >
        PERN To-Do List
      </Typography>

      <Box component="form" onSubmit={onSubmitForm} sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Enter New To-Do Description"
          variant="filled" // Use filled for a better look on dark themes
          fullWidth
          value={description}
          onChange={e => setDescription(e.target.value)}
          sx={{ 
              input: { color: 'white' }, // Text color
              '& .MuiInputLabel-root': { color: 'cyan' }, // Label color
              '& .MuiFilledInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // 'Glassmorphism' background
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
              },
          }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          sx={{ 
              minWidth: '150px', 
              fontSize: '1rem',
              // Vibrant button style
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          }}
        >
          Add To-Do
        </Button>
      </Box>
    </Container>
  );
};

export default InputTodo;