import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'home.css';
var About = require('about.js');

function goToProjects() {
    ReactDOM.render(
    <About />,
    document.getElementById('content')
  );
}

function Home() {

    $('.active').removeClass('active');
    $('#homePage').addClass('active');

  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <img className={styles.homePhoto} src='/img/aruba.png' alt='aruba'/>
          <div className={styles.containerItem}>
            <img className={styles.profile} src='/img/profilePic.jpg' alt='profile'/>
            <h1 className={styles.name}>Craig Martin</h1>
            <button className={styles.learnMore} onClick={goToProjects}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Home;
