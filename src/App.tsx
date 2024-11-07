import "./App.css";
import { PDFEditArea } from "./PDFEditArea";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ height: "60vw", width: "60vw" }}>
        <PDFEditArea />
      </div>
    </div>
  );
}

export default App;
