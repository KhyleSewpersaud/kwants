const Category = ({name}) => {
    return (
        <div className='category'>
            <h2 className='category-name'>{name}</h2>
            <div className='item-carousel'>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
            </div>
      </div>
    )
}

export default Category;