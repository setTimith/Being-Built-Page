import "./page.css";
import bg from "../../public/julien-moreau-688Fna1pwOQ-unsplash.jpg";

export default function Home() {
  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="shader"></div>
      <div className="contentDiv">
        <h1>Company Title </h1>
        <p>Currently being Built out</p>
        <p>Contact Info</p>
        <p>Currently being Built out</p>
      </div>
    </div>
  );
}
