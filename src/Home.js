import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Hello', body: 'lorem ipsum...', author: 'aayushi', id: 1 },
    { title: 'Coming soon ...', body: 'lorem ipsum...', author: 'aayushi', id: 2 },
    { title: 'Coming soon ...', body: 'lorem ipsum...', author: 'aayushi', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;