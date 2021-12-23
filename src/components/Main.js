import React from 'react'

function Main() {
    return (
        <div className='main'>
                <div className='mainContent'>
                    <div className='punkHighlight'>
                        <div className='punkContainer'>

                            <img className='selectedPunk'
                         src={ activePunk.image_original_url}></img>
                        </div>
                    
                    </div>
                        <div className='punkDetails' style={{color: '#f5f6fa'}}>
                                <div className='title'>
                                    {activePunk.name}
                                    </div>
                                <span className='itemNumber'></span>                      
                    </div>

                </div >

        </div>
    )
}

export default Main
