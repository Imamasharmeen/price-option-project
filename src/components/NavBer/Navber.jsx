import Link from "./Link";
import { HiMenu } from "react-icons/hi";


export default function NavBar() {
    const routes = [
        { path: '/home', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/faq', name: 'FAQ', id: 5 }
    ];
    
  return (
    <nav>
        <HiMenu className="text-3xl"/>
        <ul className="flex gap-5 text-sm md:text-base lg:text-xl">
            {
                routes.map(route=>
                <Link key={route.id} route={route}></Link>)   
            }
            
      </ul>
    </nav>
  )
}
