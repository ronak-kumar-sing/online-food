import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
  return (
    <div className="main-header">
      <div className="logo-container">
        <img className="img-logo" src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=1480&t=st=1719258302~exp=1719258902~hmac=0f63e3403111447ff9a17e5698d35279bb618e640ed2211229ec5efac115065e" />

      </div>
      <div className="navbar-container">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Cart</a></li>
        </ul>
      </div>
    </div>
  )
};

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <h1>Welcome to our store!</h1>
        <p>Check out our latest products.</p>
      </div>
    </div>
  )
}

root.render(<App />);
