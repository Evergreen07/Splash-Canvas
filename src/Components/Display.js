import React,{ useState } from 'react'
import useFirestore from '../Hooks/useFirestore'
import Open from './Open';

const Display = ({text}) => {
    const[openImg, setOpen] = useState(null);
    const { docs } = useFirestore('photos');
    
    const filter = docs.filter((i) => {
        if(i.caption.toLowerCase().includes(text.toLowerCase())){
            return (i);
        }
    })

    return (
        <div className="display">
            {filter && filter.map((i) => (
                <div id="card" key={i.id}>
                    <div onClick={() => setOpen(i.url)}>
                        <img className="photo" variant="top" src={i.url} alt="Uploaded Image" />
                    </div>
                    
                    <div className="desc">
                        <h4 style={{fontFamily:'Patua One, cursive'}}>{i.caption}</h4>
                        <h6 style={{fontFamily:'Tinos, serif'}}> {i.description} </h6>
                    </div>
                </div>
            ))}
            {openImg && <Open openImg={openImg} setOpen={setOpen}/>}
        </div>
    )
}

export default Display
