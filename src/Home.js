import { useState, useEffect } from "react";

function Home({ userDetails }) {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const result = await response.json();
      setData(result.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/search?q=${searchValue}`);
      const result = await response.json();
      setFilteredPosts(result.posts);
    } catch (error) {
      console.error("Error searching posts:", error);
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: 'green' }}>Blog Post Website</h2>
      <div style={{ backgroundColor: 'lightgreen' }}>
        Hello, {userDetails.name} <br /> Your email is: {userDetails.email}
      </div>

      <div style={{ backgroundColor: 'lightblue' }}>
        <input
          type='text'
          placeholder='Search for a post...'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {filteredPosts.length > 0 ? (
          <div>
            <h3>Search Results</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map(post => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No posts found with this search term.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
