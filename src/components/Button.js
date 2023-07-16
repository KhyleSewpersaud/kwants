const Button = ({name, className}) => {
    return (
        <div className='button-div'>
            <button className={className}>{name}</button>
        </div>
    );

}

export default Button;