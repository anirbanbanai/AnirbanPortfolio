"use client";

import ButttomNavbar from "@/components/page/ButttomNavbar";
import Navbar from "@/components/page/Navbar";
import NewsLatter from "@/components/page/NewsLatter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ButttomNavbar/>
      <NewsLatter/>
    </main>
  );
}
