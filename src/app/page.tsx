'use client';

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Accordion } from "./components/Accordium";


export default function Home() {


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header logo="Headless" />



      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
      <Banner/>

      <Accordion/>
      </main>



      {/* Footer */}
      <Footer
        logo="Headless"
      />
    </div>
  );
}