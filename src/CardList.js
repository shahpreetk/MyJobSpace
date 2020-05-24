import React from 'react';
import Cards from './Card';

const CardList = ({resourceslink}) => {
    return ! resourceslink.length ? 
        <h1>Resource Not Found</h1>
    : (
        <div>
        {resourceslink.map((card,i)=>{
            return (
                <Cards 
                key={i} 
                id={resourceslink[i].id} 
                name={resourceslink[i].name} 
                description={resourceslink[i].description} 
                validity={resourceslink[i].validity} 
                link={resourceslink[i].link} 
                category={resourceslink[i].category} 
                />
            );
        })
    }
        </div>
    );
} 
export default CardList;