import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

export const createAcademicSemesterIntoDB = async (
  payload: TAcademicSemester,
) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('invalid semester code');
  }
  const result = await AcademicSemester.create(payload);

  return result;
};
