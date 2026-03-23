"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    title: "Home",
    url: "",
  },
  {
    title: "Blog",
    url: "blog",
  },
  {
    title: "Pokemon",
    url: "pokemon",
  },
];

export default function ExampleClientComponent() {
  const pathname = usePathname();

  return (
    <nav>
      {/* <p className="p-5 bg-indigo-500">Current pathname: {pathname}</p> */}
      <ul className="flex gap-5 justify-center">
        {routes.map((route) => (
          <li key={route.url}>
            <Link
              className={clsx("underline", {
                "text-yellow-500": route.url === pathname.split("/")[1],
              })}
              href={"/" + route.url}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
