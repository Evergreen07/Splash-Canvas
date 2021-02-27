import React,{useState} from 'react'
import { Modal, Button, Form, Card, Alert} from "react-bootstrap";
import ProgBar from './ProgBar'
import "bootstrap/dist/css/bootstrap.css";

const Popup = ({setPop}) => {
    const [show, setShow] = useState(true);
    const [cap, setCap] = useState('Caption');
    const [desc, setDesc] = useState('Here goes the card description to create awesome memories.');
    const [img, setImg] = useState(null);
    const [err, setError] = useState(null);
    const [okay, setOkay] = useState(false);

    const types = ['image/jpeg','image/png'];

    const handleUpload = (e) => {
        console.log('uploaded');
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setError(null);
            setImg(selected);
        } else{
            setError('Please select image file(PNG/JPEG only)');
            setTimeout(() => {
                setError('');
            },2000);
        }
    }

    const handleClose = () => {
        setShow(false);
        setPop(false);
    }

    const handleOkay = () => {
        if(img){
            setOkay(true);
        } 
    }

    
    return (
        <>        
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>

            <Card>
                <Card.Body>
                    <Form autoComplete="off">
                        <Form.Group>
                            <Form.Label>Add Caption</Form.Label>
                            <Form.Control type="text" onChange={(e)=> setCap(e.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Add Description</Form.Label>
                            <Form.Control type="text" onChange={(e)=> setDesc(e.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" onChange={handleUpload}/>
                        </Form.Group>
                        <Button onClick={handleOkay}>Splash It</Button>
                    </Form>
                    <div>
                        {err && <Alert variant={'danger'} style={{width:'100%', marginTop:'10px'}}>{err}</Alert>}
                        {okay && <ProgBar file={img} cap={cap} desc={desc} setOkay={setOkay} setShow={setShow} setPop={setPop}/>}
                    </div>
                </Card.Body>
            </Card>

            </Modal>
        </>
    )
}

export default Popup
