import React from 'react';
import ReactDOM from 'react-dom';
import card from 'bootstrap-css';
import styles from '../css/projects.css';

//Projects page

function Project(props) {
    const pcjband = {
        name: "Pace Car Joe",
        url: "www.pcjband.com",
        img: "/img/pacecar.jpg",
        description: "My friend reached out looking for help with his band's website. I set him up with a Wordpress site that he is able to manage and maintain on his own. The project provided me with my first look at Wordpress and the user friendly admin dashboard."
    };

    const dailyem = {
        name: "Daily Em",
        url: "www.dailyem.com",
        img: "/img/dailyem.jpg",
        description: "DailyEm.com is my wife's blog created to provide readers with fitness ideas/motivation, new and exciting recipes, and funny stories about our two dogs."
    };

    $('.active').removeClass('active');
    $('#projectPage').addClass('active');

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='card'>
                        <div className='card-block'>
                            <h3 className='card-title'>{dailyem.name}</h3>
                            <p>{dailyem.url}</p>
                            <img src={dailyem.img} className='card-img'/>
                            <div className={styles.textContainer}>
                              <p className='card-text'>{dailyem.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card'>
                        <div className='card-block'>
                            <h3 className='card-title'>{pcjband.name}</h3>
                            <p>{pcjband.url}</p>
                            <img className='card-img' src={pcjband.img}/>
                            <div className={styles.textContainer}>
                              <p className='card-text'>{pcjband.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Project;
