import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";  // Ensures Bootstrap is included
import CourseTable from "./components/CourseTable"; // Corrected import (CourseTables → CourseTable)

function App() {
  return (
    <div className="App container mt-5"> 
      <h1 className="text-center">Course Display</h1> 
      <CourseTable />  
    </div>
  );
}

export default App;
