import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <main>
      <Bio />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Contact />
    </main>
  );
}

export default App;
