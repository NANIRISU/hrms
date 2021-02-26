import React from 'react';

 function Avatar({srcUrl="https://reqres.in/img/faces/7-image.jpg"}) {
  return (
    <div className="avatar">
    <img className="image" src={srcUrl} alt={"user Image"}/>
    </div>
  );
}
export default Avatar;