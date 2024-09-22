import { useEffect } from "react";
import { useState } from "react";
import { key } from "./assets/key";
import Imagecard from "./components/Imagecard";
import Imagesearch from "./components/Imagesearch";

function App() {
  const [images, setimages] = useState([]);
  const [isloading, setloading] = useState(true);
  const [term, setterm] = useState("");

  useEffect(() => {
    fetchdata();
  }, [term]);
  const fetchdata = async () => {
    const data = await fetch(
      `https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&pretty=true`
    );
    const json = await data.json();
    console.log(json);
    setimages(json.hits);
    setloading(false);
  };

  return (
    <>
      <div className="container mx-auto">
      <Imagesearch search={text=>setterm(text)}/>
        {
          !isloading && images.length===0 && <h1 className="text-6xl text-center mx-auto mt-32">Images not found.....</h1>
        }
        {isloading?<h1 className="text-6xl text-center mx-auto mt-32">Loading.....</h1>:<div className="grid grid-cols-4 gap-4">
          {images.map((img) => (
            <Imagecard key={img.id} image={img} />
          ))}
        </div>}
        
      </div>
      
    </>
  );
}

export default App;
