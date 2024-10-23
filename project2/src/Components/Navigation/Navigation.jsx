import styles from "./Navigation.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`} >
        <div className="logo">
            <img src="/images/logo.png" alt="logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar