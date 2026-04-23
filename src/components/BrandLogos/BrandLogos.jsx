import { brands } from '../../data/brands.js';
import './BrandLogos.css';

export default function BrandLogos() {
  return (
    <section className="brand-logos">
      <div className="container">
        <p className="section-label">Trusted by Leading Brands</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {brands.map((brand, i) => (
              <div key={i} className="brand-pill">
                {brand}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand, i) => (
              <div key={`dup-${i}`} className="brand-pill">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
