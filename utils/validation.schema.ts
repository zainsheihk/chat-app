import { object, string, InferType, number } from "yup";

export const userSchema = object({
  email: string().email().required(),
  name: string().required(),
  profileImage: string().required(),
  about: string().required(),
  id: number().optional(),
});
export type UserType = InferType<typeof userSchema>;
