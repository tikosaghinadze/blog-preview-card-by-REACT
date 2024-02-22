
import Illustration from "./assets/images/illustration-article.svg";
import Person from "./assets/images/image-avatar.webp";
function App() {
  return (
    <>
      <img
        className="illustration-img"
        src={Illustration}
        alt="illustration article"
      />
      <button className="learning-btn">Learning</button>
      <span className="published-data">Published 21 Dec 2023</span>
      <h1>HTML & CSS foundations</h1>
      <p className="description">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="person-info">
        <img
          style={{ width: "32px", height: "32px" }}
          src={Person}
          alt="person profile image"
        />
        <span style={{ fontSize: "14px", fontWeight: "800" }}>Greg Hooper</span>
      </div>
    </>
  );
}

export default App;
