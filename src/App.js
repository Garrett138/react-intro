import React, { Component } from 'react'

import Nav from './components/Nav/Nav'

import './App.css'

class App extends Component {
   render() {
      return (
         <div className="App">
            <Nav />
            <div className="profile-container">
               <div className="profile-image">
                  <img src="https://image.flaticon.com/icons/svg/16/16480.svg" alt=""/>
               </div>
               <div className="profile-info">
                  <h2>name</h2>
                  <h3 className="profile-info-status">status</h3>
                  <h4 className="profile-info-birthdate">birthdate</h4>
               </div>
            </div>

            <form className="profile-editor" onSubmit={this.updateProfile}>
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new name"
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new image"
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new birthdate"
               />
               <input type="text" className="profile-editor-input"
                  placeholder="Enter new status"
               />
               <input className="profile-editor-submit" type="submit" value="Update Profile"/>

            </form>
         </div>
      );
   }
}

export default App;
