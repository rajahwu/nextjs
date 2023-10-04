"use client"

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1>Dashboard</h1>
      <button type="button" onClick={() => router.push("/")}>
        Home
      </button>
    </>
  );
}
