import AccordionItem from "./AccordionItem";
import { useState } from "react";
import "../styles.css";

export default function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
