import 'bootstrap-css';
import 'about.css';

function About() {

    $('.active').removeClass('active');
    $('#aboutPage').addClass('active');

  return (
    <div>
      <h1 className='about'>About Me</h1>
      <hr/>
      <p className='about'>My name is Craig Martin and I have put together this website to both highlight and practice my coding skills as I set out to become a developer. It is my hope to update this website with new information and new projects as my comfort and skill level improve. Until then, enjoy the quick introduction about my personal and professional life. Feel free to reach out with any additional questions or inquires. Cheers!</p>
      <div className='container-fluid'>
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
            <p className='answer'>Sort of. We have three furry children: Two dogs and a horse. We hope to someday have less furry kids, but not right now.</p>
          </div>
        </div>
        <div className='row aboutRow'>
          <div className='col-md-4'>
            <h4 className='question'>What do you do in your free time?</h4>
            <p className='answer'>I stay pretty busy. I play ice hockey year round in a men's league with some friends and I am always in the middle of a home remodeling project. In the summertime, I enjoy hiking, kayaking, golfing, going on walks with the dogs, and doing yard work (yes, I actually do enjoy yard work). In the winter, other than staying warm, its pretty much working out, walking the dogs, and playing hockey. I also enjoy playing video games and binge watching Netflix if I just need time to zone out.</p>
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
            <img className='pics' src='https://images.pexels.com/photos/2424/food-restaurant-summer-nuts.jpg?h=350&auto=compress&cs=tinysrgb'/>
          </div>
          <div className='col-md-4'>
            <h4 className='question'>Chocolate or Vanilla?</h4>
            <p className='answer'>Is both an option?</p>
          </div>
      </div>
    </div>
  </div>
  )
}

module.exports = About;
