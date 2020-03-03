import React, { Component } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';
import VideoData from './VideoCard';

class App extends Component {

  state={
    videoList:[],
    showLoader:true
  }

componentDidMount(){
  Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
  .then((response)=>{
      this.setState({videoList:[...response.data], showLoader:false })
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
      <h1>Video List</h1>
      {/* {videoCards} */}
      {this.state.showLoader ? <h1>Loading...</h1> : videoCards }

    </div>
  );

}

 
}

export default App;
