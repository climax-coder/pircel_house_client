import React from 'react';
import ClipLoader from "react-spinners/BeatLoader";


const Spinner: React.FC = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', marginTop:50}}>
            <ClipLoader
                aria-label="Loading Spinner"
                data-testid="loader"
              />
        </div>
    );
};

export default Spinner;