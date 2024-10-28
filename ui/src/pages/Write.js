import React, { useState, useRef, useEffect } from "react";
import { Bold, Italic, AlignLeft, AlignCenter } from "lucide-react";
import logo from "../assets/logo.png"; 
import "../styles/Write.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    justifyLeft: false,
    justifyCenter: false,
  });
  const contentRef = useRef(null);

  const checkActiveStyles = () => {
    const newActiveStyles = {
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      justifyLeft: document.queryCommandState("justifyLeft"),
      justifyCenter: document.queryCommandState("justifyCenter"),
    };
    setActiveStyles(newActiveStyles);
  };

  const handleTextStyle = (command) => {
    document.execCommand(command, false, null);
    checkActiveStyles();
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      checkActiveStyles();
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  return (
    <div className="write-container">
      <div className="editor-toolbar">
        <img src={logo} alt="Logo" className="logo" />
        <button
          onClick={() => handleTextStyle("bold")}
          className={`style-button ${activeStyles.bold ? "active" : ""}`}
        >
          <Bold size={24} />
        </button>
        <button
          onClick={() => handleTextStyle("italic")}
          className={`style-button ${activeStyles.italic ? "active" : ""}`}
        >
          <Italic size={24} />
        </button>
        <button
          onClick={() => handleTextStyle("justifyLeft")}
          className={`style-button ${activeStyles.justifyLeft ? "active" : ""}`}
        >
          <AlignLeft size={24} />
        </button>
        <button
          onClick={() => handleTextStyle("justifyCenter")}
          className={`style-button ${
            activeStyles.justifyCenter ? "active" : ""
          }`}
        >
          <AlignCenter size={24} />
        </button>
        <button className="publish-button">Publish</button>
      </div>

      <div className="title-section">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div
        ref={contentRef}
        className="content-section"
        contentEditable={true}
        onInput={(e) => setContent(e.currentTarget.textContent)}
        placeholder="Tell your story..."
        onFocus={checkActiveStyles}
        onBlur={checkActiveStyles}
        onMouseUp={checkActiveStyles}
        onKeyUp={checkActiveStyles}
      />
    </div>
  );
};

export default Write;
