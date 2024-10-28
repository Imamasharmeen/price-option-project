import Link from "./Link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";


export default function NavBar() {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/home', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/faq', name: 'FAQ', id: 5 }
    ];

    const click =()=>{
        setOpen(!open)
    }
    
  return (
    <nav className=""> 
        <div className="bg-slate-700 text-stone-100 p-10 ">
            <div onClick = {()=>click()} className="text-3xl md:hidden ">
                {
                    open=== true? <IoIosCloseCircleOutline />:<HiMenu />
                }
            </div>
            
            <ul className={`text-sm md:text-base lg:text-xl gap-5 p-5   rounded-2xl absolute md:static md:flex duration-1000 bg-slate-700 
                ${open?'top-24':'-top-56'}`}>
                {
                    routes.map(route=>
                    <Link key={route.id} route={route}></Link>)   
                }
                
            </ul>
        </div>
    </nav>
  )
}

