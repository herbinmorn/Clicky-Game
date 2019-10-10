import React, { Component } from "react";
import GirlCard from "./components/GirlCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import girls from "./girls.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    girls,
    //score: 0,
    //topScore:0
  };

  //handleClick = event => {
    //event.preventDefault();
    //if 
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
         <Nav>
           
           <li><a href="/">Clicky Game</a></li>
           <li>Click an image to begin!</li>
           <li>Score: 0  |  Top Score: 0</li>
           
         </Nav>
         <Title>Dream of the Red Chamber</Title>
        {this.state.girls.map(girl => (
          <GirlCard
            //removeFriend={this.removeFriend}
            id={girl.id}
            key={girl.id}
            name={girl.name}
            image={girl.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
