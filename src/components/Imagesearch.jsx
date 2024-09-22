import { useState } from "react"

const Imagesearch=({search})=>{
    const[text,settext]=useState('')
    const submit=(e)=>{
        e.preventDefault();
        search(text);

    }
    return(

        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form action=""className="w-full max-w-sm" onSubmit={submit}>
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input type="text" 
                    onChange={e=>(settext(e.target.value))}
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Search image term..."
                    />
                    <button 
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit">
                    
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Imagesearch;
