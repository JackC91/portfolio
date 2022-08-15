import React, { useState, useEffect } from "react";

export default function Cherry() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("cherry.")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 400)
    }
  }, [index])

    return <p className="cherry">{text}</p>;
  }