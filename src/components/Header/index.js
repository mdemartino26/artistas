import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const sayHi = 'Hi'
    const name = 'Mike'
    
    const [categories, setCaregories] =useState([])

    useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await axios.get('https://artists-api.vercel.app/artists');
            console.log(response.data);
            const data = response.data
            const cats = data.map(category=> category.genre)
            
            const catsUnrepeated = new set(cats);
            const catsArray = [...catsUnrepeated];
            
            setCategories(catsArray)
        }catch(error){
            console.error(error);
        }}
        fetchData()
    },[])
    
    const handleCategorySelect = (event) => {
        console.log(event.target.value)
        PaymentResponse.history.push(`/category/${event.target.value}`)
    }

   
    return (
        <header className="App-header">
            <div>{`${sayHi} ${name}!`}</div>
            <div>
                <Link to="/">Home</Link>
                <select name="cat" 
                onChange={handleCategorySelect}
                >
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
        </header>
    )
}

export default withRouter(Header)