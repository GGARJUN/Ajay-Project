import React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { FooterLast } from "../hero/FooterLast";

export default function page() {
  return (
    <>
      <DashboardNav />
      <div className="  absolute w-full">
        <img src="/icons/back.jpg" alt="" className="w-full " />
      </div>
      <div className=" mt-14  py-10 relative">
        <div className="">
          <h1 className="font-bold text-4xl text-center">
            MEET <span className="border-b-4 border-green-500">THE</span> TEAM
          </h1>
          <p className="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            aperiam inventore, velit quia eos ullam. Est reprehenderit atque
            magni labore!
          </p>
        </div>
        <div className="grid grid-cols-4 my-10 mx-10 gap-8 m">
          <div className="  rounded-xl">
            <img
              src="/team/1.jpg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Ajay Kumar</h1>
            <p className="my-3 text-center">Team Leader</p>
            <p className="my-1 text-center">
              Lorem ipsum dolor sit amet fdgfgsdfgh.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="  rounded-xl">
            <img
              src="/team/2.jpg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Ajay Kumar</h1>
            <p className="my-3 text-center">Team Leader</p>
            <p className="my-1 text-center">
              Lorem ipsum dolor sit amet fdgfgsdfgh.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="  rounded-xl">
            <img
              src="/team/3.jpeg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Ajay Kumar</h1>
            <p className="my-3 text-center">Team Leader</p>
            <p className="my-1 text-center">
              Lorem ipsum dolor sit amet fdgfgsdfgh.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="  rounded-xl">
            <img
              src="/team/4.jpeg"
              className="rounded-full h-64 w-64 object-cover drop-shadow-2xl border-2 border-black p-2"
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-3">Ajay Kumar</h1>
            <p className="my-3 text-center">Team Leader</p>
            <p className="my-1 text-center">
              Lorem ipsum dolor sit amet fdgfgsdfgh.
            </p>
            <div className="grid grid-cols-3 pl-10 items justify-item-center my-6">
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/face.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/instagram.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="/icons/whatsapp.gif"
                  className="rounded-full h-8 w-8"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterLast/>
    </>
  );
}
