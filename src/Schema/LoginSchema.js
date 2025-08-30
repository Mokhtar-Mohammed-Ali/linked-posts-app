import * as zod from"zod";
export const schema=zod.object({
    email: zod.string().nonempty("email is required").regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Enter a valid email as xxxx@example.com"),
       password: zod.string()
          .nonempty("Password is required")
          .regex(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, "Password must be 6+ chars with letters & numbers.")
})