/* eslint-disable react/prop-types */
import { useCallback } from 'react';

const Track = (props) => {
    const addTrack = useCallback(
        () => {
            props.onAdd(props.track);
        }, [props]
    );

    const removeTrack = useCallback(
        () => {
            props.onRemove(props.track);
        }, [props]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className='trackAction' onClick={removeTrack}>-</button>
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