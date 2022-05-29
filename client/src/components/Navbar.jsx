import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../../images/logo.png'

function Navbar() {

    const [toggle, setToggle] = React.useState(false)

    return <nav className='w-full flex md:justify-evenly justify-between items-center p-4'>
        <div className='md:flex-[0.5] flex-initial justify-between items-center p-4 m-0'>
            <img src={logo} alt="Logo" className='w-32 cursor-pointer' />
        </div>
        <ul className='text-white md:flex hidden list-none flex-row ml-10 justify-between items-center'>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item) => {
                return <li className='px-3 py-2 mx-1'>
                    {item}
                </li>
            })}
            <li className='bg-[#0e4dd4] px-6 cursor-pointer transition duration-150 ease-linear ml-1 hover:bg-[#0b399c] py-3 rounded-full'>
                Login
            </li>
        </ul>
        <div className='flex relative'>
            {
                !toggle && <AiOutlineMenu className='text-white text-xl md:hidden cursor-pointer' onClick={() => setToggle(!toggle)} />
            }

            <ul className={`z-10 list-none fixed top-0 ${ toggle ? '-right-4' : '-right-[260px]'} w-[200px] text-right p-4 pr-6 shadow-2xl md:hidden blue-glassmorphism h-screen rounded-md transition duration-150 ease-in`}>
                <li className='text-white text-lg cursor-pointer pr-4 mb-2'>
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='bg-[#dd0000] w-[25px] h-[25px] p-1 font-bold rounded-full transition duration-150 ease-linear hover:bg-[#bb0000]' />
                </li>
                {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item) => {
                    return <li className='px-3 py-2 mx-1 text-white cursor-pointer'>
                        {item}
                    </li>
                })}
            </ul>
        </div>
    </nav>
}

export default Navbar
