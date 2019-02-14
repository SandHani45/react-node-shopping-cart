import React from 'react';
import UiCard from '../UiCard';

const UiCardBlock = (props) => {

    const renderCards = () =>(
        props.list ?
            props.list.map((card,i)=>(
                <UiCard
                    key={i}
                    {...card}
                    
                />
                // <div>sfasf</div>
            ))
        :null
    )

    return (
        <div className="card_block">
            <div className="container">
                {
                    props.title ?
                        <div className="title">
                            {props.title}
                        </div>
                    :null
                }
                <div style={{
                    display:'flex',
                    flexWrap:'wrap'
                }}>
                    { renderCards(props.list)}
                </div>

            </div>
        </div>
    );
};

export default UiCardBlock;