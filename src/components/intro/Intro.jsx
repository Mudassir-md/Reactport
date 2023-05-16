import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
// import ME from '../../assets/me.jpg';
import gif from "../intro/full.gif"
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
   
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='img' src={gif} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Fresher</h5>
           
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> Completed Projects</small>
            </article>
          </div>
          <p>I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScrip and passionate Developer with self learning Curious of learning new skills by giving extra flavour in my daily routine life and always have an ambitious to work in IT industry.I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.I also like sharing content related to the stuff that I have learned in Web Development so it can help other people of the Dev Community. Feel free to Connect</p>
        
        </div>
      </div>
    </section>
  )
}

export default Intro