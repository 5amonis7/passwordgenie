import { useState } from 'react';
import './components/styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [ loading, setLoading ] = useState(false);
  const [ password, setPassword ] = useState('Password');


  // Easy Password
  function easy(){
    let beginning = '';
    let middle = '';
    let end = '';
    let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let low = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    for(let i = 0; i < 1; i++) {
      beginning += cap.charAt(Math.random() * cap.length)
    }
    for(let i = 0; i < 5; i++) {
      middle += low.charAt(Math.random() * low.length)
    }
    for(let i = 0; i < 2; i++) {
      end += num.charAt(Math.random() * num.length)
    }
    let result = beginning + middle + end;

    
    setPassword(result)
    const password = document.getElementsByClassName("App-generate_password")[0];
    const easy1 = document.getElementsByClassName("easy1")[0];
    const easy2 = document.getElementsByClassName("easy2")[0];
    easy1.style.background = '#e06649';
    easy2.style.background = '#e06649';
    password.style.borderColor = '#e2633e';
    setTimeout(() => {
      password.style.borderColor = 'white';
      easy1.style.background = 'white';
      easy2.style.background = 'white';
    }, 1000)
    
  }

  // Hard Password
  function hard(){
    let start = '';
    let upper = '';
    let startMid = '';
    let mid = '';
    let endMid = '';
    let end = '';
    let symbol = '!@#$%^&*?~';
    let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let low = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    for(let i = 0; i < 1; i++) {
      start += symbol.charAt(Math.random() * symbol.length)
    }
    for(let i = 0; i < 1; i++) {
      upper += cap.charAt(Math.random() * cap.length)
    }
    for(let i = 0; i < 3; i++) {
      startMid += low.charAt(Math.random() * low.length)
    }
    for(let i = 0; i < 2; i++) {
      mid += symbol.charAt(Math.random() * symbol.length)
    }
    for(let i = 0; i < 3; i++) {
      endMid += low.charAt(Math.random() * low.length)
    }
    for(let i = 0; i < 2; i++) {
      end += num.charAt(Math.random() * num.length)
    }
    let result = start + upper + startMid + mid + endMid + end;
    
   
    setPassword(result)
    const password = document.getElementsByClassName("App-generate_password")[0];
    const hard1 = document.getElementsByClassName("hard1")[0];
    const hard2 = document.getElementsByClassName("hard2")[0];
    hard1.style.background = '#e06649';
    hard2.style.background = '#e06649';
    password.style.borderColor = '#e2633e';
    setTimeout(() => {
      password.style.borderColor = 'white';
      hard1.style.background = 'white';
    hard2.style.background = 'white';
    }, 1000)
  }

  // Download password
  function downloadTxtFile(){
    const blob = new Blob([password], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'myFile.txt';
    link.href = url;
    link.click();
  }

  return (
    <div className="App">

      

      <div className="App-box">

        <div className="App-title">
          <h1 className="color-change">
            <span>P</span>
            <span>a</span>
            <span>s</span>
            <span>s</span>
            <span>w</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
            <span> G</span>
            <span>e</span>
            <span>n</span>
            <span>i</span>
            <span>e</span>
          </h1>
          <FontAwesomeIcon className='icon' icon={faShieldAlt} />
        </div>
        </div>

        <p className="App-description">Password Genie will gladly generate you a password that is either easy to remember or hard to figure out. He will make sure to include the new standards for passwords so no one can easily figure out what it is. Down below you have an option for a short or longer password. If you choose to, you can also have the password downloaded to your device so you never forget it.</p>
  


      <div className="App-generate">

        <div className="App-generate_easy generator">
          <h1>Easy</h1>
          <button onClick={easy}>Generate</button>
        </div>

        <hr className="easy1" />
        <hr className="easy2" />

        <hr className='hard1' />
        <hr className='hard2' />
          
        <h3 className="App-generate_password">{password}</h3>
        
         

        <div className="App-generate_hard generator">
          <h1>Hard</h1>
          <button onClick={hard}>Generate</button>
        </div>

      </div>

      <button onClick={downloadTxtFile} className="App-download">Download</button>
      
    </div>
  );
}

export default App;
