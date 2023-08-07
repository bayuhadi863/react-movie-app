import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import CategoryContent from './pages/CategoryContent';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <Router>
      <DataProvider>
      <Navbar />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          ></Route>
          <Route
            path=':category'
            element={<CategoryPage />}
          >
            <Route
              path=':page'
              element={<CategoryContent />}
            ></Route>
          </Route>
        </Routes>
      </DataProvider>
      <Footer />
    </Router>
  );
};

export default App;
