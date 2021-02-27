import React from 'react'

const Open = ({openImg, setOpen}) => {
    const handleClose = (e) => {
        if(e.target.classList.contains('ImgModal')){
            setOpen(null);
        }
    }
    return (
        <div className="ImgModal" onClick={handleClose}>
           <img src={openImg} alt="Large Image"/>
        </div>
    )
}

export default Open
