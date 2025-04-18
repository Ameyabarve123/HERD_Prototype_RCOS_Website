import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Footer from "./assets/footer";
import Main from "./assets/Main";
import About from "./pages/About";
import AboutCard from "./assets/aboutCard";
import Chat from "./pages/Chat";


import "./App.css";

function App() {
  const ameyaText = "Developed the aggregator model using LangChain and Hugging Face's Transformer Library. Also responsible for developing the frontend of this website.";
  const samText = "Developed the expert cluster using IMOS and PyTorch."
  const ryanText = "Developed the routing model, which is responsible for routing the user query to the expert cluster.";
  const xiaoText = "Professor leading this research Project."
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <div className="title">
                <img id="titleImg" src="/titleBg.png" alt="Title" />
              </div>
              {/* stores the content of this page */}
              <div className="content">
                <h1>Contributors</h1>
                <div class="aboutCardContainerMain">
                  {/* Creates 4 cards with a picture of contributor, along with a short description of what the contributor does */}
                  <AboutCard
                    imageSrc="/Xiao-Yang Liu.jpg"
                    name="Xiao-Yang Liu"
                    contentText={xiaoText}
                    linkedIn ="https://www.linkedin.com/in/xiao-yang-liu-47b72827/"
                  />

                  <AboutCard
                    imageSrc="/ameyaBarveImg.jpg"
                    name="Ameya Barve"
                    contentText={ameyaText}
                    linkedIn ="https://www.linkedin.com/in/ameyabarve1/"
                  />
                  
                  <AboutCard
                    imageSrc="/samGarnettImg.jpg"
                    name="Samuel Garnett"
                    contentText={samText}
                    linkedIn ="https://www.linkedin.com/in/samuel-garnett-25a547273/"
                  />

                  <AboutCard
                    imageSrc="/ryanLeeImg.jpg"
                    name="Ryan Lee"
                    contentText={ryanText}
                    linkedIn ="https://www.linkedin.com/in/ryan-lee100/"
                  />
                </div>
              </div>
            </Main>
          }
        />
        {/* Nav bar links  */}
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        {/* Commented out sigin for now, but have plans to implement it later */}
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
