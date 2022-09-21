/* eslint-disable @next/next/no-img-element */
import { useSession, getSession } from "next-auth/react";
import { createClient } from "next-sanity";
import { useEffect, useState } from "react";
import UserProfile from "../components/userProfile";
import imageUrlBuilder from "@sanity/image-url";

const UserDashBoard = ({ user }: any) => {
  const { data: session, status } = useSession();
  const [dietImageUrl, setDietImageUrl] = useState<any>("");
  const [workoutImageUrl, setWorkoutImageUrl] = useState<any>("");

  console.log(user[0]?.dietChart);

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "rd8ppmd7",
      dataset: "production",
    });

    setDietImageUrl(imgBuilder.image(user[0]?.dietChart));
    setWorkoutImageUrl(imgBuilder.image(user[0]?.workoutChart));
  }, [user[0]?.dietChart]);

  if (status === "authenticated") {
    return (
      <UserProfile
        startDate={user[0]?.startDate}
        endDate={user[0]?.endDate}
        active={user[0]?.active}
        dietChart={dietImageUrl}
        workoutChart={workoutImageUrl}
      />
    );
  } else {
    return (
      <div className="mt-28">
        <h1 className="text-white">Blyahhh Not Signed In</h1>
      </div>
    );
  }
};

export default UserDashBoard;

const client = createClient({
  projectId: "rd8ppmd7",
  dataset: "production",
  apiVersion: "2021-08-31",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  const doc = {
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    admin: false,
    active: true,
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    _id: Date.now().toString(),
    _type: "users",
  };

  const email = session?.user?.email;
  const user = await client.fetch(`*[_type == "users" && email =="${email}"]`);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (!user || user.length === 0) {
    await client.create(doc).then((res) => {
      console.log("Created Sucessfully)");
    });

    return {
      props: {
        user: user,
        session: session,
      },
    };
  } else {
    return {
      props: {
        user: user,
        session: session,
      },
    };
  }
};
