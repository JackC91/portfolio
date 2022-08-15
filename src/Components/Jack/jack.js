import React, { useState, useEffect } from "react";


export default function Jack() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("jack")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 400)
    }
  }, [index])

  return <p className="jack">{text}</p>;
}
