import express from 'express';
import { createAcademicSemester } from './academicSemester.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
