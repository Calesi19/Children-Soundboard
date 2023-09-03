import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import Tile from './Tile';
import './Grid.css';
import { db } from './database';


type TileProps = {
    name: string;
    image: string;
    soundPath: string;
};

type GridProps = {
    type: string;
};

const Grid: React.FC<GridProps> = ({ type }) => {
    const [items, setItems] = useState<TileProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const colRef = collection(db, type);
                const snapshot = await getDocs(colRef);
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                });
                const fetchedItems: TileProps[] = snapshot.docs.map(doc => ({
                    name: doc.data().name,
                    image: doc.data().image,
                    soundPath: doc.data().soundPath
                }));
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching data from Firestore:", error);
            }
        };
        

        fetchData();
    }, [type]);
    // Return a title and a grid of tiles.
    return (
        <>
        <h1 className={type}>{type.toUpperCase()}</h1>
            <div className={"grid " + type} >
            {items.map((item, index) => (
                <Tile key={index} name={item.name} image={item.image} soundPath={item.soundPath} />
            ))}
        </div>
        </>
        
    );
};

export default Grid;
