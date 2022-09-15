import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="information">
        <span>pricing plan</span>
        <h3>affordable pricing plan for your</h3>
        <p className="flex items-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore
          excepturi ea suscipit fugiat cum quae, rerum optio mollitia! Tempora?
        </p>
        <p className="flex items-center">
          <BsCheckLg className="mr-2 text-red-600" /> cardio exercise
        </p>
        <p className="flex items-center">
          <BsCheckLg className="mr-2 text-red-600" />
          weight lifting
        </p>
        <p className="flex items-center">
          <BsCheckLg className="mr-2 text-red-600" /> diet plans
        </p>
        <p className="flex items-center">
          <BsCheckLg className="mr-2 text-red-600" /> overall results
        </p>
        <Link href="#">
          <a className="btn">all pricing</a>
        </Link>
      </div>

      <div className="plan basic">
        <h3>basic plan</h3>
        <div className="price">
          <span>$</span>30<span>/mo</span>
        </div>
        <div className="list">
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> personal training
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> cardio exercise
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> weight lifting
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" />
            diet plans
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> overall results
          </p>
        </div>
        <Link href="#">
          <a className="btn">get started</a>
        </Link>
      </div>

      <div className="plan">
        <h3>premium plan</h3>
        <div className="price">
          <span>$</span>90<span>/mo</span>
        </div>
        <div className="list">
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> personal training
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> cardio exercise
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> weight lifting
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> diet plans
          </p>
          <p className="flex items-center">
            <BsCheckLg className="mr-2 text-red-600" /> overall results
          </p>
        </div>
        <Link href="#">
          <a className="btn">get started</a>
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
