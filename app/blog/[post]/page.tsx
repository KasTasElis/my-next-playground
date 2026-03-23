import { Metadata } from "next";

type Props = {
  params: Promise<{ post: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postName = (await params).post;

  return {
    title: postName,
    description: "Can read more info here.",
  };
}

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
