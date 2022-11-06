import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Skeleton } from '../Components';
import routes from './routes.const';

const Home = lazy(() => import('../Pages/Home'));
const Pet = lazy(() => import('../Pages/Pet'));
const Elderly = lazy(() => import('../Pages/Elderly'));
const Kids = lazy(() => import('../Pages/Kids'));
const Sports = lazy(() => import('../Pages/Sports'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path={routes.root} element={<Home />} />
          <Route path={routes.sports} element={<Sports />} />
          <Route path={routes.pet} element={<Pet />} />
          <Route path={routes.elderly} element={<Elderly />} />
          <Route path={routes.kids} element={<Kids />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
