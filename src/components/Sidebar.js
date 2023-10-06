import React from 'react';
import usericon from 'adminbsb-materialdesign/images/user.png';

class Sidebar extends React.Component {
  render() {
    return <section>

    <aside id="leftsidebar" className="sidebar">

        <div className="user-info">
            <div className="image">
                <img src={usericon} width="48" height="48" alt="User" />
            </div>
            <div className="info-container">
                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tulus Vincent</div>
                <div className="email">vincent@tulusdev.xyz</div>
                <div className="btn-group user-helper-dropdown">
                    <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                    <ul className="dropdown-menu pull-right">

                        <li><a href="#" className=" waves-effect waves-block"><i className="material-icons">input</i>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="menu">
            <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '489px' }}><ul className="list" style={{overflow: 'hidden', width: 'auto', height: '489px' }}>
                
                <li className="active">
                    <a href="#" className="toggled waves-effect waves-block">
                        <i className="material-icons">home</i>
                        <span>Home</span>
                    </a>
                </li>
    
            </ul><div className="slimScrollBar" style={{ background: 'rgba(0, 0, 0, 0.5)', width:'4px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '0px', zIndex: '99', right: '1px', height: '257.119px' }}></div><div className="slimScrollRail" style={{ width: '4px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '0px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '1px' }}></div></div>
        </div>

        <div className="legal">
            <div className="copyright">
                © 2023 - 2027 <a href="#">tulusdev.xyz</a>.
            </div>
            <div className="version">
                <b>Version: </b> 1.0.0
            </div>
        </div>
    </aside>
 
</section>;
  }
}

export default Sidebar;
