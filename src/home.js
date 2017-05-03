import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'personal-website.css';

function Home() {
  return(
    <div className={styles.view}>
      <img className={styles.coverPhoto} src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/303489_10150846826758933_1815786744_n.jpg?oh=d5e16bee7559a64af6979b0ade0547e5&oe=5985E5D3'/>
      <div className={styles.containerInfo}>
        <div className={styles.containerItem}>
          <h1 className={styles.name}>Craig Martin</h1>
        </div>
        <div className={styles.containerItem}>
          <p className={styles.lead}>Engineer Looking to Become a Developer</p>
        </div>
        <div className={styles.containerItem}>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

module.exports = Home;
