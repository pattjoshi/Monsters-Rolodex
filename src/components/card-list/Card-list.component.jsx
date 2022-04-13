import React from 'react';
import './card-list.styles.css'
import { Card } from './card/card'


// functonal component
export const CardList = props => (
    <div className='card-list'>


        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}

    </div>

)










// Props :- props take a para meter
// Props are arguments passed into React components.
// gota component ra data r gota component rea dikha ba k props use he c

// children :- children are  what ue passing between bracket