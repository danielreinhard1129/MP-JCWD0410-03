import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup.string().optional(),
  phone_number: Yup.string()
    .optional()
    .test(
      "is-numeric",
      "Phone number must contain only numbers",
      (value) =>
        value === undefined ||
        value.split("").every((char) => char >= "0" && char <= "9"),
    ),
  image: Yup.mixed().nullable().required('image is required')
});
