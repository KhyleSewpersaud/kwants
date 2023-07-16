import Item from './Item'
import axios from 'axios'
import { useState } from 'react';
import { saveAs } from 'file-saver'
const api_key = process.env.REACT_APP_API_KEY;

const Category = ({name}) => {

    const [inputText, setInputText] = useState('');

    const handleButtonClick = () => {
        console.log(`https://api.rainforestapi.com/request?api_key=${api_key}&amazon_domain=amazon.com&asin=${inputText}&type=product`)
        axios.get(`https://api.rainforestapi.com/request?api_key=${api_key}&amazon_domain=amazon.com&asin=${inputText}&type=product`)
            .then(response => {
                const data = response.data;
                console.log(data)
                return axios.post('http://localhost:3001/clothes', data);
                
        }).catch (error => {
            console.log(error)
        })
      }



    const handleNoteChange = (event) => {
        setInputText(event.target.value);
    } 

    return (
        <div className='category'>
            <h2 className='category-name'>{name}</h2>
            <div className='item-carousel'>
                <Item title='f' img='https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' price={'$250'}/>
                <Item/> 
                <Item/>
            </div>

            <div className='form-container'>
                <form>
                    <input type='text' name='item-url' placeholder='ASIN' className='item-field' value={inputText} onChange={handleNoteChange}></input>
                    <input type='submit' value='Add Item' className='add-item' onClick={handleButtonClick}></input>
                </form>
            </div>

      </div>
    )
}

export default Category;