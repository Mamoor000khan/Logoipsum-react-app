import React from 'react';
import Headerbottom from './headerbottom';
import Headertop from './headertop';

import Navbar from './navbar';


function header () {
    return (
        <div>
          <Navbar/>
          <Headertop/>
          <Headerbottom/>
        </div>
    )
}


export default header;