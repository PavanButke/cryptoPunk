import React from 'react'
import Punklist from './Punklist'
import './Main.css'

function Main() {
    return (
        <div className='main'>
                <div className='mainContent'>
                    <div className='punkHighlight'>
                        <div className='punkContainer'>

                            <img className='selectedPunk'
                         src='https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'></img>
                        </div>
                    
                    </div>
                        <div className='punkDetails' style={{color: '#f5f6fa'}}>
                                <div className='title'  >
                                    NoDeep Punk
                                    </div>
                                <span className='itemNumber'>.#3</span>                      
                    </div>

                    <div  className='owner'>
                        <div className='ownerImageContainer'>
                            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQExWPxut0K3pA/profile-displayphoto-shrink_200_200/0/1613138028550?e=1645660800&v=beta&t=cqKQmIzPuyFm4S9gkY38h4xI8oA-IpamL1ks-2YKvGk' ></img>
                        </div>

                        <div className='ownerDetails'></div>
                        <div className='ownerNameAndHandle' >
                            <div>0x7aa3b7500eB82405D5128D29b73C57423B97bB0a</div>
                            <div className='ownerHandle'>@cleverprogrammer</div>
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
