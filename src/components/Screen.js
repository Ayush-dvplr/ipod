import './css/Screen.css'
import Menu from './Menu';
import Settings from './Settings';
import Game from './Game';
import Home from './Home';
import Cover_flow from './Cover_flow';
import Music from './Music';

const Screen = (props) => {
    
    const {page,playlist,musicIndex} = props;
    return ( <div className="screen">
        <Menu/>
        {page=="home"?<Home/>:""}
        {page=="cover_flow"?<Cover_flow/>:""}
        {page=="music"?<Music playlist={playlist} musicIndex={musicIndex}/>:""}
        {page=="games"?<Game/>:""}
        {page=="settings"?<Settings/>:""}
    </div>)
}

export default Screen;

