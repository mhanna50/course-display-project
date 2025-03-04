import React from "react";
import TableRow from "./TableRow";
import { Table, Container } from "react-bootstrap";

const CourseTable = () => {
  const studentName = "John Doe";
  const wcuID = "WCU123456";

  const courses = [
    { description: "Intro to CS", semester: "Fall 2024", prefix: "CSC", number: "101", grade: "A" },
    { description: "Data Structures", semester: "Spring 2025", prefix: "CSC", number: "202", grade: "B+" },
    { description: "Computer Networks", semester: "Fall 2025", prefix: "CSC", number: "335", grade: "A-" },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-center bg-dark text-white p-3 rounded">Academic Foundations</h2>
      <p><strong>Student Name:</strong> {studentName}</p>
      <p><strong>WCU ID:</strong> {wcuID}</p>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <TableRow key={index} {...course} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CourseTable;
