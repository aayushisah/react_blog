const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>(aa)yu go for it!</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#0592f7',
            borderRadius: '8px' 
          }}>New Blog</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;