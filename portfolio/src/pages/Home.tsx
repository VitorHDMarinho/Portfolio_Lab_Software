import { useEffect, useState } from "react";
import "../assets/CSS/home.css";

export default function Home() {
  const paragraphText = `Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const Name = 'Your Name Here';
  const [lines, setLines] = useState<string[][]>([]);

  useEffect(() => {
    // Dividir o texto em palavras para animação
    const words = paragraphText.split(" ");
    const containerWidth = 60; // ajusta baseado no seu max-width
    const tempLines: string[][] = [];
    let currentLine: string[] = [];
    let currentLength = 0;

    words.forEach((word) => {
      currentLength += word.length + 1; // +1 pelo espaço
      if (currentLength > containerWidth) {
        tempLines.push(currentLine);
        currentLine = [word];
        currentLength = word.length + 1;
      } else {
        currentLine.push(word);
      }
    });
    if (currentLine.length) tempLines.push(currentLine);
    setLines(tempLines);
  }, []);

  return (
    <div className="home">
      <h1 className="home-h1">{Name}</h1>
      <section className="home-description">
        <p>
          {lines.map((line, index) => (
            <span
              key={index}
              className={index === lines.length - 1 ? "line last-line" : "line"}
              style={{ "--i": index } as React.CSSProperties}
            >
              {line.join(" ")}{index === lines.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </section>
      <section className="home-button-section">
        <button className="home-button">Continuar</button>
      </section>
    </div>
  );
}