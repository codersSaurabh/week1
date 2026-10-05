import { useState } from "react";
import posts from "./data/posts.json";

import BlogList from "./components/BlogList";

import "./App.css";

function App() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(posts.map(post => post.category))
    ];

    const filteredPosts = posts.filter((post) => {

        const matchesSearch =
            post.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            post.category === category;

        return matchesSearch && matchesCategory;
    });

    return (

        <>

            {/* Navbar */}

            <nav className="navbar">

                <h2>Saurabh<span>.blog</span></h2>

                <div>
                    Home
                    &nbsp;&nbsp;
                    About
                </div>

            </nav>


            {/* Hero */}

            <section className="hero">

                <h1>
                    Developer Blog
                </h1>

                <p>
                    Articles about React, JavaScript,
                    backend and web development.
                </p>

            </section>


            {/* Search & Filter */}

            <section className="controls">

                <input
                    type="text"
                    placeholder="Search posts..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />


                <select
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                >

                    {categories.map((cat) => (

                        <option
                            key={cat}
                            value={cat}
                        >
                            {cat}
                        </option>

                    ))}

                </select>

            </section>


            {/* Blog Posts */}

            <main>

                <h2 className="section-title">
                    Latest Posts
                </h2>

                {filteredPosts.length > 0 ? (

                    <BlogList posts={filteredPosts} />

                ) : (

                    <p className="no-result">
                        No posts found.
                    </p>

                )}

            </main>

        </>
    );
}

export default App;