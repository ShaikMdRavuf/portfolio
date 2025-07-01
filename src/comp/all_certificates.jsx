 import React from 'react'
 import fullstack from '../img/fullstack.pdf'
 import intern from '../img/intern.pdf'
 import mernstack from '../img/mernstack .pdf'
 
 
 const all_certificates = () => {
   return (
     <div className='all-certificates'>
        <h1>My Certificates:</h1>
        <div className='certificate-info'>
            <h2>Mern Stack</h2>
            <div>
            <iframe src={mernstack} width="100%" height="600px" title="MERN Stack Certificate" ></iframe>
            </div>
        </div>
        <div className='certificate-info'>
            <h2>Mind Sparc</h2>
            <div>
            <iframe src={fullstack} width="100%" height="600px" title="MERN Stack Certificate" ></iframe>
            </div>
        </div>
        <div className='certificate-info'>
            <h2>Hacker rank</h2>
            <div>
            <iframe src={intern} width="100%" height="600px" title="MERN Stack Certificate" ></iframe>
            </div>
        </div>
        {/* <div className='certificate-info'>
            <h2>Hacker rank</h2>
            <div>
            <iframe src={fullstack} width="100%" height="600px" title="MERN Stack Certificate" ></iframe>
            </div>
        </div> */}
     </div>
   )
 }
 
 export default all_certificates