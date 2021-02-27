import React,{useEffect, useState} from 'react'
import { ProgressBar, Alert} from 'react-bootstrap'
import useStorage from '../Hooks/useStorage'

const ProgBar = ({file, cap, desc, setOkay, setShow, setPop}) => {
    const[success, setSuccess] = useState(false);
    const {url, progress} = useStorage(file,cap,desc);

    useEffect(() => {
       if(url){
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            setOkay(false);
            setShow(false);
            setPop(false);
          }, 1500);
       }
    }, [url]);

    return (
        <div>
            <ProgressBar animated now={progress} style={{width:'100%', marginTop:'10px'}}/>
            {success && <Alert variant={'success'} style={{width:'100%', marginTop:'10px'}}>Successfully Added !!!</Alert>}
        </div>
    )
}

export default ProgBar
