import React, {useState, useEffect} from 'react';
import Route from './router';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './App.css';
import './Poker.css';

function App(){

  const [flag, setFlag] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(()=>{
    async function func(){
      if(flag){
        setFlag(false)
        if (window.ethereum) {
          window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
          });
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          console.log(chainId);
          if(chainId==="0xfa")
          setOpen(false);
          else
          setOpen(true);
        }
      }
    }
    func();
  }
  )

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return(
      <React.Fragment>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
          <DialogTitle id="alert-dialog-slide-title">{"chain error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Please set your chain to Fantom chain
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Route />
      </React.Fragment>
  )
}

export default App;