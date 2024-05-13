import { object, string, InferType } from "yup";

export const userSchema = object({
  email: string().email(),
  name: string().required(),
  profileImage: string().required(),
  about: string().required(),
  status: string().required().optional(),
});
export type UserType = InferType<typeof userSchema>;
