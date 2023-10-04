/**
 * Class representing a Teacher.
 */
class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly fullTimeEmployee: boolean;
  private readonly yearsOfExperience?: number;
  private readonly location: string;
  private additionalAttributes: Record<string, any>;

  /**
   * Create a Teacher instance.
   * @param {string} firstName - The first name of the teacher.
   * @param {string} lastName - The last name of the teacher.
   * @param {boolean} fullTimeEmployee - Indicates if the teacher is a full-time employee.
   * @param {string} location - The location where the teacher is based.
   * @param {number | undefined} yearsOfExperience - The years of experience (optional).
   */
  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = yearsOfExperience;
    this.additionalAttributes = {};
  }

  /**
   * Set an additional attribute for the teacher.
   * @param {string} attributeName - The name of the attribute.
   * @param {any} attributeValue - The value of the attribute.
   */
  setAttribute(attributeName: string, attributeValue: any) {
    this.additionalAttributes[attributeName] = attributeValue;
  }

  /**
   * Get the value of an additional attribute.
   * @param {string} attributeName - The name of the attribute to retrieve.
   * @returns {any} The value of the attribute.
   */
  getAttribute(attributeName: string): any {
    return this.additionalAttributes[attributeName];
  }
}

/**
 * Function to print a teacher's name in the format "First Initial. Last Name".
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} The formatted name.
 */
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};

// Print Teacher's Name:
const teacherName = printTeacher("Innocent", "Udo");
console.log(teacherName); // Output: Innocent Udo

/**
 * Interface for Directors extending Teacher.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

// Director Example:
const director: Directors = {
  firstName: "Tolulope",
  lastName: "Owolabi",
  fullTimeEmployee: true,
  location: "Headquarters",
  numberOfReports: 10, // Required attribute
  yearsOfExperience: 15, // Optional attribute
};

console.log("Director:", director);

/**
 * Interface for StudentConstructor.
 */
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

/**
 * Class representing a Student.
 */
class StudentClass implements StudentConstructor {
  firstName: string;
  lastName: string;

  /**
   * Create a Student instance.
   * @param {StudentConstructor} param0 - The student's first name and last name.
   */
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Get a message indicating that the student is currently working.
   * @returns {string} The work message.
   */
  workOnHomework(): string {
    return "Currently working";
  }

  /**
   * Get the display name of the student.
   * @returns {string} The student's first name.
   */
  displayName(): string {
    return this.firstName;
  }
}

// Example Usage:
const teacher1 = new Teacher("Innocent", "Udo", true, "New York", 5);
teacher1.setAttribute("contract", true);

console.log("Teacher 1:", teacher1);
console.log("Contract attribute:", teacher1.getAttribute("contract"));

const teacher2 = new Teacher("Ajibade", "Mololuwa", false, "Los Angeles");
teacher2.setAttribute("specialization", "Math");

console.log("Teacher 2:", teacher2);
console.log("Specialization attribute:", teacher2.getAttribute("specialization"));
