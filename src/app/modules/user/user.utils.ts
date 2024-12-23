/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(4, '0');

  // Convert currentId to a number, increment, then pad the result
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  // Format the final ID
  return `${payload.year}${payload.code}${incrementId}`;
};
