import './App.css';
import { useEffect, useState, useRef } from "react"
function App() {
  const [scrolled, setScrolled] = useState(0);
  const divRefs = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); console.log(scrolled)
  useEffect(() => {
    for (let i = 0; i < 200; i++) {
      const newDiv = document.createElement('div');
      newDiv.className = "newdiv";
      const size = Math.random() * 20;
      newDiv.style.width = newDiv.style.height = `${size}px`;
      newDiv.style.position = "absolute";
      newDiv.style.top = `${Math.random() *2000}%`;
      newDiv.style.left = `${Math.random() * 100}%`;
      newDiv.style.zIndex = Math.floor(size); 
      document.getElementById('root').appendChild(newDiv);
      divRefs.current.push(newDiv); 
    }
  }, []); 
  const updateTopPosition = () => {
    divRefs.current.forEach(div => {
      const currentTop = parseFloat(div.style.top); 
      const currentzIndex = parseInt(div.style.zIndex); 
      div.style.top = `${currentTop + (scrolled*currentzIndex)/5000}px`; 
    
    });
  };
  useEffect(() => {
  updateTopPosition();
  }, [scrolled]);

  return (
    <div className="App">
    </div>
  );
}

export default App;