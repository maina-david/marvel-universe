import React , {useEffect,useState} from 'react'
import CharacterTable from '../components/CharacterTable'
import axios from 'axios'
import Search from '../components/Search'

//This was generated from md5 of ts + public key + private key
const hash =  "cd5333d40f22751601356bd98ddd2774"

const Characters = () => {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
      const fetch = async()=>{
        if(query===''){
          // checking if favorites array is empty or does not exist
          if(localStorage.getItem('favorites')==='[]' || !localStorage.getItem('favorites')){
            localStorage.setItem('favorites', '[]')
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9447362098e6ff19b448e4f2996f9fe3&hash=${hash}`)
            console.log(result.data.data.results)
            setItems(result.data.data.results)
            setLoading(false) 
          }else{
            let favorite = JSON.parse(localStorage.getItem('favorites'))
            setItems(favorite)
            setLoading(false)
          }
          
          
        }else{
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=9447362098e6ff19b448e4f2996f9fe3&hash=${hash}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }
      
    }

    fetch()
  },[query])

  return (
        <>
          <div className="content">
            <Search search={(q)=>setQuery(q)}></Search>
            <CharacterTable items={items} isLoading={isLoading} />
          </div>
        </>
  );
}
export default Characters;