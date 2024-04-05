import React from "react"
import {useLocation, useNavigate, Link} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}
            <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-Office</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tender
          </a>
          <ul class="dropdown-menu">
            <li><Link to="/home/form" class="dropdown-item">New Tendor</Link></li>
            <li><Link to="#" class="dropdown-item">Corrections</Link></li>
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

        </div>
    )
}

export default Home