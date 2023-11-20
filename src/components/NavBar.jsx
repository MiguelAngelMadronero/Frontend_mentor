import { useState } from 'react';
import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from  '../assets/images/icon-menu-close.svg'

export const NavBar = () => {

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick= ()=>{
    setMenuClicked(prevState => !prevState)
    
  }
  return (
    <>
     <ul className={`${menuClicked ? 'hidden' : ''} absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px] transition duration-1000 ease-in-out `}> {/*sm es la vista en pc */}
     <li className={`${menuClicked ? 'hidden' : ''}  cursor-pointer sm:hidden  flex place-content-end`}>
        <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="boton para cerrar" />
     </li>

      <li className='mb-8 sm:mb-0'>
        <a href="#" className='hover:text-SoftOrange '>Home</a>
      </li>
      <li className='mb-8 sm:mb-0'>
        <a href="#" className='hover:text-SoftOrange '>New</a>
      </li>
      <li className='mb-8 sm:mb-0'>
        <a href="#" className='hover:text-SoftOrange '>Popular</a>
      </li>
      <li className='mb-8 sm:mb-0'>
        <a href="#" className='hover:text-SoftOrange '>Trending</a>
      </li>
      <li className='mb-8 sm:mb-0'>
        <a href="#" className='hover:text-SoftOrange '>Categories</a>
      </li>
    </ul>
    <img className= {` ${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={burgerMenu} onClick={handleClick} alt="menu hamburguesa" />
    </>
  );
};


