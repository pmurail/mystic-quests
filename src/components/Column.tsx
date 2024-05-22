import React from 'react';
import CardComponent from './CardComponent';

const Column: React.FC = () => {
    return (
        <div>
            <CardComponent title="Carte" image="https://source.unsplash.com/random/200x200?map" />
            <CardComponent title="Personnages" image="https://source.unsplash.com/random/200x200?person" />
            <CardComponent title="Scénario" image="https://source.unsplash.com/random/200x200?story" />
            <CardComponent title="Équipements" image="https://source.unsplash.com/random/200x200?equipment" onClick={() => alert('Équipements clicked')} />
        </div>
    );
};

export default Column;
