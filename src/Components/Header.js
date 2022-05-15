import { IoAdd } from 'react-icons/io5'


function Header(props) {
    return (
        <header>
            <h2>My Tasks</h2>
            <button onClick={props.handleClick}>{ props.show ? <span className='close'>X</span> : <IoAdd className="fa add" /> }</button>
        </header>
    )
}

export default Header
