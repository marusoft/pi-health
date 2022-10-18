import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Skeleton } from '../Components';
import routes from './routes.const';

const Home = lazy(() => import('../Pages/Home'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path={routes.root} element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
