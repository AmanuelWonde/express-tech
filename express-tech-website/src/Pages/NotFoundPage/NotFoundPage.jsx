import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(){
        return <div className="py-80 bg-[#122a46]">
            <p className='text-center text-white'>
              <h1 className='pb-5 text-2xl'>404 Page not found</h1>
              <Link to="/" className="p-2 rounded-lg bg-blue-600  text-xl">Go to Home </Link>
            </p>
          </div>
    }

export default NotFoundPage;