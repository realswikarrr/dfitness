import Image from "next/image";
import TrainerImage1 from "../public/images/trainer-1.jpg";
import TrainerImage2 from "../public/images/trainer-2.jpg";
import TrainerImage3 from "../public/images/trainer-3.jpg";
import TrainerImage4 from "../public/images/trainer-4.jpg";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
      <h1 className="heading">
        <span>expert trainers</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <Image placeholder="blur" src={TrainerImage1} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <Link href="#">
                <BsInstagram className="text-2xl text-white hover:text-red-600 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        <div className="box">
          <Image placeholder="blur" src={TrainerImage2} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <Link href="#">
                <BsInstagram className="text-2xl text-white hover:text-red-600 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        <div className="box">
          <Image placeholder="blur" src={TrainerImage3} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <Link href="#">
                <BsInstagram className="text-2xl text-white hover:text-red-600 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        <div className="box">
          <Image placeholder="blur" src={TrainerImage4} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <Link href="#">
                <BsInstagram className="text-2xl text-white hover:text-red-600 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
