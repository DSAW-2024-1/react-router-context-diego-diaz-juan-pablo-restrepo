import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const Contact = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/contact')
    } else {
      navigate('/login')
    }
  };

  const Go = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/Overview')
    } else {
      navigate('/login')
    }
  };

  const LogOut = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login')
    }
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={Contact}>Go to Contact</button>
      <button onClick={Go}>Go to Overview</button>
      <button onClick={LogOut}>Log Out</button>
    </div>
  )
}

export default Home