/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import Tracklist from './Tracklist';

const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        }, [props]
    );
    
    return (
        <div className='playlist'>
            <input onChange={handleNameChange} defaultValue={'New Playlist'} />
            <Tracklist 
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemoval={props.onRemove}
            />
            <button className='playlistSave' onClick={props.onSave}>Save To Spotify</button>
        </div>
    );
};

export default Playlist;