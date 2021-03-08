import React from 'react';


const About = () => {

    return (
      <>
        <section id="about" class="container">
          <div id="about-content" class="row text-center">
            <figure id="about-img" class="col-sm-4">
              <img
                src="img/quig-photo.png"
                alt="quig"
                width="250px"
                height="250px"
              />
            </figure>
            <figure id="about-text" class="col-sm-8">
              <p>
                Mike Quigley lives in Philadelphia where he makes art, music,
                and tinkers with software.
              </p>
              <p>
                email: quig.info@gmail.com |{" "}
                <a
                  href="https://quig.bandcamp.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  bandcamp
                </a>
              </p>
            </figure>
          </div>
        </section>
      </>
    );
}

export default About; 