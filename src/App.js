import React, { Component } from 'react'

import Nav from './components/Nav/Nav'

import './App.css'

class App extends Component {
   constructor() {
      super()
      this.state = {
         name: "Brian",
         newName: "",
         image: "https://image.flaticon.com/icons/svg/16/16480.svg",
         newImage: "",
         status: "Livin the dream",
         newStatus: "",
         birthdate: "6-27-80",
         newBirthdate: "",
         posts: []
      }
      this.updateProfile = this.updateProfile.bind(this)
   }
   handleChange(prop, e) {
      this.setState({[prop]: e.target.value})
   }
   updateProfile(e) {
      e.preventDefault()
      const {newName, newImage, newStatus, newBirthdate} = this.state
      var newState = {name: newName, image: newImage, status: newStatus, birthdate: newBirthdate}
      for (let prop in newState) {
         if (!newState[prop]) {
            delete newState[prop]
         }
      }
      this.setState(newState)
   }
   render() {
      return (
         <div className="App">
            <Nav />
            <div className="profile-container">
               <div className="profile-image">
                  <img src={this.state.image} alt=""/>
               </div>
               <div className="profile-info">
                  <h2>{this.state.name}</h2>
                  <h3 className="profile-info-status">{this.state.status}</h3>
                  <h4 className="profile-info-birthdate">{this.state.birthdate}</h4>
               </div>
            </div>

            <form className="profile-editor" onSubmit={this.updateProfile}>
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new name"
                  value={this.state.newName}
                  onChange={this.handleChange.bind(this, "newName")}
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new image"
                  value={this.state.newImage}
                  onChange={this.handleChange.bind(this, "newImage")}
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new birthdate"
                  value={this.state.newBirthdate}
                  onChange={this.handleChange.bind(this, "newBirthdate")}
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new status"
                  value={this.state.newStatus}
                  onChange={this.handleChange.bind(this, "newStatus")}
               />
               <input className="profile-editor-submit" type="submit" value="Update Profile"/>

            </form>
         </div>
      );
   }
}

export default App;
