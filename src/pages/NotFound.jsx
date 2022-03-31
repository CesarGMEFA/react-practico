import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
  return (
    <section className='section-404'>
      <div className='center'>
        <p className='center-error'>Error</p>
        <p className='center-404'>
          404 <span className='center-span'>:(</span>
        </p>
        
      </div>
    </section>
  );
};

export { NotFound };