import { PDFEditArea } from "./PDFEditArea";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "30px",
      }}
    >
      <div style={{ height: "80vh", width: "40vw", textAlign: "initial" }}>
        textAlign: initial
        <PDFEditArea />
      </div>
      <div style={{ height: "80vh", width: "40vw", textAlign: "center" }}>
        textAlign: center
        <PDFEditArea />
      </div>
      <div style={{ height: "80vh", width: "40vw", textAlign: "left" }}>
        textAlign: left
        <PDFEditArea />
      </div>
      <div style={{ height: "80vh", width: "40vw", textAlign: "right" }}>
        textAlign: right
        <PDFEditArea />
      </div>
    </div>
  );
}

export default App;
