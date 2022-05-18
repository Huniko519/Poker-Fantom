import React, {useEffect} from 'react';

function WinScreen(){

    useEffect(()=>{

    },[])

    const handleReplay = () =>{
        window.location.reload()
    }

    return(
        <div className = "x-loser-content">
            <div className = "x-winCup">
                <img src = "/assets/loseCup.jpg" alt = "winCup" style = {{width: "350px"}} />
            </div>
            <div className = "x-font2">
                Your Luck is bad for now!
            </div>
            <div className = "x-font1">
                You are loser in this game!
            </div>
            <div className = "x-replay">
                <button className = "x-connect-button" onClick = {handleReplay}>Let's try again!</button>
            </div>
        </div>
    )
}

export default WinScreen;