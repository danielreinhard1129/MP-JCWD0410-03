import { SidebarDemo } from "@/components/Sidebar";
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

const EventList: React.FC = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      price: 100,
      startDate: "2024-09-01",
      endDate: "2024-09-02",
      quota: 100,
      booked: 50,
    },
    {
      id: 2,
      title: "Event 2",
      price: 100,
      startDate: "2024-09-01",
      endDate: "2024-09-02",
      quota: 100,
      booked: 50,
    },
    // Tambahkan data event lainnya sesuai kebutuhan
  ]);

  const handleCreateEvent = () => {
    // Handle create event logic here
  };

  const handleEditEvent = (id: number) => {
    // Handle edit event logic here
  };

  const handleDeleteEvent = (id: number) => {
    // Handle delete event logic here
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarDemo />
      <div className="w-full p-5">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Events Dashboard</h1>
          <Link href={"/dashboard/events/create-events"}>
            <button
              onClick={handleCreateEvent}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Create Event
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full table-auto bg-white">
            <thead>
              <tr>
                <th className="border-b px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                  Title
                </th>
                <th className="border-b px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                  Price
                </th>
                <th className="border-b px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                  Start Date
                </th>
                <th className="border-b px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                  End Date
                </th>
                <th className="border-b px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                  Quota
                </th>
                <th className="border-b px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                  Booked
                </th>
                <th className="border-b px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-100">
                  <td className="border-b px-6 py-4">{event.title}</td>
                  <td className="border-b px-6 py-4">{event.price}</td>
                  <td className="border-b px-6 py-4">{event.startDate}</td>
                  <td className="border-b px-6 py-4">{event.endDate}</td>
                  <td className="border-b px-6 py-4">{event.quota}</td>
                  <td className="border-b px-6 py-4">{event.booked}</td>
                  <td className="border-b px-6 py-4 text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center rounded-md bg-white p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                          <BsThreeDotsVertical
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={React.Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => handleEditEvent(event.id)}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full px-4 py-2 text-left text-sm`}
                                >
                                  Update
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => handleDeleteEvent(event.id)}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full px-4 py-2 text-left text-sm`}
                                >
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventList;
