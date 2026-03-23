import Link from "next/link";

const posts = ["post-one", "post-two", "post-three"];

export default function Blog() {
  return (
    <div>
      <h3>This is the blog index:</h3>

      <ul>
        {posts.map((post) => (
          <li key={post}>
            <Link href={`/blog/${post}`}>{post}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
