import React, { Component } from 'react';
import './App.css';



const Button = props => {
  return <div className="button">
    <span>Contact {props.name}</span>
  </div>;
}

const User = props => {
  return (
    <div className="user-card">
      <div className='left'>
        <div className='title-wrap'>
          <h1 className='title'>{props.firstName} {props.lastName}</h1>
          <span className='subtitle'>{props.role}</span>
        </div>
        <br />
        <div className='user-info'>
          <ul>
            <li><span>email</span><br /> {props.email}</li>
            <li><span>website</span><br /> {props.website}</li>
          </ul>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ex reiciendis pariatur delectus nisi soluta repellendus reprehenderit voluptas accusantium. Vitae omnis alias quod aspernatur pariatur eaque quis voluptatem qui odit!
          </p>
        </div>
        <Button name={props.firstName} />
      </div>
      <div className='right'>
        <img src='https://placeimg.com/400/500/people' />
      </div>
    </div>
  )
}



class App extends Component {

  render() {
    return (
      <User
        firstName='Andriy'
        lastName='Polukhin'
        role='Frontend Developer'
        email='andriy.polukhin@gmail.com'
        website='<=@github.com'
      />
    );
  }
}

export default App;
