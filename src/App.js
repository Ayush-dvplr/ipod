import Controller from "./components/Controller";
import Screen from "./components/Screen";
import ZingTouch from 'zingtouch/src/ZingTouch.js'
import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menu_options: ["home","cover_flow","music","games","settings"],
      active: "home",
      menu: 1,
      active_page: 'home',
      playlist: [
        {
          img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png/220px-Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png',
          title: 'Closer',
          artist: 'Chainsmokers',
          featured: 'Halsey',
          album: 'Collage'

        },
        {
          img: 'https://www1.beatzjam.com/wp-content/uploads/2022/01/0-133.jpg',
          title: 'No Lie',
          artist: 'Sean Paul',
          featured: 'Dua Lipa',
          album: '538 Hitzone'

        },
        {
          img: 'https://a10.gaanacdn.com/images/albums/85/2065585/crop_480x480_2065585.jpg',
          title: 'F.R.I.E.N.D.S',
          artist: 'Anne-Marie',
          featured: 'Marshmello',
          album: 'Speak Your Mind'

        }
      ],
      musicIndex: 2,
      id: 0
    }
  }

/*using componentsismount and adding zingtouch in the controller*/

  mount_once = true;
  componentDidMount(){
    if(this.mount_once){
      this.mount_once = false;
      const {active,menu_options} = this.state;
      document.getElementById(active).style.backgroundColor = "aqua";
      var target = document.getElementById('controller');
      var region = new ZingTouch.Region(target);
      var prev_e = 0;
      var para = 0;
      var down = false;
      var up = false;
      region.bind(target, 'rotate', function(e) {
        para += e.detail.distanceFromLast;
        var ele = document.getElementById('menu');
        var str = ele.getAttribute('style');
        if(str==null){str=''};
        var res = str.search('block');
        
        if(res>=0){
        if(Math.floor(e.detail.distanceFromOrigin)%60>=0&&Math.floor(e.detail.distanceFromOrigin)%60<20){
          var current_e = e.detail.distanceFromOrigin;
          var diff = current_e - prev_e;
          if(diff>30){down = true;prev_e = current_e;}else if(diff<-30){up = true;prev_e = current_e;};

          
        }
        if(down){
        
        var index  = menu_options.indexOf(this.state.active);
        if(index+1==menu_options.length){index=0}else{index=index+1};
        var chg_active = menu_options[index];
        down = false;
        this.setState({
          active: chg_active
        },this.change_active);
      }
      if(up){
        
        var index  = menu_options.indexOf(this.state.active);
        if(index==0){index=menu_options.length-1}else{index=index-1};
        var chg_active = menu_options[index];
        up = false;
        this.setState({
          active: chg_active
        },this.change_active);
      }
    
    }}.bind(this));}
  }


/*menu page finctions */

/*changing the active state css of mneu options*/

change_active = () => {
  const {active} = this.state;
  var elements = document.getElementsByClassName('menu_option');
  
  for(var i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = "white";
  }
  document.getElementById(active).style.backgroundColor = "aqua";
}

/*on selecting a menu option*/

menuClick = () => {
  const {menu} = this.state;
  if(menu){
  document.getElementById('menu').style.display = "block";
  this.setState({
    menu: 0
  })
 }else{
   document.getElementById('menu').style.display = "none";
   this.setState({
     menu: 1
   })
  }

 
}

/*changing the active page*/

selectClick = () => {
  const {active} = this.state;
  this.setState({
    active_page: active
  })
  this.menuClick();
}


/*music page functions */

/*for pause and play the music option*/
width = 1;
countPlay = 0;

pausePlay = () => {
  if(this.state.active_page!='music'){return};
  var mybar = document.getElementById('progress_bar');
  var mTime = document.getElementById('musicTime');
  var timeValue = mTime.innerHTML;
  
  var min = timeValue[0]+timeValue[1];
  min = min - 0;
  var sec = timeValue[3]+timeValue[4];
  sec = sec - 0;
  var wid;
  var style = mybar.getAttribute('style');
  var runTime = min*60+sec;
  
  
  if(this.countPlay%2==0){
    if(style.length==11){
      wid=style[7];
    }else if(style.length==12){
      wid= style[7]+style[8]
    }else{
      wid= style[7]+style[8]+style[9]
    }
  wid = wid - 0;
  this.countPlay++;
  var id = setInterval(frame,500);
  this.setState({
    id: id
  });
  function frame(){
    if(wid >= 250){
      clearInterval(id);
    }else{
      wid++;
      this.width++;
      runTime++;
      min = Math.floor(runTime/60);
      sec = runTime%60;
      min = min.toString();
      sec = sec.toString();
      if(min.length==1){
        min = '0'+min;
      }
      if(sec.length==1){
        sec = '0'+sec;
      }
      mTime.innerHTML = min+':'+sec;
      mybar.style.width = wid+'px';

    }
  }
}else if(this.countPlay%2!=0){
  let id = this.state.id;
    clearInterval(id);
    this.countPlay++;
    this.setState({
      id: 0
    })
  }
}

prevSong = () => {
  if(this.state.active_page!='music'){return};
  const {musicIndex} = this.state;
  let index = musicIndex;
  let mybar = document.getElementById('progress_bar');
  let mTime = document.getElementById('musicTime');
  mTime.innerHTML = '00:00';
  mybar.style.width = 1+'px';
  if(index==0){index=2}else{index--};
  this.setState({
    musicIndex: index
  }
  );
  if(this.state.id!=0){
    clearInterval(this.state.id);
    this.countPlay=0;
    this.pausePlay();
  }

}

nxtSong = () => {
  if(this.state.active_page!='music'){return};
  const {musicIndex} = this.state;
  let index = musicIndex;
  let mybar = document.getElementById('progress_bar');
  let mTime = document.getElementById('musicTime');
  mTime.innerHTML = '00:00';
  mybar.style.width = 1+'px';
  if(index==2){index=0}else{index++};
  this.setState({
    musicIndex: index
  });
  if(this.state.id!=0){
    clearInterval(this.state.id);
    this.countPlay=0;
    this.pausePlay();
  }


}

/*rendering the app*/

  render(){
    const {musicIndex,active,active_page,playlist} = this.state;
    
  return (
    <div className="App">
      <div className="ipod">
      <Screen page={active_page}
        playlist={playlist}
        musicIndex={musicIndex}
      />
      <Controller
      pausePlay={this.pausePlay}
      selectMenu = {this.selectClick}
      handle_menu={this.menuClick}
      active={active}
      active_page={active_page}
      prevSong={this.prevSong}
      nxtSong = {this.nxtSong}
      />
      </div>
    </div>
  );
}}

export default App;
