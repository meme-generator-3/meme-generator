import React, {useEffect, useState} from 'react'
import CreateMeme from './CreateMeme'


const Meme = () => {

    const [memes, setMemes] =useState([])
    const [memeIndex, setMemeIndex] = useState(0);
    const [caption, setCaption] = useState([]);
    const [values, setValues] = useState('');
    const [showNewMeme, setShowNewMeme] = useState(false)

    // creates a random meme ouput when api loads and when refresh button is clicked
    const handleRandomMeme = (memes) => {
        for (let i = memes.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = memes[i];
          memes[i] = memes[j];
          memes[j] = temp;
        }
      };

      // handle input event get the value from inputs
   
     const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    console.log(values.first)
// making a new meme and showing component on click 
    const handleMakeMeme = e =>{
      e.preventDefault();
      setShowNewMeme({...showNewMeme, showNewMeme: true})
      
    }

//api call to fetch memes 
   useEffect(() => {
       fetch ('https://api.imgflip.com/get_memes').then(res => res.json().then(res => {
           const memetemplate = res.data.memes;
           handleRandomMeme(memetemplate) //makes it so its not the same meme popping up every time
           setMemes(memetemplate)

       }))
       
   }, [])

   //creates and array of empty strings based on the box count for the current meme, in order to render the correct amount of text inputs for the caption form (top text, bottom text) some mems have more than two
    useEffect(() => {
        if(memes.length) {
           setCaption( Array(memes[memeIndex].box_count).fill(''));
        }
       
        
    }, [memes, memeIndex])

           
    // memes.length ? = checking to see if memes are being pulled from API 
    return (
        memes.length ? 
     
        <div>
          <input  placeholder='use your words' 
          name="first" 
          value={values.name} 
          onChange={handleInputChange}></input> 
          <input  placeholder='use your words' name="second" 
          value={values.name} 
          onChange={handleInputChange}></input>
            <img 
                src={memes[memeIndex].url} 
                alt={memes.name} />
            <button 
                onClick={() =>setMemeIndex(memeIndex +1)}
                className='refresh-button'>Refresh Meme Image 
            </button>
            <button 
                 className='make-meme-button'
                 onClick={handleMakeMeme}
                 >Make This Meme</button>
            {showNewMeme ? <CreateMeme firstVal={values.first} secondVal={values.second} img={memes[memeIndex].url} /> : null}
            
        </div> :
         <></>



            
        

    )
}

export default Meme
