"use client";

import DateTimePicker from "@/components/DateTimePicker";
import FormInput from "@/components/FormInput";
import RichTextEditor from "@/components/RichTextEditor";
import { SidebarDemo } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCreateEvent from "@/hooks/api/event/useCreateEvent";
import { useFormik } from "formik";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { CreateEventSchema } from "../schema/createEventSchema";

const CreateEvents = () => {
  const { mutateAsync: createEvent, isPending } = useCreateEvent();

  const formik = useFormik({
    initialValues: {
      title: "",
      address: "",
      thumbnail: null,
      price: 0,
      startDate: undefined,
      endDate: undefined,
      quota: 0,
      booked: 0,
      description: "",
    },
    validationSchema: CreateEventSchema,
    onSubmit: async (values) => {
      await createEvent(values);
    },
  });

  const [selectedImage, setSelectedImage] = useState<string>("");
  const thumbnailRef = useRef<HTMLInputElement>(null);

  const onChangeThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      formik.setFieldValue("thumbnail", files[0]);
      setSelectedImage(URL.createObjectURL(files[0]));
    }
  };

  const removeSelectedImage = () => {
    formik.setFieldValue("thumbnail", null);
    setSelectedImage("");
    if (thumbnailRef.current) {
      thumbnailRef.current.value = "";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarDemo />
      <div className="w-full p-5">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="w-full md:flex md:flex-row md:gap-3">
            <div className="md:w-1/2">
              <FormInput
                name="title"
                label="Title"
                placeholder="Event Title"
                type="text"
                value={formik.values.title}
                isError={!!formik.touched.title && !!formik.errors.title}
                error={formik.errors.title}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>

            <div className="md:w-1/2">
              <FormInput
                name="address"
                label="Location"
                placeholder="Event Location"
                type="text"
                value={formik.values.address}
                isError={!!formik.touched.address && !!formik.errors.address}
                error={formik.errors.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="w-full md:flex md:flex-row md:gap-3">
            <div className="md:w-1/4">
              <FormInput
                name="price"
                label="Price"
                placeholder="Event Price"
                type="number"
                value={formik.values.price}
                isError={!!formik.touched.price && !!formik.errors.price}
                error={formik.errors.price}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>

            <div className="md:w-1/4">
              <FormInput
                name="quota"
                label="Quota"
                placeholder="Event Quota"
                type="number"
                value={formik.values.quota}
                isError={!!formik.touched.quota && !!formik.errors.quota}
                error={formik.errors.quota}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
            <div className="gap-1 md:flex md:w-1/4 md:flex-col">
              <Label>Start Date Event</Label>
              <DateTimePicker
                onDateTimeChange={(date) =>
                  formik.setFieldValue("startDate", date)
                }
              />
            </div>
            <div className="gap-1 md:flex md:w-1/4 md:flex-col">
              <Label>End Date Event</Label>
              <DateTimePicker
                onDateTimeChange={(date) =>
                  formik.setFieldValue("endDate", date)
                }
              />
            </div>
          </div>

          <div className="md:flex md:flex-row md:gap-3"></div>
          <RichTextEditor
            label="Description"
            onChange={(html: string) => formik.setFieldValue("description", html)}
            isError={Boolean(formik.errors.description)}
            value={formik.values.description}
          />

          <div className="flex w-fit flex-col space-y-1.5">
            <Label>Thumbnail</Label>
            <Input
              ref={thumbnailRef}
              type="file"
              accept="image/*"
              onChange={onChangeThumbnail}
            />
          </div>

          {selectedImage ? (
            <>
              <div className="relative h-[150px] w-[200px]">
                <Image src={selectedImage} alt="Event thumbnail" fill />
              </div>
              <button onClick={removeSelectedImage}>remove</button>
            </>
          ) : null}

          <div className="flex justify-start">
            <Button className="my-10 px-6 py-4" disabled={isPending} type="submit">
              {isPending ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvents;
