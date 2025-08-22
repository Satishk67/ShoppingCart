import { useEffect, useState } from "react";
import Card from './Card'


const Display = () => {
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const API_URL = "https://fakestoreapi.com/products";

    async function fetchItem(){
        setLoading(true);
        try{
            const response = await fetch(API_URL);
            const res = await response.json();
            console.log(res);

            setItems(res);
        }
        catch(err){
            console.log(`Error in fetching -> ${err}`)
        }
        finally{
            setLoading(false);
        }
    }

    // fetchItem();
    useEffect(() => {
        fetchItem();
    },[])

    return (
        <div className="display">
            {
                loading ? <p>Loading...</p> : 
                items.length === 0 ? <p>No Item to display</p> : 
                items.map( (item) => (
                    <Card key={item.id} details={item}/>
                ))
            }
        </div>
    )
}

export default Display