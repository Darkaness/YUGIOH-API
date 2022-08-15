import React, {useState, useEffect} from 'react'

const SearchComponent = () => {

  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")


  const URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data.data)
  }   

  const searcher = (e) => {
      setSearch(e.target.value)   
  }
 
   const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  

  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-table text-white'>
                    <th>id</th>
                    <th>NAME</th>
                    <th>TYPE</th>
                    <th>DESC</th>
                    <th>RACE</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.type}</td>
                        <td>{user.desc}</td>
                        <td>{user.race}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SearchComponent