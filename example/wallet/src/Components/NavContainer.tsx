import * as React from 'react';
import Nav from'./Nav'
import NavItem from './NavItem'
import Typography from './Typography'
import AddressSwitcher from './AddressSwitcher'

interface SideNavData {
  [scene: string] : {icon: IconOptions, disabled: boolean};
}

interface Props {
  sideNavData: SideNavData,
}
interface State{
    
    addresses: any
}
export type IconOptions =
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

  type auth = boolean;

function item(icon, text){return(
  <span><i className={`icon icon-${icon}`}></i> {text} </span>
  )
}
export class SideNav extends React.Component<Props, State>  {

    static defaultProps = {
    }
  
    constructor(props: any) {
      super(props);
      this.state = {
        addresses: [
            {
              title: '0x123456789...',
              label: 'Not Logged In'
            },
            {
              title: 'abc98745613...',
              label: 'Not Authenticated'
            },]
    };
    }
    render(){
        return(
            <div className="left-sidebar">
            <div className="left-sidebar-body">
              <Typography h6>Guardian</Typography>
              <Nav selectedKey={0} onSelect={(event: any, key: any) => console.log(event, key)}>
                { 
                  Object.keys(this.props.sideNavData).map((scene, sceneId)=>{
                    return (
                      <NavItem  
                        key={sceneId} 
                        disabled={this.props.sideNavData[scene].disabled} 
                        onClick={() => { console.log(`${scene}click`) }}>
                          {item(this.props.sideNavData[scene].icon, scene)}
                      </NavItem>)
                  })
                  }
              </Nav>
            </div>
            <div className="left-sidebar-footer">
            <AddressSwitcher title='Signing txs as' addresses={this.state.addresses} onSelect={(index: any, data: any) => { console.log(index, data) }}></AddressSwitcher>
            </div>
            
          </div>
        )
    }
}