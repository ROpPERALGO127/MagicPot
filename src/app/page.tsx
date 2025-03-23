import IonIcon from '../components/IonIcon';
import ImageSlider from '../components/ImageSlider';
import ReadyToEatBadge from '../components/ReadyToEatBadge';
import Link from 'next/link';

const sliderImages = [
  '/Back  (1).jpg',
  '/Back  (2).jpg',
  '/Back  (3).jpg',
  '/Back  (4).jpg',
  '/Back  (5).jpg',
];

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <ImageSlider images={sliderImages} interval={6000} />
        <div className="hero-content">
          <h1 className="hero-title">Maggic Pot</h1>
          <p className="hero-description">
            Experience the future of cooking with our revolutionary self-heating technology.
            Enjoy hot, delicious meals anywhere, anytime!
          </p>
          <a href="#features" className="hero-cta">
            Discover More
          </a>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li className="link">
            <span className="link-icon">
              <IonIcon name="home-outline" />
            </span>
            <span className="link-title">Home</span>
          </li>
          <li className="link">
            <a href="/about" className="link-content">
              <span className="link-icon">
                <IonIcon name="information-circle-outline" />
              </span>
              <span className="link-title">About Us</span>
            </a>
          </li>
          <li className="link">
            <Link href="/products" className="link-content">
              <span className="link-icon">
                <IonIcon name="cube-outline" />
              </span>
              <span className="link-title">Products</span>
            </Link>
          </li>
          <li className="link">
            <Link href="/owner" className="link-content">
              <span className="link-icon">
                <IonIcon name="business-outline" />
              </span>
              <span className="link-title">Company</span>
            </Link>
          </li>
          <li className="link">
            <span className="link-icon">
              <IonIcon name="newspaper-outline" />
            </span>
            <span className="link-title">Blog</span>
          </li>
          <li className="link">
            <span className="link-icon">
              <IonIcon name="videocam-outline" />
            </span>
            <span className="link-title">Videos</span>
          </li>
          <li className="link">
            <span className="link-icon">
              <IonIcon name="cart-outline" />
            </span>
            <span className="link-title">Buy Now</span>
          </li>
        </ul>
      </div>

      <div className="cards-grid">
          <div className="feature-card">
            <h3 className="feature-title">Long-Lasting Warmth</h3>
            <p className="feature-description">
              <span className="checkmark">✅</span>
              Keeps food warm for up to 50 minutes—perfect for slow eaters or extended meals.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Lab-Tested & Safe</h3>
            <p className="feature-description">
              <span className="checkmark">✅</span>
              Fully NABL-certified for quality and safety.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Versatile & Travel-Friendly</h3>
            <p className="feature-description">
              <span className="checkmark">✅</span>
              Perfect for home, office, travel, camping, and outdoor adventures.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">No Electricity or Flame Required</h3>
            <p className="feature-description">
              <span className="checkmark">✅</span>
              Enjoy hot meals anytime, anywhere—no stove, no microwave needed.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Fast & Convenient Cooking</h3>
            <p className="feature-description">
              <span className="checkmark">✅</span>
              Hot meals ready in 12-15 minutes with zero hassle.
            </p>
          </div>
      </div>

      <div className="title-container">
        <div className="title-with-icon">
          <h1 className="magic-title">Maggic Pot</h1>
          <div className="soup-icon">
            <div className="bowl">
              <div className="spoon"></div>
              <div className="steam"></div>
              <div className="steam"></div>
              <div className="steam"></div>
            </div>
          </div>
        </div>
        <p className="welcome-text">
          Welcome to the future of cooking – introducing the game-changing Magic Pot! 
          The ultimate way to enjoy hot, ready-to-eat meals in minutes, wherever you are. 
          Say goodbye to complicated cooking and hello to effortless, energetic meals 
          that are as quick as they are delicious!
        </p>
        <div className="tech-card">
          <h2 className="tech-title">Self-Heating Technology</h2>
          <p className="tech-description">
            Magic Pack heats up to <span className="temperature-highlight">80°C</span> for 
            perfect cooking, while staying safe under <span className="temperature-highlight">130°C</span>.
          </p>
        </div>
      </div>

      <div className="badge-section">
        <div className="badge-content">
          <h2 className="badge-section-title">Food Types</h2>
          <div className="badges-grid">
            <ReadyToEatBadge 
              icon="restaurant-outline" 
              text="Ready" 
              subText="RTE"
            />
            <ReadyToEatBadge 
              icon="timer-outline" 
              text="Quick" 
              subText="QCK"
            />
            <ReadyToEatBadge 
              icon="flame-outline" 
              text="Heat" 
              subText="HTG"
            />
            <ReadyToEatBadge 
              icon="shield-checkmark-outline" 
              text="Safe" 
              subText="SFE"
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Maggic Pot</h3>
            <p className="footer-text">
              Revolutionizing the way people enjoy hot meals on the go. Our self-heating technology 
              brings convenience and innovation to your daily life, making it possible to enjoy 
              warm, delicious food anywhere, anytime.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <IonIcon name="logo-facebook" />
              </a>
              <a href="#" className="social-link">
                <IonIcon name="logo-twitter" />
              </a>
              <a href="#" className="social-link">
                <IonIcon name="logo-instagram" />
              </a>
              <a href="#" className="social-link">
                <IonIcon name="logo-linkedin" />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">How It Works</a>
              <a href="#" className="footer-link">Safety Information</a>
              <a href="#" className="footer-link">Product Guide</a>
              <a href="#" className="footer-link">FAQs</a>
              <a href="#" className="footer-link">Contact Support</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-links">
              <a href="mailto:info@magicpot.com" className="footer-link">
                <IonIcon name="mail-outline" /> shaikhsabar@gmail.com
              </a>
              <a href="tel:+1234567890" className="footer-link">
                <IonIcon name="call-outline" /> +91 9881181400
              </a>
              <a href="#" className="footer-link">
                <IonIcon name="location-outline" /> YCIS CII Workspace
                <br />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            © 2024 Magic Pot. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </>
  );
}
