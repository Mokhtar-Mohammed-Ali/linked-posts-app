
import * as zod from "zod";

// ZOD SCHEMA
export const schema = zod
  .object({
    name: zod.string().nonempty("name is required").min(3, "name must be at least 3 char").max(30, "name must be at most 30 char"),
    email: zod.string().nonempty("email is required").regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Enter a valid email as xxxx@example.com"),
    password: zod.string()
      .nonempty("Password is required")
      .regex(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, "Password must be 6+ chars with letters & numbers."),
    rePassword: zod.string().nonempty("rePassword is required"),
    dateOfBirth: zod.coerce.date().refine((value) => {
      const userAge = value.getFullYear();
      const New = new Date().getFullYear();
      const age = New - userAge;
      // console.log(age)
      return age >= 18;

    }, { message: 'age must be equal 18 or more' }),

    gender: zod.string().nonempty('select Male or Female')
  }).refine((data) => data.password === data.rePassword, { path: ["rePassword"], message: "password and rePassword dont matche" })

