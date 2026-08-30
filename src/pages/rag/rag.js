
import {useState} from 'react'

function Rag(){
    const [output,setOutput] = useState();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setOutput(e.target.value)
    }

    return (
        <div>

        <div> rag page</div>
        <input type='file' placeholder='Upload your document' onChange={(e)=>{handleSubmit(e)}}/>

        {output && <div> {output}</div>}
        </div>

    )       

}

export default Rag;