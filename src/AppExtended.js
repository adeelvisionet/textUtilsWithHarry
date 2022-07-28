import './AppExtended.css';

function AppExtended() {
  return (
    <>
      <div className="blankClass">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Adipisci voluptatem magnam consequuntur. 
        Magni deserunt, excepturi hic temporibus tempore facere. 
        Voluptatibus quas, possimus earum corrupti optio sequi iure ipsa officiis odio. 
        Consectetur temporibus aspernatur veniam?
      </div>
      <NavBar />
      <div className="blankClass">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Adipisci voluptatem magnam consequuntur. 
        Magni deserunt, excepturi hic temporibus tempore facere. 
        Voluptatibus quas, possimus earum corrupti optio sequi iure ipsa officiis odio. 
        Consectetur temporibus aspernatur veniam?
      </div>
    </>
    
  );
}
//Way to break down jsx into small pieces, inside single file,

function NavBar() {
  return (
    <ul className='navgationClass' >
    <li>Home...</li>
    <li>About...</li>
    <li>Custom Matters...</li>
    <li>Contact...</li>
  </ul>
  );
}

export default App;
