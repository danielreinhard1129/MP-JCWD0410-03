"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { ProfileSchema } from "./schemas/ProfileSchema";
import useUpdateProfile from "@/hooks/api/profile/useUpdateProfile";
import { useAppSelector } from "@/redux/hooks";

const ProfilePage: FC = () => {
  const router = useRouter();
  const { id } = useAppSelector((state) => state.user);
  const { mutateAsync, isPending } = useUpdateProfile(id);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone_number: "",
      image: null,
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      await mutateAsync(values);
      router.push("/");
    },
  });

  return (
    <main className="flex justify-center pt-20">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Update Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              {/* Name Field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.name && !!formik.errors.name ? (
                  <p className="text-xs text-red-500">{formik.errors.name}</p>
                ) : null}
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.email && !!formik.errors.email ? (
                  <p className="text-xs text-red-500">{formik.errors.email}</p>
                ) : null}
              </div>

              {/* Address Field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  name="address"
                  type="text"
                  placeholder="Your address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.address && !!formik.errors.address ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.address}
                  </p>
                ) : null}
              </div>

              {/* Phone Number Field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone_number">Phone Number</Label>
                <Input
                  name="phone_number"
                  type="text"
                  placeholder="Your phone number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.phone_number &&
                !!formik.errors.phone_number ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.phone_number}
                  </p>
                ) : null}
              </div>

              {/* Image Field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  className="cursor-pointer"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0];
                    formik.setFieldValue("image", file);
                  }}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.image && !!formik.errors.image ? (
                  <p className="text-xs text-red-500">{formik.errors.image}</p>
                ) : null}
              </div>
            </div>

            <Button className="mt-6 w-full" disabled={isPending}>
              {isPending ? "Loading..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default ProfilePage;
