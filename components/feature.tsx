import Image from "next/image";
import FeatureImage1 from "../public/images/f-img-1.jpg";
import FetureImage1Icon from "../public/images/icon-1.png";
import FetureImage2Icon from "../public/images/icon-2.png";
import FeatureImage3Icon from "../public/images/icon-3.png";
import FeatureImage2 from "../public/images/f-img-2.jpg";
import FeatureImage3 from "../public/images/f-img-3.jpg";

const Feature = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">
        <span>gym features</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="content">
            <Image placeholder="blur" src={FetureImage1Icon} alt="" />
            <h3>body building</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box second">
          <div className="content">
            <Image placeholder="blur" src={FetureImage2Icon} alt="" />
            <h3>gym for men</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <Image placeholder="blur" src={FeatureImage3Icon} alt="" />
            <h3>gym for women</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
