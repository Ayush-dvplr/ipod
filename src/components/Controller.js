import './css/Controller.css';

const Controller = (props) => {
    const {handle_menu,selectMenu,pausePlay,prevSong,nxtSong} = props;
    const menuCheck = () => {console.log('checking menu')};
    return(
        <div className='controller-wrapper'>
            <div className='controller' id='controller'>
            </div>
            <div draggable='false' className='cntr-menu cntr_btn  unselectable' onClick={handle_menu} >MENU</div>
            <div draggable='false'  className='play-nxt cntr_btn unselectable'><img src='https://cdn-icons-png.flaticon.com/128/1/1371.png' alt='play_nxt' onClick={nxtSong}/></div>
            <div draggable='false'  className='pause cntr_btn unselectable'><img src='https://cdn-icons-png.flaticon.com/128/64/64595.png' alt='pause' onClick={pausePlay}/></div>
            <div draggable='false'  className='prev cntr_btn unselectable'><img src='https://cdn-icons-png.flaticon.com/128/2/2147.png' alt='play_prev' onClick={prevSong}/></div>
            <div className='select-btn' onClick={selectMenu}></div>
        </div>
    )
}

export default Controller;