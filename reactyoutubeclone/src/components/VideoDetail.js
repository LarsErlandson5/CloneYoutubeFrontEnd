import React from 'react';

class VideoDetail extends React.Component {
   
    render() {
            const{myProp} = this.props;
        return (
            <div>
                {myProp}
            </div>
        );
    }

}
export default VideoDetail; 