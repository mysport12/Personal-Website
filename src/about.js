import React from 'react'
import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'

class Social extends React.Component {
  render() {
    return (
        <Iframe url="https://www.instagram.com/craiggers89/"
        width="450px"
        height="450px"
        display="initial"
        position="relative"
        allowFullScreen/>
    )
  }
};

ReactDOM.render(
  <Social />,
  document.getElementById('root')
);