import React, {useEffect} from 'react';
import Axios from 'axios';

function WinScreen(){

    const handleReplay = () =>{
        window.location.reload();
    }

    return(
        <div>
            <div className = "x-winCup">
                <img src = "/assets/winCup.png" alt = "winCup" style = {{width: "300px"}} />
            </div>
            <div className = "x-font2">
                Congratulations!
            </div>
            <div className = "x-font1">
                You are Winner in this game!
            </div>
            <div className = "x-replay">
                <button className = "x-connect-button" onClick = {handleReplay}>Replay</button>
            </div>
        </div>
    )
}

export default WinScreen;