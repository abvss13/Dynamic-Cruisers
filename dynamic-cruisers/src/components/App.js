// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactsInfoPage from './ContactsInfoPage';
import CarListingsPage from './CarListingsPage';
import CarDetailsPage from './CarDetailsPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import UserProfilePage from './UserProfilePage';
import Footer from './Footer';
import Header from './Header';
import Button from './Button';
import ErrorPage from './ErrorPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsInfoPage />} />
          <Route path="/cars" element={<CarListingsPage />} />
          <Route path="/cars/:id" element={<CarDetailsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <Button />
      </div>
    </Router>
  );
};

export default App;
