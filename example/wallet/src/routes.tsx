import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom"
import {SideNav} from './Components/NavContainer'
import {SigninModal} from './Components/SigninModal'

interface SideNavData {
  [scene: string] : {icon: IconOptions, disabled: boolean};
}
  
interface State {
    scene: Scenes;
    sideNavData: SideNavData;
}

interface Props {}

export class Navigation extends React.Component <Props, State> {  

    constructor(props: any) {
        
        super(props);

        var sideNavData = {};

        sideNavData[Scenes.Login]={icon: SceneIcons[Scenes.Login], disabled:false }
        sideNavData[Scenes.Sign]={icon: SceneIcons[Scenes.Sign], disabled:false}
        sideNavData[Scenes.Signup]={icon: SceneIcons[Scenes.Signup], disabled:true}
        sideNavData[Scenes.SmartContract]={icon: SceneIcons[Scenes.SmartContract], disabled:true}
        
        this.state = {
          scene: Scenes.Login,
          sideNavData: sideNavData,
        }
        
    }

    render(){
        return(
          <div className="App">
          <Router>
              <SideNav  sideNavData = {this.state.sideNavData}/>
          </Router>
          <SigninModal/>
          
          </div>
            
        )
    }
}


type IconOptions =
  | "add"
  | "blockmaker"
  | "chevronLeft"
  | "close"
  | "cycle"
  | "demotion"
  | "filter"
  | "governanceCycle"
  | "help"
  | "home"
  | "listView"
  | "media"
  | "members"
  | "more"
  | "node"
  | "notificationBell"
  | "promotion"
  | "remove"
  | "search"
  | "settings"
  | "upload"
  | "user"
  | "vote"
  | "arrowDown";

enum Scenes {
    Login="Login",
    Signup="Signup",
    Sign="Sign",
    SmartContract="SmartContract"
  }
  
enum SceneIcons {
    Login="home",
    Signup="members",
    Sign="node",
    SmartContract="governanceCycle"
  }