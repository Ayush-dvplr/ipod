
import './css/Menu.css'

const Menu = (props) => {
    const {active} = props;
   
    
    return(
       
        <div className='menu' id='menu'>
            <h3>ipod</h3>
            <div id='mySelect'>
                <div id="home" className='menu_option' >Home</div>
                <div id="cover_flow" className='menu_option'>Cover Flow</div>
                <div id="music" className='menu_option' >Music</div>
                <div id="games" className='menu_option'>Games</div>
                <div id="settings" className='menu_option'>Settings</div>
            </div>
        </div>
    
    )
};



export default Menu;