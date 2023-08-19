
import './App.css';

function App() {

const a="LUND"

  return (
    <>
    <nav id="navbar">
        <div id="logo">
            <img src="hanumanji.jpg" alt/>
          
        </div>
        <ul>
            <li class="item"><a href="#">{a}</a></li>
            <li class="item"><a href="#">SERVICES</a></li>
            <li class="item"><a href="#">ABOUT US</a></li>
            <li class="item"><a href="#">CONTECT US</a></li>
          <li class="item"><a href="https://google.com" target="_blank">GOOGLE</a> </li>
        </ul>
    </nav>
    <section id="home">
<h1 class="h-primary">welcome to pandeyworld</h1>
<p>“You can get everything in life you want if you will just help enough other people get what they want.”</p>
<p>'this website is make only using html,css'</p>
<button class="btn">order now</button>
    </section>
    
        </>
  );
}

export default App;

