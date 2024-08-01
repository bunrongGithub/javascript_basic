import { sculptureList } from "./data"

const Gallery = () => {
    let index = 0;
    function handleClick(){
        index = index + 1;
    }
    let sculpture = sculptureList[index];
  return (
    <div>
        <button onClick={handleClick}>Next</button>
        <h2>
            <i>{sculpture.name}</i>by 
            {sculpture.artist}
        </h2>
    </div>
  )
}

export default Gallery