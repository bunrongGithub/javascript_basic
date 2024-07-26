import { useEffect, useState } from "react"
interface Props {
    x: number;
    y: number
}
const UpdateObject = () => {
    const [x , setX] = useState<number>(0);
    const [position,setPosition] = useState<Props>({x: 0, y: 0})
    position.x = 5;
    useEffect(()=>{
        setX(10)
    },[]);
  return (
    <div onPointerMove={ e => {
        setPosition({x: e.clientX,y: e.clientY})
    }}   
    style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>{x}</div>
  )
}

export default UpdateObject