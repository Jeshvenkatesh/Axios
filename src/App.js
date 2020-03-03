import React, { Component } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';
import VideoData from './VideoCard';

class App extends Component {

  state={
    videoList:[]
  }

componentDidMount(){
  Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
  .then((response)=>{
      this.setState({videoList:[...response.data]})
  })
  .catch((err)=>{

  })

}

render(){

  const videoCards= this.state.videoList.map((item,pos)=>{

    return(
      <VideoData videoThumb={item.thumbnail} videoTitle={item.title} key={pos}/>
    )
         
  })

  return (

    <div>
      {videoCards}

    </div>
  );

}

 
}

export default App;
