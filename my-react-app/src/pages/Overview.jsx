import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Overview() {
  const navigate = useNavigate();

  const Home = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/')
    } else {
      navigate('/login')
    }
  };

  const Contact = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/contact')
    } else {
      navigate('/login')
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login')
    }
  }, [navigate]);

  return (
    <div>
      <h1>Overview</h1>
      <button onClick={Home}>Go to Home</button>
      <button onClick={Contact}>Go to Contact</button>
    </div>
  )
}

export default Overview