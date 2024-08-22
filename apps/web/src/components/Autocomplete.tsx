"use client";

import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import AsyncSelect from "react-select/async";
import { Event } from "../../types/event";
import { debounce } from "lodash";

interface EventOption {
  label: string;
  value: string;
}

const Autocomplete = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  const getEventsOptions = async (inputText: string) => {
    const { data } = await axiosInstance.get("/event", {
      params: { search: inputText, take: 20 },
    });

    return data?.data.map((event: Event) => ({
      label: event.title,
      value: event.id,
    }));
  };

  const loadOptions = debounce(
    (inputText: string, callback: (option: EventOption[]) => void) => {
      getEventsOptions(inputText).then((option) => callback(option));
    },
    500,
  );

  return (
    <AsyncSelect
      placeholder="Search Events"
      className="w-[380px] md:mt-5 md:w-[756px] lg:mt-0 lg:w-[600px]"
      loadOptions={loadOptions}
      onChange={(event, actionMeta) => {
        if (actionMeta.action !== "clear") {
          router.push(`/events/${event?.value}`);
        }
      }}
      isClearable={true}
    />
  );
};

export default Autocomplete;
