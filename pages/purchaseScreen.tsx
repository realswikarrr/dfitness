/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import EsewaImage from "../public/images/esewa.png";
import BankImage from "../public/images/bank.png";
import { useSession, getSession } from "next-auth/react";

const PurchaseScreen = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <section>
        <h1 className="heading mt-28 md:mt-10">
          <span>How To Purchase</span>
        </h1>

        <div className=" mx-auto max-w-2xl  flex flex-col items-center bg-gray-800 rounded-lg border shadow-md md:flex-row md:max-w-7xl ">
          <span className="p-5">
            <Image src={EsewaImage} height={100} width={100} alt="" />
          </span>
          <div className="flex flex-col justify-evenly p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              How To Purchase Through Esewa
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pay The Amount of The Product You Want to Purchase Through Esewa /
              Put The Product Name In Remarks and bring the receipt to the
              diamond fitness reception.
            </h5>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Esewa Details
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Esewa Id : 9810304033
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Esewa Name : Abhisek Rayamajhi
            </h5>
            <a
              href="https://esewa.com.np/#/home"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-gray-800 w-full font-bold py-2 px-4 uppercase rounded bg-green-400 hover:bg-blue-500 shadow hover:shadow-lg  transition transform hover:-translate-y-0.5">
                Click here to go to esewa
              </button>
            </a>
          </div>
        </div>

        {/* Bank Details */}

        <div className="mx-auto max-w-2xl mt-28 flex flex-col items-center bg-gray-800 rounded-lg border shadow-md md:flex-row md:max-w-7xl ">
          <span className="p-5">
            <Image src={BankImage} height={100} width={100} alt="" />
          </span>
          <div className="flex flex-col justify-evenly p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              How To Purchase Through Bank
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Transfer The Amount of The Product You Want to Purchase Through
              Bank and bring the receipt to the Diamond Fitness reception.
            </h5>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bank Details
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bank A/C: 9810304033
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bank Name : Abhisek Rayamajhi
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bank A/C Holder Name : Abhisek Rayamajhi
            </h5>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <h1 className="heading mt-28 md:mt-10">
          <span>Not Authenticated</span>
        </h1>
        <div className=" mx-auto max-w-2xl mt-36 flex flex-col items-center justify-center bg-gray-800 rounded-lg border shadow-md md:flex-row md:max-w-7xl ">
          <h1 className="text-white text-center p-10 text-3xl">
            Please Login To Continue With Purchase
          </h1>
        </div>
      </section>
    );
  }
};

export default PurchaseScreen;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  return {
    props: {
      session: session,
    },
  };
};
