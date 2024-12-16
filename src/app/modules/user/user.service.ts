import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const generatedId = (payload: TAcademicSemester) => {};

  // Check for duplicate id
  const existingUser = await User.findOne({ id: generatedId });
  if (existingUser) {
    throw new Error(`User with id ${generatedId} already exists.`);
  }

  // Create a user object
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  userData.id = generatedId;

  // Create the new user
  const newUser = await User.create(userData);

  // Create a student
  if (newUser) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; // Reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
