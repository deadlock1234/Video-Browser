import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'



class App extends Component {

  componentDidMount(){
    this.onTermSubmit('buildings');
  }
  state={videos:[],SelectedVideo:null};
 onTermSubmit=async (term)=>{
   const response=await youtube.get('/search',{
    params:{
      q:term
    }
     });
    
   this.setState({videos:response.data.items,
   SelectedVideo:response.data.items[0]})
 


 }

 OnSelectedVideo=(video)=>{
   this.setState({SelectedVideo:video});

   
 }
 
  render() {
    return <div className="ui container" >
      <SearchBar onTermSubmit={this.onTermSubmit} />
      <div className='ui grid'>
     <div className='ui row'>
    <div className='eleven wide column' > <VideoDetail video={this.state.SelectedVideo}/></div>
      
       <div className='five wide column'><VideoList  OnSelectedVideo={this.OnSelectedVideo} videos={this.state.videos}/>
       </div>
       </div>
       </div>
    </div>
}
}

export default App;
