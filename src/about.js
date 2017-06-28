import 'bootstrap-css';
import 'about.css';

function About() {

    $('.active').removeClass('active');
    $('#aboutPage').addClass('active');

  return (
    <div>
      <h1 className='about'>About Me</h1>
      <hr/>
      <p className='about'>Let me start by saying hello, and welcome to my site!
      My name is Craig Martin, and I am here to provide you with a summary of who I am and what I am about.
      So without further ado, let's get to it.
      Cheers!</p>

      <div className='container-fluid'>
        <div className='row aboutRow'>
          <div className='col-md-8'>
            <h4 className='question'>Why Become a Developer?</h4>
            <p className='answer'>There are a number of reasons why. I have always enjoyed writing code.
            I find it both challenging and rewarding.
            For me, being a developer is not much different than being an engineer.
            Engineers are always looking for ways to improve their product or process,
            much like developers who want to improve their websites or applications.
            They dig into the root cause of problems, propose a solution, and test to make sure that the problem is solved.
            They work with both internal and external customers to ensure that all specifications are met.
            And they often must solve complex problems and deliver a solution that is both simple and effective.
            Yes, both can be frustrating at times, but that's what makes finding the solution much more rewarding.</p>
          </div>
        </div>
        <div className='row aboutRow'>
          <div className='col-md-8'>
            <h4 className='question'>Online Learning</h4>
            <p className='answer'>All of my learning has been through online resources.
            I have found the following to be the most useful during my personal learning process.
            </p>
            <ul>
              <li><a href='https://www.codecademy.com/learn'>Codeacademy.com</a></li>
              <li><a href='https://www.bitfountain.io'>Bitfountain.io</a></li>
              <li>Udemy
                <ul>
                  <li><a href='https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview'>React Native and Redux</a></li>
                  <li><a href='https://www.udemy.com/react-native-advanced/learn/v4/overview'>Advanced React Native</a></li>
                  <li><a href='https://www.udemy.com/the-complete-web-developer-course-2/learn/v4/overview'>Complete Web Developer Course</a></li>
                </ul>
              </li>
              <li><a href='https://www.w3schools.com'>w3schools.com</a></li>
              <li><a href='https://facebook.github.io/react/'>Facebook's React Docs</a></li>
              <li><a href='https://webpack.js.org'>Webpack's Docs</a></li>
              <li><a href='http://stackoverflow.com'>StackOverflow</a></li>
            </ul>
          </div>
        </div>
        <div className='row aboutRow'>
          <div className='col-md-4'>
            <h4 className='question'>Are you married?</h4>
            <p className='answer'>I have been happily married since 2015</p>
          </div>
          <div className='col-md-4'>
            <img className='pics' src='https://images.pexels.com/photos/17834/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb'/>
          </div>
        </div>
        <div className='row aboutRow'>
          <div className='col-md-4'>
            <img className='pics' src='https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?h=350&auto=compress&cs=tinysrgb'/>
          </div>
          <div className='col-md-4'>
            <h4 className='question'>Do you have any kids?</h4>
            <p className='answer'>Sort of. We have three furry children: Two dogs and a horse.
            We hope to someday have less furry kids, but not right now.
            </p>
          </div>
        </div>
        <div className='row aboutRow'>
          <div className='col-md-4'>
            <h4 className='question'>What do you do in your free time?</h4>
            <p className='answer'>I stay pretty busy. I play ice hockey year round in a men's league with some friends and I am always in the middle of a home remodeling project.
            In the summertime, I enjoy hiking, kayaking, golfing, going on walks with the dogs, and doing yard work (yes, I actually do enjoy yard work).
            In the winter, other than staying warm, its pretty much working out, walking the dogs, and playing hockey.
            I also enjoy playing video games and binge watching Netflix if I just need time to zone out.
            </p>
          </div>
          <div className='col-md-4'>
            <img className='pics' src='https://images.pexels.com/photos/282547/pexels-photo-282547.jpeg?h=350&auto=compress&cs=tinysrgb'/>
          </div>
        </div>
      <div className='row aboutRow'>
          <div className='col-md-4'>
            <img className='pics' src='https://images.pexels.com/photos/189243/pexels-photo-189243.jpeg?h=350&auto=compress&cs=tinysrgb'/>
          </div>
          <div className='col-md-4'>
            <h4 className='question'>Where do you live?</h4>
            <p className='answer'>We live in New Hampshire about a half an hour from the coast and are centrally located between Portland, Maine and Boston, MA</p>
          </div>
      </div>
        <div className='row aboutRow'>
          <div className='col-md-4'>
            <h4 className='question'>Favorite vacation spot?</h4>
            <p className='answer'>Riviera Maya, Mexico. Our favorite resort is the Valentin Imperial Maya.</p>
          </div>
          <div className='col-md-4'>
            <img className='pics' src='https://images.pexels.com/photos/261411/pexels-photo-261411.jpeg?h=350&auto=compress&cs=tinysrgb'/>
          </div>
      </div>
            <div className='row aboutRow'>
          <div className='col-md-4'>
            <img className='pics hockeyLogo' src='/img/squad.jpg'/>
          </div>
          <div className='col-md-4'>
            <h4 className='question'>Sports</h4>
            <p className='answer'>I am the type of person that would rather get out and play a sport instead of watch it.
            I grew up playing ice hockey, golf, baseball, and soccer, but stick to just two sports now; golf and hockey.
             I play in a men's league on Thursday nights throughout the year with <a href='http://www.squadhockey.com'>The Squad</a>.
             I also play in the annual Pond Hockey Classic at Lake Winnipesaukee on the Mounted Reinbeers.</p>
          </div>
      </div>
    </div>
  </div>
  )
}

module.exports = About;
