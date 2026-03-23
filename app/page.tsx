import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next Playground",
  description: "Can do whatever I want here.",
};

export default function Home() {
  return (
    <div>
      <p>Hello Root Page</p>
    </div>
  );
}
