const Navbar = () => {
    const NavComponent = ({name})=>(
        <div className="nav-component">{name}</div>
    );
    return (
        <div className="navbar">
            <NavComponent name="Home"/>
            <NavComponent name="About"/>
            <NavComponent name="Contact"/>
        </div>
    );
}

export default Navbar;