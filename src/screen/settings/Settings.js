import React from 'react';
import Header from '../../component/header/Header';
import authenticate from '../../hoc/authentication';

 function Settings() {
  return (
    < div className="settings">
      <Header pageHeader="Settings"/>
    
    </ div>
  );
}
export default authenticate(Settings);