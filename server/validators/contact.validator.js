import z from "zod"

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Name must be atleast 3 characters" })
        .max(20, { message: "Name must be not more than 20 characters" }),
    email: z
        .string()
        .trim()
        .email({ message: "Please enter a valid email" }),
    message: z
        .string()
        .min(6, { message: "Message is too short" })
});