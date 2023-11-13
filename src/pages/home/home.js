import { lazy, Suspense } from 'react';
import './home.css';
import Header from '../../components/header/header';

const LazyForm = lazy(() => import('../../components/form/form'));

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyForm />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
