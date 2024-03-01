"use client";
import * as React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { FooterLast } from "../hero/FooterLast";
import Link from "next/link";

export default function page() {
  return (
    <>
      <DashboardNav />
      <div className="mt-20 text-center">
        <h1 className="font-bold text-2xl">YouTube Videos</h1>
      </div>
      <div className="my-20 mx-10  grid grid-cols-4 gap-14">
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
          <Link href="./video1"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 font-semibold rounded-xl">Click</button></Link>
          <h1 className="font-bold text-2xl mt-5">Sottu Neer Pasanam</h1>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
          <Link href="./video2"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 font-semibold rounded-xl">Click</button></Link>
          <h1 className="font-bold text-2xl mt-5">Sottu Neer Pasanam</h1>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
          <Link href="./video3"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 font-semibold rounded-xl">Click</button></Link>
          <h1 className="font-bold text-2xl mt-5">Sottu Neer Pasanam</h1>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
          <Link href="./video4"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 font-semibold rounded-xl">Click</button></Link>
          <h1 className="font-bold text-2xl mt-5">Sottu Neer Pasanam</h1>
        </div>
      </div>
      <FooterLast />
    </>
  );
}
