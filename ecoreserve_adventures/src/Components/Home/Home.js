import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const images = [
    'https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2xYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--554001f864acb5cb0fa73ea448f5ce621d0c3a9d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/5-protecting-kenyas-wildlife_1.jpg',
    'https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3BYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03ab8a78221b9b2c690b91039d29db99f67f3d12/4-saving-wild-lives.jpg',
    'https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3hYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--eb55ac2cdd0a85b9fe35e80c8656232036d64741/6-supporting-coexistence.jpg',
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2hYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e25da6a247e7f2569d24b570676a61f30f83ce28/miacollisjuly18-20.jpg",
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3BYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03ab8a78221b9b2c690b91039d29db99f67f3d12/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/4-saving-wild-lives.jpg",
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3hYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--eb55ac2cdd0a85b9fe35e80c8656232036d64741/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/6-supporting-coexistence.jpg",
    "https://www.sheldrickwildlifetrust.org/assets/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2RYQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--711a4a73f46dbe128923aff4d4f2e0e5845c2919/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9LYzJGMlpYSjdDam9LYzNSeWFYQlVPaEZ1YjE5emRXSnpZVzF3YkdWVU9nNXBiblJsY214aFkyVlVPaFJ2Y0hScGJXbDZaVjlqYjJScGJtZFVPZ3h4ZFdGc2FYUjVhVlU2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKc0Iya0NzQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a3beae31998acce4034ea21699f81133350de539/1-join-our-herd_1.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
      <div
        className="home-container"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay">
          <h1>Welcome to Sheldrick Wildlife Trust</h1>
          <p>Protecting Kenya’s Wildlife</p>
          <div className="dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentImage ? 'active' : ''}`} // Active dot should have class 'active'
                onClick={() => handleDotClick(index)}  // Attach click handler
              >
              
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    
  
}

export default Home;














