import React from "react";
import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script async src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      </Head>

      <header className="container mx-auto max-w-3xl lg:max-w-5xl">
        <Nav />
      </header>

      <main className="container mx-auto max-w-3xl lg:max-w-5xl flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
