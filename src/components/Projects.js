import React from 'react';
import './App.css'
import Project from './Project';
 
  /***********************
    Projects Component
   ***********************/
  
    const Projects = props => {
      return (
        <section id="projects">
          <div className="projects-container">
            <div className="heading">
              <h3 className="title">My Works</h3>
              <p className="separator" />
              <p className="subtitle">
                Here's a list of <u>most</u> of the projects I've been working on lately. All of these
                were built during my coding camp adventure on{' '}
                <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                  freeCodeCamp
                </a>
                , where I've been coding for almost 7 months non-stop until I completed all the projects
                required to get my Full-Stack Developer certification.
              </p>
            </div>
            <div className="projects-wrapper">
              <Project
                title="Anonymous Message Board."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg'}
                tech="js css react node"
                link="https://yagoestevez-anon-msg-board.glitch.me/"
                repo="https://github.com/yagoestevez/anonymous-message-board"
              >
                <small>
                  Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
                </small>
                <p>
                  This is a full-stack website that I made which lets the users read and post anonymous
                  messages and replies.
                </p>
              </Project>
              <Project
                title="Stock Price Checker."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg'}
                tech="js node css"
                link="https://yagoestevez-stock-price-checker.glitch.me/"
                repo="https://github.com/yagoestevez/fcc-stock-price-checker"
              >
                <small>
                  Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug.
                </small>
                <p>
                  Another full-stack website to check the current value of any requested stock in the
                  market.
                </p>
              </Project>
              <Project
                title="Personal Library."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/PersonalLibrary.jpg'}
                tech="js node css"
                link="https://yagoestevez-personal-library.glitch.me/"
                repo="https://github.com/yagoestevez/fcc-personal-library"
              >
                <small>Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug.</small>
                <p>
                  A full-stack website to store book titles and comments to each book into a remote
                  database.
                </p>
              </Project>
              <Project
                title="Issue Tracker."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/IssueTracker.jpg'}
                tech="js node css"
                link="https://yagoestevez-issue-tracker.glitch.me/"
                repo="https://github.com/yagoestevez/fcc-issue-tracker"
              >
                <small>Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug.</small>
                <p>Yet another full-stack app to save and manage technical issues to be fixed.</p>
              </Project>
              <Project
                title="Metric-Imperial Converter."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/MetricImperialConverter.jpg'}
                tech="js node css"
                link="https://yagoestevez-metric-imperial-converter.glitch.me/"
                repo="https://github.com/yagoestevez/fcc-metric-imperial-converter/"
              >
                <small>Built using Node, Express, JS + jQuery, CSS + Bootstrap and Pug.</small>
                <p>
                  Another full-stack for converting values from the Internation System of Units (Metric)
                  into the imperial units.
                </p>
              </Project>
              <Project
                title="URL Shortener Microservice."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Cortala.jpg'}
                tech="js node css"
                link="https://cortala.glitch.me/example"
                repo="https://github.com/yagoestevez/cortala"
              >
                <small>Built using Node, Express, CSS + Bootstrap and Pug.</small>
                <p>
                  A microservice which takes a raw URL and makes it a short link to make it easy to sent
                  it through the Internet.
                </p>
              </Project>
              <Project
                title="Exercise Tracker."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ExerciseTracker.jpg'}
                tech="js vue node css"
                link="https://yagoestevez-exercise-tracker.glitch.me"
                repo="https://github.com/yagoestevez/exercise-tracker"
              >
                <small>Built using Node, Express, VueJS + Vue Router and CSS + Bootstrap.</small>
                <p>
                  A service which lets the users save their daily exercise (or anything) into a log for
                  them to check it later.
                </p>
              </Project>
              <Project
                title="Bar Chart."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/BarChart.jpg'}
                tech="js d3 css"
                link="https://codepen.io/yagoestevez/full/wxjmrB/"
                repo="https://github.com/yagoestevez/fcc-barchart"
              >
                <small>Built using CSS, JS and D3.js.</small>
                <p>A bar chart representing the evolution of the US GDP.</p>
              </Project>
              <Project
                title="Treemap Diagram."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TreemapDiagram.jpg'}
                tech="js d3 css"
                link="https://codepen.io/yagoestevez/full/bjZygz/"
                repo="https://github.com/yagoestevez/fcc-treemap-diagram"
              >
                <small>Built using CSS, JS and D3.js.</small>
                <p>
                  A treemap diagram representing groups of pledges and sales from a particular category.
                </p>
              </Project>
              <Project
                title="Choropleth Map."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ChoroplethMap.jpg'}
                tech="js d3 css"
                link="https://codepen.io/yagoestevez/full/NBeaWK/"
                repo="https://github.com/yagoestevez/fcc-choropleth-map"
              >
                <small>Built using CSS, JS and D3.js.</small>
                <p>A choropleth map representing the educational attainment by county in the U.S.</p>
              </Project>
              <Project
                title="Random Quoting Machine."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/QuotingMachine.jpg'}
                tech="js vue css"
                link="https://codepen.io/yagoestevez/full/bxgEyd/"
                repo="https://github.com/yagoestevez/random-quoting-machine"
              >
                <small>Built using VueJS, Axios and CSS + Bootstrap.</small>
                <p>A random quoting app which retrieves pictures and quotes from two different APIs.</p>
              </Project>
              <Project
                title="Calculator."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Calculator.jpg'}
                tech="js react css"
                link="https://codepen.io/yagoestevez/full/ERVONM/"
                repo="https://github.com/yagoestevez/the-calcoolator"
              >
                <small>Built using React and CSS.</small>
                <p>A project on which I built a virtual calculator with its usual features.</p>
              </Project>
              <Project
                title="Pomodoro Timer."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TomateTimer.jpg'}
                tech="js react css"
                link="https://codepen.io/yagoestevez/full/dqJGVa"
                repo="https://github.com/yagoestevez/tomate-time"
              >
                <small>Built using React, CSS and lots of SVG.</small>
                <p>A cute and animated Pomodoro clock to help the users improve their productivity.</p>
              </Project>
              <Project
                title="TicTacToe Game."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TicTacToe.jpg'}
                tech="js react css"
                link="https://codepen.io/yagoestevez/full/KRevzB/"
                repo="https://github.com/yagoestevez/TicTacToe"
              >
                <small>Built using React, CSS and SVG.</small>
                <p>
                  A TicTacToe game with a basic AI algorithm made for the legacy front-end projects on
                  FreeCodeCamp.
                </p>
              </Project>
              <Project
                title="Twitch Clone."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Twitch.jpg'}
                tech="js vue sass"
                link="https://codepen.io/yagoestevez/full/xjwVPq/"
              >
                {/* repo="https://github.com/yagoestevez/TicTacToe"> */}
                <small>Built using VueJS, Axios and Scss.</small>
                <p>
                  Simple Twitch clone using the new Twitch Helix API and made for the legacy front-end
                  projects on FreeCodeCamp.
                </p>
              </Project>
              <Project
                title="Weather App."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/WeatherApp.jpg'}
                tech="js vue css"
                link="https://codepen.io/yagoestevez/full/zWbGmZ/"
              >
                {/* repo="https://github.com/yagoestevez/TicTacToe"> */}
                <small>Built using VueJS, Axios and CSS.</small>
                <p>App that present the users with the current local weather for their location.</p>
              </Project>
              <Project
                title="Tribute."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Tribute.jpg'}
                tech="js sass"
                link="https://codepen.io/yagoestevez/full/aaaOxL/"
                repo="https://github.com/yagoestevez/tribute-to-aaron-swartz"
              >
                <small>Built using vanilla Javascript and Scss.</small>
                <p>
                  Tribute page to Aaron Swartz, a static website built with SCSS and plain Javascript.
                </p>
              </Project>
              <Project
                title="Survey Form."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/SurveyForm.jpg'}
                tech="js sass"
                link="https://codepen.io/yagoestevez/full/bjVgjX/"
                repo="https://github.com/yagoestevez/membership-form"
              >
                <small>Built using vanilla Javascript and Scss.</small>
                <p>An animated survey form.</p>
              </Project>
              <Project
                title="Landing Page Example."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/LandingPage.jpg'}
                tech="js sass"
                link="https://codepen.io/yagoestevez/full/pOBLeK/"
                repo="https://github.com/yagoestevez/tomate-timer-landing-page"
              >
                <small>Built using vanilla Javascript and Scss.</small>
                <p>A landing page for the Pomodoro Timer I made (shown previously in this section).</p>
              </Project>
              <Project
                title="Technical Documentation Page."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Documentify.jpg'}
                tech="js react css"
                link="https://codepen.io/yagoestevez/full/QxOLKX/"
                repo="https://github.com/yagoestevez/documentify"
              >
                <small>Built using React and CSS.</small>
                <p>
                  A technical documentation page made for a little React library I published on NPM.
                </p>
              </Project>
            </div>
          </div>
        </section>
      );
    };
    
    

export default Projects;
