import React from "react";

export const FeaturePage = () => {
  return (
    <>
      <div className="bg-green-300  mt-10 mx-5 shadow-xl rounded-2xl p-5">
        <h3 className="text-center text-6xl font-bold py-3 text-white">
          Our Features
        </h3>
        <h1 className="text-center text-2xl font-bold text-white">
          Why Choose Us!!!
        </h1>
        <div className="md:flex justify-between mt-5">
          <div className="text-white p-5">
            <div className="mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
                100% Organic
              </h1>
              <p className="text-center text-lg font-normal">
                Labore justo vero ipsum sit clita erat lorem magna clita
              </p>
            </div>
            <div className="mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
                100% Organic
              </h1>
              <p className="text-center text-lg font-normal">
                Labore justo vero ipsum sit clita erat lorem magna clita
              </p>
            </div>
          </div>

          <div className="bg-blue-200 rounded-xl md:w-[100%] h-2/4 shadow-lg">
            <p className="p-10 text-center text-xl font-semibold">
              At et justo elitr amet sea at. Magna et sit vero at ipsum sit et
              dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum
              eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor
              ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita,
              vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor
            </p>
            <img
              className="mx-auto pb-5 md:w-96"
              src="images/feature.png"
              alt=""
            />
          </div>
          <div className="text-white p-5">
            <div className="mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
                100% Organic
              </h1>
              <p className="text-center text-lg font-normal">
                Labore justo vero ipsum sit clita erat lorem magna clita
              </p>
            </div>
            <div className="">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
                100% Organic
              </h1>
              <p className="text-center text-lg font-normal">
                Labore justo vero ipsum sit clita erat lorem magna clita
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
