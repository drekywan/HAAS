import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.scss';
const HomePage = () => {
  return (
    <main id="hospital_main" className="w-100">
      <div className='hospital_container d-flex'>  
        <div className="hospital_body">
          <h1>Home Page</h1>
          <p>Welcome to the Home Page!</p>
        </div>
        <div className="hospital_side">
          <h1>Home Page</h1>
          <p>Welcome to the Home Page!</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
