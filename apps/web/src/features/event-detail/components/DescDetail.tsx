"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

const instructionData = [
  {
    id: 1,
    content:
      "Kunjungi Website: Akses situs web Ronmes Sphere melalui browser Anda di www.ronmes-sphere.com.",
  },
  {
    id: 2,
    content:
      "Cari Acara: Gunakan fitur pencarian di halaman utama atau jelajahi kategori acara untuk menemukan tiket yang Anda inginkan. Anda dapat mencari berdasarkan jenis acara, lokasi, atau tanggal.",
  },
  {
    id: 3,
    content:
      "Pilih Acara: Setelah menemukan acara yang Anda inginkan, klik pada nama acara untuk melihat detail lebih lanjut, termasuk tanggal, waktu, dan harga tiket.",
  },
  {
    id: 4,
    content:
      "Pilih Tiket: Pilih jumlah tiket dan kategori tempat duduk sesuai dengan preferensi Anda. Pastikan untuk memeriksa peta tempat duduk jika tersedia.",
  },
  {
    id: 5,
    content:
      "Masukkan Informasi: Isi formulir pembelian dengan informasi pribadi Anda, termasuk nama dan alamat email. Anda juga akan diminta untuk memilih metode pembayaran.",
  },
  {
    id: 6,
    content:
      "Pembayaran: Pilih metode pembayaran yang Anda inginkan dan masukkan detail pembayaran Anda. Ronmes Sphere mendukung berbagai metode pembayaran yang aman.",
  },
  {
    id: 7,
    content:
      "Konfirmasi Pembelian: Setelah pembayaran berhasil, Anda akan menerima email konfirmasi yang berisi tiket elektronik Anda dan detail acara. Pastikan untuk memeriksa folder spam jika Anda tidak melihat email konfirmasi.",
  },
  {
    id: 8,
    content:
      "Cetak atau Simpan Tiket: Cetak tiket atau simpan tiket elektronik di perangkat mobile Anda. Anda akan membutuhkannya saat memasuki acara.",
  },
];

const TicketCounter = () => {
  const [ticketCount, setTicketCount] = useState(1);

  const increaseTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  const decreaseTicket = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Button variant={"outline"} onClick={decreaseTicket}>
        -
      </Button>
      <span className="text-lg font-semibold">{ticketCount}</span>
      <Button variant={"outline"} onClick={increaseTicket}>
        +
      </Button>
    </div>
  );
};

const DescDetail = () => {
  return (
    <div>
      <div className="container mt-[30px] px-6 lg:container lg:flex lg:max-w-7xl lg:flex-row lg:justify-between lg:px-0">
        {/* Description */}
        <div className="lg:max-w-[850px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1">
              <FaCaretRight className="text-[#0080ff]" />
              <p className="text-base font-semibold">Description</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-md w-full text-gray-600">
                Pemsi Fest 2024 siap menjadi ajang musik paling dinanti tahun
                ini! Acara ini akan menghadirkan deretan artis terbaik
                Indonesia, dan yang paling ditunggu-tunggu adalah penampilan
                dari Lyodra, sang diva muda yang telah memukau banyak penggemar
                dengan suara emasnya.
              </p>
              <p className="text-md w-full text-gray-600">
                Lyodra, yang dikenal melalui kemenangan di ajang pencarian
                bakat, telah membuktikan dirinya sebagai salah satu penyanyi
                paling berbakat di tanah air. Dengan berbagai hits seperti
                "Pesan Terakhir" dan "Kalau Bosan", penampilannya di Pemsi Fest
                2024 dipastikan akan menjadi momen yang tidak boleh dilewatkan.
              </p>

              <p className="text-md w-full text-gray-600">
                Pemsi Fest 2024 akan digelar dengan suasana yang lebih meriah,
                lebih besar, dan lebih spektakuler dibandingkan tahun-tahun
                sebelumnya. Selain Lyodra, berbagai musisi top lainnya juga akan
                turut memeriahkan acara ini, menjadikan Pemsi Fest 2024 sebagai
                festival musik yang menawarkan pengalaman tak terlupakan bagi
                semua penikmat musik.
              </p>

              <p className="text-md w-full text-gray-600">
                Jangan lewatkan kesempatan untuk menjadi bagian dari euforia
                ini! Segera dapatkan tiket Anda dan saksikan langsung penampilan
                memukau dari Lyodra dan artis lainnya di Pemsi Fest 2024!
              </p>
            </div>
          </div>
          {/* Terms and Conditions */}
          <div className="mt-[20px] flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1">
              <FaCaretRight className="text-[#0080ff]" />
              <p className="text-base font-semibold">Terms and Conditions</p>
            </div>
            <p className="text-md w-full text-gray-600">
              All tickets purchased for Pemsi Fest 2024 are non-refundable and
              non-transferable. Ticket holders must present a valid ticket
              (physical or digital) upon entry. Entry will be denied without a
              valid ticket. Tickets are subject to availability, and the
              organizer reserves the right to set or alter ticket prices without
              prior notice.
            </p>
          </div>
          {/* Ordered List */}
          <div className="mt-[20px] flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1">
              <FaCaretRight className="text-[#0080ff]" />
              <p className="text-base font-semibold">
                Informasi Pembelian Tiket
              </p>
            </div>
            <ul className="list-inside">
              {instructionData.map((event) => (
                <li className="mt-2 text-base text-gray-600" key={event.id}>
                  {event.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* sticky button */}
        <div className="hidden lg:block">
          <div className="lg:sticky lg:top-[95px] lg:flex lg:w-[400px] lg:flex-col lg:rounded-xl lg:border-[1.5px] lg:px-5 lg:py-8 lg:shadow-md lg:gap-6">
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-xs">Price</p>
                <p className="text-xl font-semibold">IDR. 50.000</p>
              </div>
              <div>
                <TicketCounter />
              </div>
            </div>
            <Button className="w-full bg-[#0080ff]">Buy Ticket</Button>
          </div>
        </div>
      </div>

      {/* FAB Mobile */}
      <div className="fixed bottom-0 flex w-full flex-col justify-center gap-6 border-t-[1.5px] border-gray-200 bg-white px-6 py-4 lg:hidden">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-xs">Price</p>
            <p className="text-md font-semibold">IDR. 50.000</p>
          </div>
          <div>
            <TicketCounter />
          </div>
        </div>
        <Button className="w-full bg-[#0080ff] md:h-[55px] md:text-lg md:font-semibold">
          Buy Ticket
        </Button>
      </div>
    </div>
  );
};

export default DescDetail;
