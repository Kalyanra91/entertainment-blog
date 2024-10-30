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
  const contentRef = useRef(null);
  const fileInputRef = useRef(null);
  const titleRef = useRef(null);
  const [formData, setFromData] = useState({
    title: "",
    content: "",
    category: "",
    thumbnailFile: null,
  });

  const handleSubmit = async () => {
    
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && contentRef.current) {
        e.preventDefault();

        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        let currentBlock = range.startContainer;
        while (currentBlock && currentBlock.nodeType !== 1) {
          currentBlock = currentBlock.parentNode;
        }

        // Create a new block
        const newBlock = document.createElement("div");
        newBlock.style.fontFamily = "serif";
        newBlock.style.fontSize = "20px";
        newBlock.style.lineHeight = "1.6";
        newBlock.innerHTML = "<br>";

        if (currentBlock && currentBlock !== contentRef.current) {
          currentBlock.parentNode.insertBefore(
            newBlock,
            currentBlock.nextSibling
          );
        } else {
          contentRef.current.appendChild(newBlock);
        }

        const newRange = document.createRange();
        newRange.setStart(newBlock, 0);
        newRange.collapse(true);

        selection.removeAllRanges();
        selection.addRange(newRange);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

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

  useEffect(() => {
    if (contentRef.current && !contentRef.current.hasChildNodes()) {
      const initialBlock = document.createElement("div");
      initialBlock.style.fontFamily = "serif";
      initialBlock.style.fontSize = "20px";
      initialBlock.style.lineHeight = "1.6";
      initialBlock.innerHTML = "<br>";
      contentRef.current.appendChild(initialBlock);
    }
  }, []);

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
        <div
          ref={titleRef}
          contentEditable={true}
          value={formData.title}
          className="title-input"
          data-placeholder="Title"
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

      <div
        ref={contentRef}
        className="content-section"
        contentEditable={true}
        value={formData.content}
        data-placeholder="Start writing here..."
        onKeyUp={checkActiveStyles}
        onMouseUp={checkActiveStyles}
      />
    </div>
  );
}

export default Write;
