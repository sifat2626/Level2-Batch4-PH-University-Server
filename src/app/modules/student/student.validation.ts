import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20), // 'password' is required with a max length of 20 characters
    student: z.object({
      name: userNameSchema, // Reuse a pre-defined schema for the 'name' property
      gender: z.enum(['male', 'female', 'other']), // Gender must be one of the enum values
      dateOfBirth: z.string().optional(), // A string for the date of birth
      email: z.string().email(), // Email validation
      contactNo: z.string(), // Contact number as a string
      emergencyContactNo: z.string(), // Emergency contact number as a string
      bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']), // Enum validation for blood group
      presentAddress: z.string(), // Present address as a string
      permanentAddress: z.string(), // Permanent address as a string
      guardian: guardianValidationSchema, // Use pre-defined guardian schema
      localGuardian: localGuardianValidationSchema, // Use pre-defined local guardian schema
      admissionSemester: z.string(),
      profileImg: z.string(), // A string for the profile image
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
