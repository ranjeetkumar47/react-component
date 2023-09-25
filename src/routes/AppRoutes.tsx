import React, { lazy, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'
import { routes } from '../constants/routes'
import Loader from '../shared/common/loader'
const Home = lazy(() => import('../pages/home'))
const Dashboard = lazy(() => import('../pages/dashboard'))
const Calendar = lazy(() => import('../pages/calendar'))
const User = lazy(() => import('../pages/user'))
const Chart = lazy(() => import('../pages/chart'))

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={routes.dashboard}
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path={routes.calender}
          element={
            <Suspense fallback={<Loader />}>
              <Calendar />
            </Suspense>
          }
        />
        <Route
          path={routes.user}
          element={
            <Suspense fallback={<Loader />}>
              <User />
            </Suspense>
          }
        />
        <Route
          path={routes.chart}
          element={
            <Suspense fallback={<Loader />}>
              <Chart />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default AppRoutes
