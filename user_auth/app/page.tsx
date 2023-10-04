import Link from "next/link";
import { getItem } from "./utils/getAllPosts";

async function getData() {
  const res = await fetch("https://api.agify.io?name=michael");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  const item = await getItem();
  console.log("data: ", data);
  console.log("item: ", item);
  return (
    <>
      <h1>Hello, {data.name ? data.name : "nextjs"}</h1>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
