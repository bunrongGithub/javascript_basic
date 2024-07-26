import { useState } from "react"


export const useToggle = (init = false) => {

    const [isOpen,setIsOpen] = useState<boolean>(init);
    const onToggle = ():void =>{
        setIsOpen(!isOpen);
    }
    return [isOpen , {onToggle}]
}