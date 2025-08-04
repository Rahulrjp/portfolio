import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex justify-center items-center py-4 bg-slate-900'>
                <p className='text-white text-sm'>
                    &copy; {new Date().getFullYear()} Rahul. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer