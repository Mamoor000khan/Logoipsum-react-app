import React from 'react';
import Headerbottom from './headerBottom';
 import Headertop from './headerTop';

import Navbar from '../Nav/navbar';


function header () {
    return (
        <div >
          <Navbar/>

          <Headertop/>

          <Headerbottom/>
          
        </div>
    )
}


export default header;