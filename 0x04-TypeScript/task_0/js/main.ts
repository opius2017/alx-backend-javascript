// Create student interface Class
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const firstStudent: Student = {
  firstName: 'Pius',
  lastName: 'Owolabi',
  age: 30,
  location: 'New York',
};

const secondStudent: Student = {
  firstName: 'Sanmi',
  lastName: 'Ajayi',
  age: 28,
  location: 'Los Angeles',
};

// create student array
const studentsList: Student[] = [firstStudent, secondStudent];


function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  // create a new row for each student
  students.forEach((student) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

    row.appendChild(cell1);
    row.appendChild(cell2);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

renderTable(studentsList);

