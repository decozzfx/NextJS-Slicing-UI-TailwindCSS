import Nav from "./Nav";
import Button from "./Button";
import Logo from './Logo';
import { useState } from "react";
import classNames from "classnames";

const Navbar = () => {
  const [offCanvas, setOffCanvas] = useState(false)
  const ref = () => {
    setOffCanvas(false)
  }
    return (
      <>
        <div className="flex items-center py-10">
            <div className="w-3/12 ">
              <Logo/>
            </div>
            <div className="w-6/12 hidden md:block">
              <Nav dir='horizontal' scheme='light'/>
            </div>
            <div className="w-3/12 text-right hidden md:block">
                <Button href='#contacts' pill variant='outline-yellow'>Contact</Button>              
            </div>
            <div className="w-9/12 text-right md:hidden">
              <img src="/menu.svg" className="inline-block" onClick={() => setOffCanvas(true)}/>
            </div>
          </div>
          
          <div className={classNames("fixed bg-black opacity-50 z-10 top-0 h-full w-full p-10 md:p-0 md:hidden", offCanvas ? 'right-0' : '-right-full' )} onClick={() => setOffCanvas(false)}>
          </div>
              <div className={classNames("fixed bg-white z-10 top-0 h-full w-7/12 p-10 md:p-0 md:hidden bg-hero transition-all", offCanvas ? 'right-0' : '-right-full' )} onClick={() => setOffCanvas(false)}>
              <img src="/close.svg" className="absolute top-8 right-8 w-10" onClick={() => setOffCanvas(false)}/>
                <Nav
                scheme='light' 
                dir='vertical'            
                />
              </div>
          
      </>
    )
}

export default Navbar
