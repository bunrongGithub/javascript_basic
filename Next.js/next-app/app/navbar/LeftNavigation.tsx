import Link from "next/link";
import { navbars } from "./navItem";
type LeftNavigationProps = {
    toggle?: true | false;
}

export const LeftNavigation:React.FC<LeftNavigationProps> = ({toggle}) =>{
    return (
        <>
            <div 
                className={` ${toggle ? "flex right-0 " : 'right-[-700px]'} 
                    transition-all lg:hidden flex-col gap-5 w-1/2 
                    text-center absolute top-auto  
                    p-6 shadow-sm lg:px-8 h-[300px] bg-blue-500`
                }>
                {
                    navbars?.map((item,index) =>(
                        <Link key={index} className={item?.class} href={item?.href}>{item?.name}</Link>
                    ))
                }
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/login" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </div>
        </>
    )
}