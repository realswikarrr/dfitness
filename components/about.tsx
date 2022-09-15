import Image from "next/image";
import AboutImage from "../public/images/about-img.jpg";
import { BsCheckLg } from "react-icons/bs";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <Image placeholder="blur" src={AboutImage} alt="" />
      </div>

      <div className="content">
        <span>about us</span>
        <h3 className="title">Every day is a chance to become better</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quia
          accusamus dicta inventore nobis obcaecati vero odio, id dolorum.
          Consequatur ex, aperiam deserunt nostrum perferendis illum unde ipsa?
          Consequatur, distinctio?
        </p>
        <div className="box-container">
          <div className="box">
            <h3 className="flex items-center">
              <BsCheckLg className="mr-2 text-red-600" />
              body and mind
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className="box">
            <h3 className="flex items-center">
              <BsCheckLg className="mr-2 text-red-600" />
              healthy life
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className="box">
            <h3 className="flex items-center">
              <BsCheckLg className="mr-2 text-red-600" />
              stragies
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className="box">
            <h3 className="flex items-center">
              <BsCheckLg className="mr-2 text-red-600" />
              workout
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
        </div>
        <a href="#" className="btn">
          read more
        </a>
      </div>
    </section>
  );
};

export default About;
