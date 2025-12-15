// client/src/components/ListTodo.js

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTodo from "./EditTodo"; // We will create this component next

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  // Function to fetch all todos from the backend
  const getTodos = async () => {
    try {
      // The `proxy` set in package.json redirects this to http://localhost:5000/todos
      const response = await fetch("/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Function to handle the deletion of a todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
      });

      // Update the state to remove the deleted todo without refreshing
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    getTodos();
  }, []); // Empty dependency array ensures this runs only once

  // --- RENDERING ---
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white', mb: 3 }}>
        Your To-Do List
      </Typography>

      <TableContainer 
        component={Paper} 
        sx={{ 
          // Glassmorphism effect on the table container
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(5px)',
          borderRadius: '10px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'cyan', fontWeight: 'bold' }}>Description</TableCell>
              <TableCell align="right" sx={{ color: 'cyan', fontWeight: 'bold' }}>Edit</TableCell>
              <TableCell align="right" sx={{ color: 'cyan', fontWeight: 'bold' }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {/* Map over the todos state to render a row for each item */}
            {todos.map(todo => (
              <TableRow
                key={todo.todo_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: 'white' }}>
                  {todo.description}
                </TableCell>
                
                <TableCell align="right" sx={{ color: 'white' }}>
                  {/* The EditTodo component will go here */}
                  <EditTodo todo={todo} /> 
                </TableCell>
                
                <TableCell align="right" sx={{ color: 'white' }}>
                  <IconButton 
                    aria-label="delete" 
                    onClick={() => deleteTodo(todo.todo_id)}
                    sx={{ color: '#FF416C' }} // Vibrant delete color
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListTodo;