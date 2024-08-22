"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "@/hooks/api/auth/useLogin";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { LoginSchema } from "../schemas/loginSchema";
import Modal from "@/components/Modal";

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { mutateAsync: login, isPending } = useLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login">
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-3 grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              value={formik.values.email}
              placeholder="Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {!!formik.touched.email && !!formik.errors.email ? (
            <p className="text-xs text-red-500">{formik.errors.email}</p>
          ) : (
            ""
          )}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              value={formik.values.password}
              placeholder="Your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mb-3"
            />
          </div>
          {!!formik.touched.password && !!formik.errors.password ? (
            <p className="text-xs text-red-500">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <Link
          href="/forgot-password"
          className="mt-4 flex justify-end text-xs text-gray-500 hover:text-black"
        >
          Forgot Password?
        </Link>
        {/* ditaro disini */}
        {/* ini maksudnya kalau loading nanti buttonnya akan ke disable */}
        <div className="text-lg font-semibold">
          <Button
            className="mt-4 w-full bg-[#0080ff] hover:bg-[#0066CC]"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Submit"}
          </Button>
        </div>
        <Link
          href="/register"
          className="mt-5 flex justify-center text-xs text-gray-500 hover:text-black"
        >
          Dont have Ronmes Account? Register here
        </Link>
      </form>
    </Modal>
  );
};

export default LoginModal;
