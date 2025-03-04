import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";  // Ensures Bootstrap is included
import CourseTable from "./components/CourseTable"; // Corrected import (CourseTables → CourseTable)

function App() {
  return (
    <div className="App container mt-5"> 
       
      <CourseTable />  
    </div>
  );
}

export default App;
