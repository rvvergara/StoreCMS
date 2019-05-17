import React from 'react'

const navbar = () => {
    return(
        <nav>
            <span className='logo'>BookStore CMS</span>
            <span className='books'>Books</span>
            <span className='books'>Categories</span>
            <div className="avatar">
                <div className="face"></div>
            </div>
        </nav>
    )
}
export default navbar;