import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Skeleton } from '../Components';
import routes from './routes.const';

const Home = lazy(() => import('../Pages/Home'));
const Pet = lazy(() => import('../Pages/Pet'));
const Elderly = lazy(() => import('../Pages/Elderly'));
const Contact = lazy(() => import('../Pages/Contact'));
const Features = lazy(() => import('../Pages/Features'));
const PiHealthElderly = lazy(() => import('../Pages/PiHealthElderly'));
const PiStakeholder = lazy(() => import('../Pages/PiStakeholder'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path={routes.root} element={<Home />} />
          <Route path={routes.features} element={<Features />} />
          <Route path={routes.pet} element={<Pet />} />
          <Route path={routes.elderly} element={<Elderly />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.piHealthElderly} element={<PiHealthElderly />} />
          <Route path={routes.stakeholder} element={<PiStakeholder />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
