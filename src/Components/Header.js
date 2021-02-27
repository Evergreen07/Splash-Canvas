import React, { useState,useEffect } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({setText}) => {
    // const { docs } = useFirestore('photos');

    const handleText = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div className="nav">
                <div href="#home" className="my-2 pt-2 navhead" style={{fontSize:'28px', fontFamily:'Volkhov, serif'}}><i className="fas fa-leaf"></i>&ensp;<span style={{color:'cyan'}}>S</span>plash <span style={{color:'cyan'}}>C</span>anvas</div>
                
                <div className="navsearch">
                    <Form inline>
                        <FormControl type="text" placeholder=" &#xF002; Search" className="mr-sm-2"  onChange={handleText}/>
                    </Form>
                </div>   
            </div>
        </div>
    )
}

export default Header
