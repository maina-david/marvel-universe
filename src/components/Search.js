import React, {useState} from 'react'


const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className="search mb-2">
            <form>
                <input type="text"
                className="form-control"
                placeholder="Find a character"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
            </form>
        </section>
    )
}

export default Search
