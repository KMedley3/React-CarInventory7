import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }
  return (
    <nav className='flex items-center justify-between flex-wrap bg-red-600 p-10'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link to='/' className='font-semibold text-xl text-rose-950 tracking-tight hover:text-white'>Car Stock</Link>
      </div>
      <div className='block'>
        <button
            onClick={dropDown}
            className="flex items px-3 py-2 text-rose-950 border-rounded border-rose-950
                         hover:text-white hover:border-rose-950">
            <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      { isVisible ? (
        <div className='w-full block flex-grow items-center'>
            <div className="text-sm lg:flex-grow">
                <Button className='p-3 m-5 bg-rose-950 justify-center rounded'>
                    <div>
                        <Link to='/' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-white hover:text-white mr-4'>
                            Home
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-rose-950 justify-center rounded '>
                    <div>
                        <Link to='/Dashboard' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-white hover:text-white mr-4'>
                            Car Dashboard
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-rose-950 justify-center rounded'>
                    <div>
                        <Link to='/contact' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-white hover:text-white mr-4'>
                            Contact
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-rose-950 justify-center rounded'>
                    <div>
                        <Link to='/about' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-white hover:text-white mr-4'>
                            About
                        </Link>
                    </div>
                </Button>
            </div>
        </div>
      ) : (
        <></>
    )}
    </nav>
  )
}

export default Navbar
