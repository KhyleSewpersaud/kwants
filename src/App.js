import './App.css'

const App = () => {
  return ( 
    <div className='site-container'>
      <div className='header-container'>
        <h1 className='header'>**kwants</h1>
      </div>
      

      <div className='category'>
        <h2 className='category-name'>Clothes</h2>
        <div className='item-carousel'>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
      </div>

      <div className='category'>
        <h2 className='category-name'>Skincare</h2>
        <div className='item-carousel'>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
      </div>

      <button className=''>Add Wishlist</button>

    </div>
  );
}

export default App;
