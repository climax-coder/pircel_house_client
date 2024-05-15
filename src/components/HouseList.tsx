import React from 'react';
import Card from './card';

interface Trait {
    name: string
}

interface House {
    name: string;
    founder: string;
    animal: string;
    traits: Trait[];
}

interface HouseListProps {
    houses: House[];
}

const HouseList: React.FC<HouseListProps> = ({ houses }) => {
    return (
        <div>
            {houses.map((house: House, index: number) => (
                <Card key={index} house={house} />
            ))}
        </div>
    );
};

export default HouseList;