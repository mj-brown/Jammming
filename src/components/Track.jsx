import React, { useCallback } from 'react';

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        }, [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        }, [props.onRemove, props.track]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className='trackAction' onclick={removeTrack}>-</button>
            );
        }
        return (
            <button className='trackAction' onClick={addTrack}>+</button>
        );
    };

    return (
        <div className='track'>
            <div className='trackInformation'>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;