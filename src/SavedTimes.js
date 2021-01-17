import React, {useState} from 'react';


const SavedTimes = ({time_data, title_data, clickCallback}) =>{
const[items,setItems] = useState([]);

const saveItem = (item) =>
{
    item = time_data + " " + title_data
    if (title_data === ""){
        return;
    }
   
    setItems([...items, item]);
    clickCallback();
};
    return (    
    <div className="SavedTimes">
        
        <div className ="ListButtons">
            <button className = "ListButton" onClick={()=>saveItem()}>Save</button>
            <button className = "ListButton" onClick={()=>setItems([])}>Clear List</button> 
            
        </div>
        <h1>Saved Times</h1>
       <div>
            <span className ="ListPlaceholder">{items.length === 0 && <p>No times saved! (give time a title to save!)</p>}</span>
            <ul className = "ListItems" name = "ListOfTimes">
                {items.map((item, index)=> {
                    return <li key = {index}>{item}</li>;
                })}
            </ul>
        </div>
    </div>)
}

export default SavedTimes