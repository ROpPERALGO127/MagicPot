import ImageSlider from '../../components/ImageSlider';
import IonIcon from '../../components/IonIcon';
import Link from 'next/link';
import Image from 'next/image';

const sliderImages = [
  '/Back  (1).jpg',
  '/Back  (2).jpg',
  '/Back  (3).jpg',
  '/Back  (4).jpg',
  '/Back  (5).jpg',
];

const products = [
  {
    id: 1,
    name: 'Classic Pot',
    image: '/Pots (1).jpg',
    description: 'Perfect for everyday meals'
  },
  {
    id: 2,
    name: 'Premium Pot',
    image: '/Pots (2).jpg',
    description: 'Enhanced heating technology'
  },
  {
    id: 3,
    name: 'Travel Pot',
    image: '/Pots (3).jpg',
    description: 'Compact and portable design'
  },
  {
    id: 4,
    name: 'Family Pot',
    image: '/Pots (4).jpg',
    description: 'Larger capacity for sharing'
  },
  {
    id: 5,
    name: 'Deluxe Pot',
    image: '/Pots (5).jpg',
    description: 'Premium features and design'
  },
  {
    id: 6,
    name: 'Ultimate Pot',
    image: '/Pots (6).jpg',
    description: 'The perfect all-in-one solution'
  }
];

export default function Products() {
  return (
    <div className="products-page">
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

      <div className="products-content">
        <h1 className="products-title">Our Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="product-image"
                />
                <div className="product-overlay">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 