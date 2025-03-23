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

export default function Company() {
  return (
    <div className="company-page">
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

      <div className="company-content">
        <h1 className="company-title">Our Company</h1>
        <div className="company-info">
          <div className="company-section">
            <h2 className="section-title">About Us</h2>
            <p>
              Maggic Pot is a pioneering company in self-heating food technology, 
              founded with a vision to revolutionize how people enjoy hot meals on the go. 
              Our innovative solutions combine cutting-edge technology with user-friendly design 
              to create a seamless cooking experience.
            </p>
          </div>

          <div className="company-section">
            <h2 className="section-title">Our Mission</h2>
            <p>
              To provide convenient, safe, and efficient self-heating food solutions 
              that enhance the way people enjoy hot meals anywhere, anytime. We strive 
              to make quality food preparation accessible to everyone.
            </p>
          </div>

          <div className="company-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info">
              <p>
                <IonIcon name="mail-outline" /> Email: shaikhsabar@gmail.com
              </p>
              <p>
                <IonIcon name="call-outline" /> Phone: +91 9881181400
              </p>
              <p>
                <IonIcon name="location-outline" /> Address: YCIS CII Workspace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 