# PERN Stack To-Do Application

A full-stack application for managing to-do items, built with PostgreSQL, Express, React, and Node.js. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using a modern architecture.

## Features

* **Create:** Add new to-do items via a simple input form.
* **Read:** View a list of all current to-do items fetched from the PostgreSQL database.
* **Update:** Edit existing to-do descriptions using a Material-UI Modal component.
* **Delete:** Remove to-do items permanently from the database.
* **Modern UI:** Implemented using **Material-UI (MUI)** with a dark, glassmorphism-inspired theme.

## Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Database** | **PostgreSQL** | Used for data storage and persistence. |
| **Backend** | **Node.js** & **Express** | RESTful API server handling business logic and database communication. |
| **Frontend** | **React** | User interface framework, managed by `create-react-app`. |
| **Styling** | **Material-UI (MUI)** | Component library for consistent, modern styling. |

---

## Setup and Installation

Follow these steps to get the application running on your local machine.

### 1. Prerequisites

You must have the following software installed:

* [Node.js](https://nodejs.org/en/download/) (v18 or higher recommended)
* [PostgreSQL](https://www.postgresql.org/download/)
* A PostgreSQL client (e.g., **pgAdmin** or **DBeaver**)

### 2. Database Setup

First, set up your database and table structure.

1.  **Create Database:**
    ```sql
    CREATE DATABASE perntodo;
    ```

2.  **Create Table:** Connect to the `perntodo` database and execute the following SQL to create the `todo` table:
    ```sql
    CREATE TABLE todo (
        todo_id SERIAL PRIMARY KEY,
        description VARCHAR(255)
    );
    ```

3.  **Configure Credentials:** Ensure your backend configuration (`server/db.js`) matches your local PostgreSQL username and password.

### 3. Backend (Server) Setup

The backend handles the API and database connection.

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    npm start
    ```
    The server should start on `http://localhost:5000`.

### 4. Frontend (Client) Setup

The frontend is the React application.

1.  **Navigate to the client directory:**
    ```bash
    cd ../client
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the React application:**
    ```bash
    npm start
    ```
    The client application will typically open in your browser at `http://localhost:3000`.

---

## Project Structure
PERN-ToDo/ 
├── client/ # React Frontend 
│ ├── node_modules/ 
│ ├── public/ 
│ ├── src/ 
│ │ ├── components/ 
│ │ │ ├── EditTodo.js # MUI Modal for updating items 
│ │ │ ├── InputTodo.js # Form for creating new items 
│ │ │ └── ListTodo.js # Table for displaying and fetching items 
│ │ ├── App.js # Main component 
│ │ └── index.js 
│ └── package.json 
├── server/ # Express Backend 
| ├── node_modules/ 
| ├── db.js # PostgreSQL connection pool configuration 
| ├── index.js # Express app setup and CRUD routes 
| └── package.json

## Deployment Notes (Local Development Only)

* **Current Configuration:** This application is configured for development on your local machine, using `localhost` for both the server and database.
* **Deployment Requirement:** For public deployment, the server must be hosted on a dynamic platform (e.g., Vercel/Render) and the database must be cloud-hosted (e.g., Neon/ElephantSQL).
