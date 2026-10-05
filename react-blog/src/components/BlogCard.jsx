function BlogCard({ post }) {

    return (
        <div className="blog-card">

            <span className="category">
                {post.category}
            </span>

            <h3>{post.title}</h3>

            <p>
                {post.description}
            </p>

            <div className="post-info">
                <span>{post.author}</span>
                <span>{post.date}</span>
            </div>

            <button>
                Read More
            </button>

        </div>
    );
}

export default BlogCard;