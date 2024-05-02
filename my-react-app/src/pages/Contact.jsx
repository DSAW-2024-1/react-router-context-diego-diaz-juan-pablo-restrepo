import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate();

  const Home = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/')
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

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login')
    }
  }, [navigate]);

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={Home}>Go to Home</button>
      <button onClick={Go}>Go to Overview</button>
    </div>
  )
}

export default Contact