import React, { useState } from 'react';
import Home from './home';
import PlayMode from './playmode';
import PreplayMode from './preplaymode';

function Index(){
    const [available, setAvailable] = useState(false);
    const [preAvailable, setPreAvailable] = useState(false);
    return(
    <div className="App">
        <div className='poker-table--wrapper'> 
          { 
            (!available&&!preAvailable) ? <Home setAvailable = {setAvailable} setPreAvailable = {setPreAvailable}/> : 
            (available) ?
            <PlayMode />:
            (preAvailable)?
            <PreplayMode />:
            null
          }
        </div>
    </div>
    )
}

export default Index;