"use client";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import SpellList from "@/components/SpellList/SpellList";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="page">
      <Navbar className="page__nav" />
      <div className="page__scrollWrapper">
        <Header className="page__header" />

        <main className="page__main">
          <SpellList />
        </main>
        <Footer className="page__footer" />
      </div>
    </div>
  );
}
