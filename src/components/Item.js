const Item = ({title, img, price}) => {
    return (
        <div className='item'>
            <h3>{title}</h3>
            <img src={img}/>
            <h3>{price}</h3>
        </div>
    );
}

export default Item;