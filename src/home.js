function Home() {
  return(
    <div className='container'>
      <img className='coverphoto' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/303489_10150846826758933_1815786744_n.jpg?oh=d5e16bee7559a64af6979b0ade0547e5&oe=5985E5D3'/>
      <div className='container-info'>
        <h1 className='display-3'>Craig Martin</h1>
        <p className='lead'>Engineer Looking to Become a Developer</p>
        <button className='learnMore'>Learn More</button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Home />,
  document.getElementById('content')
);
