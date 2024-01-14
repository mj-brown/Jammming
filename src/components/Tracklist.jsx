/* eslint-disable react/prop-types */
import Track from "./Track";

const Tracklist = (props) => {
    
    return (
        <div className="trackList">
            {props.tracks.map((track) =>{
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove} 
                    />
                );
            })};
        </div>
    );
};

export default Tracklist;