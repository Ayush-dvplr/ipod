import './Music.css'

const Music = () => {
    return(
        <div className='music-page'>
            <div className='music-info'>
                <div className='music-img'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png/220px-Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png'/>
                </div>
                <div className='music-abt'>
                    <h3>Closer</h3>
                    <div>
                        <div className='music-abt-info'>Artist: Chainsmokers</div>
                        <div className='music-abt-info'>Featured: Halsey</div>
                        <div className='music-abt-info'>Album: Collage</div>
                    </div>
                    
                </div>
            </div>
            <div className='media-progress'>
                <div class="progress-bar-wrapper progress">
                <div class="progress-bar">
                </div>
                </div>
            <div className='milli'>
            <div class="progress-time-current milli">
                15:23
            </div>
            <div class="progress-time-total milli">
              34:40
            </div>
            </div>
        </div>
        
        </div>
    )
}

export default Music;