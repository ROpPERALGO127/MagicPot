import ImageSlider from '../../components/ImageSlider';
import IonIcon from '../../components/IonIcon';
import Link from 'next/link';

const sliderImages = [
  '/Back  (1).jpg',
  '/Back  (2).jpg',
  '/Back  (3).jpg',
  '/Back  (4).jpg',
  '/Back  (5).jpg',
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="slider-container">
        <ImageSlider images={sliderImages} interval={6000} />
      </div>
      
      <div className="menu">
        <ul>
          <li className="link">
            <Link href="/" className="link-content">
              <span className="link-icon">
                <IonIcon name="home-outline" />
              </span>
              <span className="link-title">Home</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="about-content">
        <h1 className="about-title">About Maggic Pot</h1>
        <div className="about-description">
          <p>
            Welcome to Maggic Pot, where innovation meets convenience in the world of self-heating food technology.
            Our journey began with a simple vision: to revolutionize how people enjoy warm meals on the go.
          </p>
          <p>
            At Maggic Pot, we understand the challenges of modern life and the desire for hot, delicious meals
            without the constraints of traditional cooking methods. That&apos;s why we&apos;ve developed our cutting-edge
            self-heating technology that transforms the way you experience food.
          </p>
          <p>
            Our commitment to quality and safety is unwavering. Every Maggic Pot product undergoes rigorous
            testing and meets the highest industry standards, ensuring you can enjoy your meals with complete
            peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
} 