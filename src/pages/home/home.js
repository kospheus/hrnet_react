import './home.css';
import Header from '../../components/header/header';
import EmployeeForm from '../../components/form/form';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <EmployeeForm />
      </div>
    </div>
  );
}

export default Home;
