import React from 'react';
import Headerbottom from './headerBottom';
 import Headertop from './headerTop';

import Navbar from '../Nav/navbar';


function header () {
    return (
        <div style={{backgroundColor:'#F2F2F2'}}>
          <Navbar/>

          <Headertop/>
          
          <Headerbottom/>
          
        </div>
    )
}


export default header;