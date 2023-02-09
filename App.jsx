import "./styles.css";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notesData from "./notes";

//in order to map all the notes, we have to create a function that will create them automatically. 
//We'll create a function called createNote that will take single object passed into it (newNote), and returns a Note component
// that is  going to have some props (key, title, and content) set to the values from the newNote object. This 
//function allows you to create a new Note component with ease, by simply passing in a newNote object.

//function createNote (newNote){
//  return (
//    <Note
//    key = {newNote.key}
//    title = {newNote.title}
//    content = {newNote.content}
//    />
//  );
//}

//when exporting our component, we export the "mapped" version of the Note inside out App. In this case, we embedded the above createNote 
//function inside as a method of the mapping part. In the App component, you are using the map function on the notes array imported from ./notes.
//For each item in the notes array, you are calling the createNote function and passing in the current note from the array. This creates a new Note
// component for each note in the notes array. Then, we refactor it with an arrow function since it has a single return (just return the note function)
// and a single parameter (the newNote we're creating in the function)

  function App() {
    return (
      <>
        <Heading />
        <div>
          {notesData.map(newNote => (
    <Note
    key = {newNote.key}
    title = {newNote.title}
    content = {newNote.content}
    />
  ))}
        </div>
        <Footer />
      </>
    );
  }
  
  export default App;
  
