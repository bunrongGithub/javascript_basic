import { useState } from "react"

const Group = () => {
    const [x,setX] = useState(0);
    const [y,setY] =  useState(0);
    const [position,setPosition] = useState({x: 0,y: 0});
  return (
    <div
        onPointerMove={ event => {
            setPosition({x: event.clientX, y: event.clientY})
        }}
        style={{position: 'relative',width: '100vw',height: '100vh'}}
    >
        <div style={{ position: 'absolute',backgroundColor: 'red',borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
      }}></div>
    </div>
  )
}

export default Group