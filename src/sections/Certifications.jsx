// src/sections/Certifications.jsx
import { useState } from "react";
import "../index.css";
import HackthonCert from "../assets/certifications/HACKTHON.jpg";
import Technovision from "../assets/certifications/Technovision.jpeg"

const certs = [
  {
    name: "CODE BHARAT 2025",
    org: "IIIT DHARWAD / SAVISHKAR KARNATAKA NORTH",
    year: "2025",
    img: HackthonCert,
  },
  {
    name: "TECHNOVISION - 25",
    org: "HIRASUGAR INSTITUTE OF TECHNOLOGY / S.J.P.N.TRUST's",
    year: "2025",
    img: Technovision,
  },
  // more certs...
];

export default function Certifications() {
  const [preview, setPreview] = useState(null); // { img, name } or null

  return (
    <>
      <div className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          {certs.map((cert) => (
            <article key={cert.name} className="cert-card">
              <button
                className="cert-thumb-btn"
                onClick={() => setPreview({ img: cert.img, name: cert.name })}
              >
                <div className="cert-img-wrapper thumb">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="cert-img"
                    loading="lazy"
                  />
                </div>
              </button>
              <div className="cert-body">
                <h3>{cert.name}</h3>
                <p className="cert-org">{cert.org}</p>
                <p className="cert-meta">{cert.year}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {preview && (
        <div className="cert-modal" onClick={() => setPreview(null)}>
          <div
            className="cert-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close"
              onClick={() => setPreview(null)}
            >
              ✕
            </button>
            <img
              src={preview.img}
              alt={preview.name}
              className="cert-modal-img"
            />
            <p className="cert-modal-title">{preview.name}</p>
          </div>
        </div>
      )}
    </>
  );
}
