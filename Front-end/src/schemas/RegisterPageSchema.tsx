import * as yup from "yup";

export const RegisterPageSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name can't be longer than 50 characters")
    .required("Name is required"),

  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name can't be longer than 50 characters")
    .required("Last name is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

  address: yup
    .string()
    .min(5, "Address must be at least 5 characters")
    .required("Address is required"),

  birthDate: yup
    .date()
    .max(new Date(), "Birthdate cannot be in the future")
    .required("Birth date is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  diet: yup
    .string()
    .oneOf(
      ["None", "Vegetarian", "Vegan", "Keto", "Paleo"],
      "Invalid diet type"
    )
    .required("Diet is required"),

  allergens: yup
    .array()
    .of(yup.string().min(1, "Empty allergen not allowed"))
    .required("Allergens are required"),

  dislike: yup
    .array()
    .of(yup.string().min(1, "Empty dislike not allowed"))
    .required("Disliked foods are required"),
});
