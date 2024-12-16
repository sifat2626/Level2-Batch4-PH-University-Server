import httpStatus from 'http-status';

import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { createAcademicSemesterIntoDB } from './academicSemester.service';

export const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await createAcademicSemesterIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester is created succesfully',
    data: result,
  });
});
