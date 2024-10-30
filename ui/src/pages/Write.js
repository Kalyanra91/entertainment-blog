import React, { useState, useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  Highlighter,
  Plus,
} from "lucide-react";
import "../styles/Write.css";
import logo from "../assets/logo.png";

function Write() {
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    alignLeft: false,
    alignCenter: false,
    highlight: false,
  });
  const fileInputRef = useRef(null);
  const [formData, setFromData] = useState({
    title: "",
    content: "",
    category: "",
    thumbnailFile: null,
  });

  const handleSubmit = async () => {};

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setThumbnailImage(imageUrl);
    setFromData((prev) => ({
      ...prev,
      thumbnailFile: file,
    }));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const checkActiveStyles = () => {
    setActiveStyles({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      alignLeft: document.queryCommandState("justifyLeft"),
      alignCenter: document.queryCommandState("justifyCenter"),
      highlight: checkHighlight(),
    });
  };

  const checkHighlight = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return false;

    const range = selection.getRangeAt(0);
    const ancestor = range.commonAncestorContainer;
    const node = ancestor.nodeType === 3 ? ancestor.parentNode : ancestor;

    return node.closest('[data-highlighted="true"]') !== null;
  };

  const handleFormat = (command) => {
    if (command === "highlight") {
      applyHighlight();
    } else {
      document.execCommand(command, false, null);
    }
    checkActiveStyles();
  };

  const applyHighlight = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    if (range.collapsed) return;

    const highlighted = checkHighlight();

    if (highlighted) {
      const highlightedSpan = range.commonAncestorContainer.parentElement;
      if (highlightedSpan && highlightedSpan.hasAttribute("data-highlighted")) {
        const text = highlightedSpan.textContent;
        const textNode = document.createTextNode(text);
        highlightedSpan.parentNode.replaceChild(textNode, highlightedSpan);
      }
    } else {
      const span = document.createElement("span");
      span.setAttribute("data-highlighted", "true");
      span.style.backgroundColor = "yellow";
      span.style.fontFamily = "inherit";

      try {
        range.surroundContents(span);
      } catch (error) {
        console.error("Failed to highlight text:", error);
      }
    }

    selection.removeAllRanges();
    selection.addRange(range);
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

  const handleTextAreaInput = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setFromData({ ...formData, content: textarea.value });
  };

  return (
    <div className="write-container">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        style={{ marginTop: "10px" }}
      />
      <div className="editor-toolbar">
        <button
          className={`style-button ${activeStyles.bold ? "active" : ""}`}
          onClick={() => handleFormat("bold")}
        >
          <Bold size={24} />
        </button>
        <button
          className={`style-button ${activeStyles.italic ? "active" : ""}`}
          onClick={() => handleFormat("italic", "serif")}
        >
          <Italic size={24} />
        </button>
        <button
          className={`style-button ${activeStyles.highlight ? "active" : ""}`}
          onClick={() => handleFormat("highlight")}
        >
          <Highlighter size={24} />
        </button>
        <button
          className={`style-button ${activeStyles.alignLeft ? "active" : ""}`}
          onClick={() => handleFormat("justifyLeft")}
        >
          <AlignLeft size={24} />
        </button>
        <button
          className={`style-button ${activeStyles.alignCenter ? "active" : ""}`}
          onClick={() => handleFormat("justifyCenter")}
        >
          <AlignCenter size={24} />
        </button>
        <button className="publish-button">Publish</button>
      </div>

      <div className="title-section">
        <input
          type="text"
          value={formData.title}
          className="title-input"
          placeholder="Title"
          onChange={(e) => setFromData({ ...formData, title: e.target.value })}
        />
      </div>

      <div className="option-section">
        <div className="category">
          <select
            className="category-select"
            value={formData.category}
            onChange={(e) =>
              setFromData({ ...formData, category: e.target.value })
            }
          >
            <option value="Select a category">Select a category</option>
            <option value="Movies">Movies</option>
            <option value="TV-shows">TV-shows</option>
            <option value="Music">Music</option>
            <option value="Celebrity News">Celebrity News</option>
            <option value="Festival">Festival</option>
          </select>
        </div>

        <div>
          <label htmlFor="imageUpload" className="thumbnail-button">
            <Plus size={24} />
            <span>Add your thumbnail</span>
          </label>

          <input
            id="imageUpload"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div className="thumbnail-section">
        {thumbnailImage && (
          <div className="thumbnail-wrapper">
            <img
              src={thumbnailImage}
              alt="Thumbnail"
              className="thumbnail-image"
            />
          </div>
        )}
      </div>

      <textarea
        className="content-section"
        placeholder="Start writing here..."
        value={formData.content}
        onChange={handleTextAreaInput}
        onKeyUp={checkActiveStyles}
        onMouseUp={checkActiveStyles}
      />
    </div>
  );
}

export default Write;
