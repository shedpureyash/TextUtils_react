import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"about="About TextUtils" />
      <div className='container my-8'> 
      <TextForm title="Enter the text to analyse below" />
      </div>
    </>
  );
}

export default App;
