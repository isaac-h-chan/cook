import React from 'react'

const Navbar = ({ className } : { className: string }) => {
  return (
    <>
      <div className={className}>
        <div className="flex flex-col justify-between">
          <div>logo</div>
          <div>Navbar</div>
          <div>settings</div>
        </div>
      </div>
    </>
  )
}

export default Navbar