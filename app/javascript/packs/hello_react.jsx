// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

const node = document.getElementById('payload')
const url = JSON.parse(node.getAttribute('url'))

class App extends React.Component {

  componentWillMount() {
      console.log(url)
    this.videoRef = React.createRef()
  }

  seek = (seekTo = 0) => {
      // this.videoRef.current.currentTime = 7
    const nowTime = this.videoRef.current.currentTime
      this.videoRef.current.currentTime = nowTime + seekTo
  }

  play = () => {
    this.videoRef.current.play()
  }

  render() {
    return (
      <div>
        <video ref={this.videoRef} controls>
          <source src={url} type='video/mp4' />
        </video>
        <button onClick={ (e) => {this.seek(5)} }>+5</button>
        <button onClick={ (e) => {this.play()} }>Play</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('hello-react')
)
