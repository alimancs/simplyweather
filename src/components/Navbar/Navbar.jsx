import "./Navbar.css";

function Navbar() {
    return (
        <div id='navbox'>
            <div className='nav-sub-box' id='s1'>
                <span id='l1'>Simply</span>
                <span id='l2'>Weather</span>
            </div>
            <form className='nav-sub-box' id='s2'>
                <input id='searchbox' placeholder="Type here....." type="text"></input>
                <button id='search' >Search</button>
            </form>
        </div>
    )
}

export default Navbar;