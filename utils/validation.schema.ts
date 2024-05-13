import { object, string, InferType } from "yup";

export const userSchema = object({
  email: string().email().required(),
  name: string().required(),
  profileImage: string().required(),
  about: string().required(),
});
export type UserType = InferType<typeof userSchema>;
