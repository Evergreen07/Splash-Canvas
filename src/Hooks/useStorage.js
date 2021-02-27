import {useEffect, useState} from 'react'
import {splashStorage, splashFire, splashTime} from '../Firebase/config'

const useStorage = (file,cap,desc) => {
    const[progress, setProgress] = useState(0);
    const[error, setError] = useState(null);
    const[url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = splashStorage.ref(file.name);
        const collectionRef = splashFire.collection("photos");

        storageRef.put(file).on('state_changed', (snapshot) =>{
            let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = splashTime();
            collectionRef.add({ url: url, createdAt: createdAt, caption : cap, description : desc});
            setUrl(url);
        })
    }, [file]);

    return { progress, error, url}
}

export default useStorage

