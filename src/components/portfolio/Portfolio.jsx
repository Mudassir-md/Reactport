import React from 'react';
import IMG1 from '../../assets/Cocktail1.png';
import IMG2 from '../../assets/movie in react.png';
import IMG3 from '../../assets/portofolio1.png';
import IMG4 from '../../assets/cal.png';
import IMG5 from '../../assets/bootstrap1.png';
import IMG6 from '../../assets/Simple Form.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Cocktail1',
      img: IMG1,
      description:
      'The cocktail website created using React, Redux, and React',
      technologies: 'React | Redux | ',
      link: 'https://cocktail2.netlify.app/',
     
    },
    {
      id: 2,
      title: 'cal',
      img: IMG4,
      description:
        'Calculator create by using the htlm css and javascript',
      technologies: 'Html |Css|Javascript ',
      link: 'https://simpleca.netlify.app',
    
    },
    {
      id: 3,
      title: 'Movie App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React Js ',
      link: 'https://reactmovie10.netlify.app',
      
    },
    {
      id: 4,
      title: 'portofolio',
      img: IMG3,
      description:
        'Fully responsive by using My portfolio showcases my work through a clean and visually appealing layout',
      technologies: ' Html| JavaScript | CSS',
      link: 'https://personallyport.netlify.app',
   
    },
    {
      id: 5,
      title: 'Bootstrap',
      img: IMG5,
      description:
        'Web design by using the html and css and bootstrap',
      technologies: 'Bootstrap ',
      link: 'https://bootstarp-task.netlify.app',
    
    },
    {
      id: 6,
      title: 'Simple Form',
      img: IMG6,
      description:
        'Login form created using HTML and CSS is a simple yet effective way to allow users to log into a website or application. With its clean design and user-friendly interface,',
      technologies: 'Html | Css | ',
      link: 'https://simpleform10.netlify.app',
    
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
             
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;