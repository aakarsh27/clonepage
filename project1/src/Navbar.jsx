
function Navbar(){
    return(
        <div>
            <nav className="container">
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="nike logo"/>
                </div>
                    <ul>
                        <li>MENU</li>
                        <li>LOCATION</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                    <button>Login</button>
            </nav>
        </div>

    );
}

export default Navbar