import './css/Music.css'

const Music = (props) => {
    const {playlist,musicIndex} = props;
    let index = musicIndex;

    return(
        <div className='music-page'>
            <div className='music-info'>
                <div className='music-img'>
                    <img src={playlist[index].img}/>
                </div>
                <div className='music-abt'>
                    <h3>{playlist[index].title}</h3>
                    <div>
                        <div className='music-abt-info'>Artist: {playlist[index].artist}</div>
                        <div className='music-abt-info'>Featured: {playlist[index].featured}</div>
                        <div className='music-abt-info'>Album: {playlist[index].album}</div>
                    </div>
                    
                </div>
            </div>
            <div className='media-progress'>
                <div className="progress-bar-wrapper progress">
                <div className="progress-bar" id='progress_bar' style={{width: '1px'}}>
                </div>
                </div>
            <div className='milli'>
            <div className="progress-time-current milli" id='musicTime'>
                00:00
            </div>
            <div className="progress-time-total milli">
              04:09
            </div>
            </div>
        </div>
        
        </div>
    )
}

export default Music;