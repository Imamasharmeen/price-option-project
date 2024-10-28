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
    <nav>
        <div onClick = {()=>click()} className="text-3xl">
            {
                open=== true? <IoIosCloseCircleOutline />:<HiMenu />
            }
        </div>
        
        <ul className="flex gap-5 text-sm md:text-base lg:text-xl">
            {
                routes.map(route=>
                <Link key={route.id} route={route}></Link>)   
            }
            
      </ul>
    </nav>
  )
}
