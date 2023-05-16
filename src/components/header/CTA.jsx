import React from 'react';
import pdf from "../../assets/mmm1.pdf"


const CTA = () => {
  return (
    <div className="cta">
      <a href={pdf} downloadclassName="btn">
        Download CV
      </a> 
     
    </div>
  );
};

export default CTA;