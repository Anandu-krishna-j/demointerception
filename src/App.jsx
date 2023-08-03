import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import JetImage from './assets/jet.png'

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        setIsIntersecting(entry[0].isIntersecting);
      },{rootMargin:'0px'})
      observer.observe(ref.current)
     
  }, []);


  return (
    <div className="wrapper">
      <section className="first-section">
        <h1>Welcome to my Demo..!</h1>
      </section>
      <section  className="second-section">
       <img src={JetImage} className={isIntersecting?'image-animation':''} alt="" />
       <h1 ref={ref}>Hiii</h1>
      </section>
      <section className="three">
        <h3>Third Section</h3>
      </section>
    </div>
  );
}

export default App;
