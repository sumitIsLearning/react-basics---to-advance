import React, { useEffect } from "react";
import { Routes, Route, Link, NavLink, useNavigate, Outlet } from "react-router";

const App = () => {
  return (
    <div>
      {/* The layout component renders the layout of our application , layout are components that persist across all the pages or routes , they remain same as the content of the page changes and also the url */}
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="paisa" element= {<Video/>} />
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
};

function Home() {
  return (
    <div>
      <h2>This is the Home page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>This is about page</h2>
    </div>
  );
}

function Video() {
  return (
    <div className="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Tb3x5I0ulCg?si=SQ_U1PJiCdDsWq9N" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

function Contact() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/paisa");
  } // this will redirect the user to the about page when the user interact with the button

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     navigate("/");
  //   }, 5000);
  //   return () => {
  //     clearInterval(intervalId);
  //   }
  // },[navigate]) // this basically return you back to the home page after 5 seconds and clears the interval , similar to unsubscribing from a page (websocket terminology) but not same

  return (
    <div>
      <h2>This is Contact page</h2>
      <button onClick={redirect}>Suprise Redirect</button>
    </div>
  );
}

function Layout() {
  return(
    <div>
      <header>
      <Header />
      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <Footer />
      </footer>
      {/* The outlet component has all the children routes in it */}
       
    </div>
  )
}

function ErrorPage() {
  return(
    <div>
      <h2>404 NOT FOUND</h2>
    </div>
  )
}

function Header() {
  return (
    <nav>
      <NavLink to="/" className="active">
        Home
      </NavLink>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function Footer() {
  return(
    <div>
      <h3>This is Footer</h3>
    </div>
  )
}

export default App;
