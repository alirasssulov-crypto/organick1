import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().min(1, "Введите email").email("Некорректный email"),
});

export const contactSchema = z.object({
  fullName: z.string().min(2, "Минимум 2 символа"),
  email: z.string().min(1, "Введите email").email("Некорректный email"),
  company: z.string().optional(),
  subject: z.string().min(3, "Минимум 3 символа"),
  message: z.string().min(10, "Минимум 10 символов"),
});

export const addToCartSchema = z.object({
  quantity: z.string().regex(/^[1-9]\d{0,2}$/, "Число от 1 до 999"),
});

export const passwordSchema = z.object({
  password: z.string().min(1, "Введите пароль").min(4, "Минимум 4 символа"),
});