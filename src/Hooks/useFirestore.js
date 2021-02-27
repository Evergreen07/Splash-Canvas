import {useEffect, useState} from 'react'
import { splashFire } from '../Firebase/config'

const useFirestore = (collection) => {
    const[docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = splashFire.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=>{
            let document = [];
            snap.forEach(doc => {
                document.push({...doc.data(), id : doc.id})
            });
            setDocs(document);
        }) //OnSnapshot fires a callback function every time a change occurs, also fires first time

        return () => unsub;
    }, [collection])

    return { docs }
}

export default useFirestore