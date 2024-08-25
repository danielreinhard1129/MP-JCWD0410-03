import * as Yup from "yup";

export const CreateEventSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  address: Yup.string().required("Address is required"),
  thumbnail: Yup.mixed().nullable().required("Thumbnail is required"),
  price: Yup.string().required("Price is required"),
  quota: Yup.number().min(1).required("Quota must at least 1"),
  description: Yup.string().required("Description is required"),
});
