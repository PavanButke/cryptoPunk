import React, { useEffect  , useState} from 'react'
import Punklist from './Punklist'
import './Main.css'

const Main = ({ selectedPunk , punkListData}) =>{

    const [activePunk , setActivePunk] = useState(punkListData[0])

    useEffect(
        () => {
            setActivePunk(punkListData[selectedPunk])
        }, [punkListData , selectedPunk])

    return (
        <div className='main'>
                <div className='mainContent'>
                    <div className='punkHighlight'>
                        <div className='punkContainer'>

                            <img className='selectedPunk'
                             src={activePunk.image_original_url} 
                         ></img>
                        </div>
                    
                    </div>
                        <div className='punkDetails' style={{color: '#f5f6fa'}}>
                                <div className='title'  >
                              {activePunk.name}
                                    </div>
                                <span className='itemNumber'>.#{activePunk.token_id}</span>                      
                    </div>

                    <div  className='owner'>
                        <div className='ownerImageContainer'>
                            <img 
                            src={ 
                            
                                activePunk.owner.profile_img_url
                                
                            }
                            ></img>
                        </div>

                        <div className='ownerDetails'></div>
                        <div className='ownerNameAndHandle' >
                            <div className='ownerUID'>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@Pavan</div>
                        </div>

                        <div class="container">
                                <a href="" class="icon">
                                    <i class="facebook fab fa-facebook-f"></i>
                                </a>
                                <a href="" class="icon">
                                    <i class="twitter fab fa-twitter"></i>
                                </a>
                                <a href="" class="icon">
                                    <i class="instagram fab fa-instagram"></i>
                                </a>
                                <a href="" class="icon">
                                    <i class="google fab fa-google"></i>
                                </a>
                                <a href="" class="icon">
                                    <i class="linkedin fab fa-linkedin"></i>
                                </a>
                        </div>




                    </div>  


                </div >

        </div>
    )
}

export default Main
