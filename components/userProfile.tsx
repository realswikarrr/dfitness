/* eslint-disable @next/next/no-img-element */
import { useSession, signOut, getSession } from "next-auth/react";
import Moment from "react-moment";

const UserProfile = ({
  startDate,
  endDate,
  active,
  dietChart,
  workoutChart,
}: any) => {
  const { data: session, status } = useSession();
  return (
    <section>
      <h1 className="heading mt-28 md:mt-10">
        <span>User Dashboard</span>
      </h1>
      <div className=" pb-0 pt-15 ">
        <div className="p-10  shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-2 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-white text-2xl">
                  Membership Started
                </p>
                <p className="text-white">
                  <Moment format="YYYY/MM/DD">{startDate}</Moment>
                </p>
              </div>
              <div>
                <p className="font-bold text-white text-2xl">
                  Membership Ending
                </p>
                <p className="text-white">
                  <Moment format="YYYY/MM/DD">{endDate}</Moment>
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={session?.user?.image || ""}
                className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                alt="avatar"
              ></img>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {active ? (
                <button className="text-black py-2 px-4 uppercase rounded bg-green-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Active User
                </button>
              ) : (
                <button className="text-black py-2 px-4 uppercase rounded bg-gray-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  InActive User
                </button>
              )}

              <button
                onClick={() => signOut()}
                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                SignOut
              </button>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-white">
              {session?.user?.name}
            </h1>
            <p className="font-light text-white mt-3 lowercase">
              {session?.user?.email}
            </p>
            <p className="mt-8 text-white text-2xl">
              Membership Ends <Moment from={startDate}>{endDate}</Moment>
            </p>
            <p className="mt-2 text-red-600 text-2xl">
              To Renew Membership Visit Diamond Fitness{" "}
            </p>
          </div>
          <div className="md:space-x-40 justify-center  flex flex-col md:flex-row  items-center md: mt-32 md:mt-0 md:justify-center">
            <div>
              <h1 className="text-4xl font-medium text-red-600 md:pb-5 mb-2 md:mb-0 text-center">
                Your Workout Chart
              </h1>
              <a href={dietChart} target="_blank" rel="noreferrer">
                <img
                  className="h-[300px] w-[300px]"
                  src={dietChart}
                  alt="dietChart"
                />
              </a>
            </div>
            <div>
              <h1 className="text-4xl font-medium text-red-600 md:pb-5 mt-5 mb-2 md:mt-0  md:mb-0 text-center">
                Your Diet Chart
              </h1>
              <a href={workoutChart} target="_blank" rel="noreferrer">
                <img
                  className="h-[300px] w-[300px]"
                  src={workoutChart}
                  alt="dietChart"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
