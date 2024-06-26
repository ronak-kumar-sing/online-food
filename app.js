import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Header = () => {
  return (
    <div className="main-header">
      <div className="logo-container">
        <img
          className="img-logo"
          src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=1480&t=st=1719258302~exp=1719258902~hmac=0f63e3403111447ff9a17e5698d35279bb618e640ed2211229ec5efac115065e"
        />
      </div>
      <div className="navbar-container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Card = (props) => {
  const { resdata } = props
  return (
    <div className="rest-card">
      <img
        className="img-card"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          resdata.cloudinaryImageId
        }
      />
      <h3>{resdata.name}</h3>
      <p>{resdata.cuisines.join(', ')}</p>
      <p>{resdata.locality}</p>
      <p>{resdata.areaName}</p>
      <p>{resdata.costForTwo}</p>
      <p>{resdata.avgRating}</p>
      <div className="bout">
        <button>Order</button>
        <button>Add Cart</button>
      </div>
    </div>
  )
}

const info = [
  {
    name: 'Raajbagh Restaurant ',
    cloudinaryImageId: 'xvyrclhxftulsglktaek',
    locality: 'Sinchai Colony',
    areaName: 'Mohan Nagar',
    costForTwo: '₹300 for two',
    cuisines: [
      'North Indian',
      'South Indian',
      'Indian',
      'Chinese',
      'Fast Food',
      'Beverages',
    ],
    avgRating: 4.3,
  },
  {
    name: 'The Fusion Lounge',
    cloudinaryImageId: 'fa4944f0cfdcbca2bec1f3ab8e3db3f7',
    locality: 'Triloki nagar',
    areaName: 'Railway Station',
    costForTwo: '₹300 for two',
    cuisines: [
      'North Indian',
      'South Indian',
      'Chinese',
      'Beverages',
      'Fast Food',
      'Desserts',
    ],
    avgRating: 4.5,
  },
  {
    name: 'Adil Hotel',
    cloudinaryImageId: 'gp1ityra6utvzqn6ghnv',
    locality: 'Rautha Wada',
    areaName: 'Chhindwara Locality',
    costForTwo: '₹150 for two',
    cuisines: ['North Indian', 'Biryani', 'Tandoor'],
    avgRating: 4.1,
  },
  {
    name: 'Hotel Sai Nath & Sai Restaurant',
    cloudinaryImageId: 'vkhcohhmqfczycw9vsar',
    locality: 'railway station',
    areaName: 'Chhindwara Locality',
    costForTwo: '₹200 for two',
    cuisines: [
      'North Indian',
      'South Indian',
      'Chinese',
      'Beverages',
      'Fast Food',
      'Desserts',
    ],
    avgRating: 4.2,
  },
  {
    name: 'Mr. Gurung Momo & Chinese Corner',
    cloudinaryImageId: 'h7oibtpm7kqks8cqz3gh',
    locality: "Teacher's Colony",
    areaName: 'Mohan Nagar',
    costForTwo: '₹150 for two',
    cuisines: ['Momos', 'Chinese', 'Fast Food'],
    avgRating: 4.3,
  },
  {
    name: 'Bakery World',
    cloudinaryImageId: 'mt2aggiscfl3yviatwng',
    locality: 'Parasia Road',
    areaName: 'Parasia Road',
    costForTwo: '₹250 for two',
    cuisines: ['Bakery', 'Ice Cream', 'Snacks', 'Beverages'],
    avgRating: 4.4,
  },
  {
    name: 'Satkar Restaurant',
    cloudinaryImageId: 'rvxp5xbniat84r6efku2',
    locality: 'Sinchai Colony',
    areaName: 'Satkar Chowk',
    costForTwo: '₹250 for two',
    cuisines: ['North Indian', 'South Indian', 'Indian', 'Salads', 'Desserts'],
    avgRating: 4.3,
  },
  {
    name: 'Baskin Robbins - Ice Cream Desserts',
    cloudinaryImageId: '85ccae4e3576f9330af102c46ca85395',
    locality: 'satkar square Prasia Road',
    areaName: 'Chhindwara',
    costForTwo: '₹250 for two',
    cuisines: ['Desserts', 'Ice Cream'],
    avgRating: 4.5,
  },
  {
    name: 'The Belgian Waffle Co.',
    cloudinaryImageId: '5116a385bac0548e06c33c08350fbf11',
    locality: 'Sinchai Colony',
    areaName: 'Mohan Nagar',
    costForTwo: '₹200 for two',
    cuisines: ['Waffle', 'Desserts', 'Ice Cream', 'Beverages'],
    avgRating: 4.6,
  },
  {
    name: 'Gourmet Ice Cream Cakes by Baskin Robbins',
    cloudinaryImageId: 'd679c532ca07a6f3fd6d89d603861412',
    locality: 'Satkar Square',
    areaName: 'Mohan Nagar',
    costForTwo: '₹200 for two',
    cuisines: ['Ice Cream Cakes', 'Desserts', 'Ice Cream', 'Bakery'],
    avgRating: 5,
  },
  {
    name: 'Pizza Box',
    cloudinaryImageId: 'n7wbtvlifwbw5y4a7rrv',
    locality: 'Sanchar Colony',
    areaName: 'Chhindwara Locality',
    costForTwo: '₹300 for two',
    cuisines: ['Pizzas', 'Burgers', 'Beverages'],
    avgRating: 4.3,
  },
]
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for a restaurant" />
        <button>Search</button>
      </div>
      <div className="rest-card-container">
        <Card resdata={info[0]} />
        <Card resdata={info[1]} />
        <Card resdata={info[2]} />
        <Card resdata={info[3]} />
        <Card resdata={info[4]} />
        <Card resdata={info[5]} />
        <Card resdata={info[6]} />
        <Card resdata={info[7]} />
        <Card resdata={info[8]} />
        <Card resdata={info[10]} />
        <Card resdata={info[1]} />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

root.render(<App />)
