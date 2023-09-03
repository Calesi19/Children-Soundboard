// Square Tile with an image and a name.

import React, { useRef, useEffect, useState }  from 'react';
import './Tile.css';
import { storage } from './database';
import { ref, getDownloadURL } from 'firebase/storage';

type TileProps = {
    name: string;
    image: string;
    soundPath: string;
};


const Tile: React.FC<TileProps> = ({ name, image, soundPath }) => {
    const [soundUrl, setSoundUrl] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const fetchSoundUrl = async () => {
            const soundRef = ref(storage, soundPath);

            try {
                const url = await getDownloadURL(soundRef);
                setSoundUrl(url);
            } catch (error) {
                console.error("Error fetching sound:", error);
            }
        };

        fetchSoundUrl();
    }, [soundPath]);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <button className="tile" onClick={playSound}>
            <img src={image} alt={name} />
            <div className="tile-name">{name}</div>
            {soundUrl && <audio ref={audioRef} src={soundUrl} preload="auto"></audio>}
        </button>
    );
};


export default Tile;
