import React from 'react';

class VideoDetail extends React.Component {
   
    render() {
            const{myProp} = this.props;
        return (
            <div>
                {myProp.map(myProp => <div key={myProp.id} {...myProp}/>)}
                {myProp.length}
            </div>
        );
    }

}
export default VideoDetail; 