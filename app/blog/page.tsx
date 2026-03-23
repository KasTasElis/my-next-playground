import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Blog Index",
  description: "Check out all my posts.",
};

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
