import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


//////////////////////////////// Main Component That Renders All other Components

export default function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem =>{
  
  return(<Note 
   key = {noteItem.id}
   title = {noteItem.title}
   content ={noteItem.content}
 />);

})}
      <Footer />
    </div>
  );
}


