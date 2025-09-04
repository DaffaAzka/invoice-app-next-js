import {z} from "zod"

export const onBoardingSchema = z.object({
  firstname: z.string().min(3, "First name is required"),
  lastname: z.string().min(3, "Last name is required"),
  address: z.string().min(3, "Address is required"),
});