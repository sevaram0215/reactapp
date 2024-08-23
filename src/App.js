
import './App.css';
import Footer from './components/layout/footer/footer';
import MainContant from './components/layout/maincontant/MainContant';
import Navbar from './components/layout/navbar/Navbar';
import Sidebar from './components/layout/sidebar/Sidebar';

function App() {
  return (
<div className='Main_container'>
<Navbar/>
<Sidebar/>
<MainContant/>
<Footer/>
</div>

  );
}

export default App;
