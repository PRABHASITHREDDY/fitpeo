
import './App.css';
import Home from './comp/home';
import SideBar from './comp/sidebar';

function App() {
  return (
    <div className="bg-set">
      <div className='row'>
        <div className='col-lg-3 col-md-12'>
          <SideBar/>
        </div>
      <div className='col-lg-9 col-md-12'>
        <Home/>
      </div>
      </div>
    </div>
  );
}

export default App;
