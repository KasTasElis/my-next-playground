export default async function Post(props: PageProps<"/blog/[post]">) {
  const { post } = await props.params;

  return (
    <div>
      <h3>This is the Post Page - {post}</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis
        eveniet eius odio reprehenderit ad consequatur tenetur sequi doloremque,
        recusandae, cumque incidunt unde cum animi obcaecati iste aliquid quas
        minima!
      </p>
    </div>
  );
}
