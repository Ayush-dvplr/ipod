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
      active_page: 'home'
    }
  }
  change_active = () => {
    const {active} = this.state;
    var elements = document.getElementsByClassName('menu_option');
    
    for(var i = 0; i < elements.length; i++){
      elements[i].style.backgroundColor = "white";
    }
    document.getElementById(active).style.backgroundColor = "aqua";
  }
  mount_once = true;
  componentDidMount(){
    if(this.mount_once){
      this.mount_once = false;
      console.log("mount");
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

  selectClick = () => {
    const {active} = this.state;
    this.setState({
      active_page: active
    })
    this.menuClick();
  }

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

  render(){
    const {menu_options,active,active_page} = this.state;
    
  return (
    <div className="App">
      <div className="ipod">
      <Screen page={active_page}/>
      <Controller
      
      selectMenu = {this.selectClick}
      handle_menu={this.menuClick}
      active={active}
      active_page={active_page}
      />
      </div>
    </div>
  );
}}

export default App;
