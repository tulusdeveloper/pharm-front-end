import React from 'react';

class Sidebar extends React.Component {
  render() {
    return <section>

    <aside id="leftsidebar" class="sidebar">

        <div class="user-info">
            <div class="image">
                <img src={{}} width="48" height="48" alt="User" />
            </div>
            <div class="info-container">
                <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tulus Vincent</div>
                <div class="email">vincent@tulusdev.xyz</div>
                <div class="btn-group user-helper-dropdown">
                    <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                    <ul class="dropdown-menu pull-right">

                        <li><a href="#" class=" waves-effect waves-block"><i class="material-icons">input</i>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="menu">
            <div class="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '489px' }}><ul class="list" style={{overflow: 'hidden', width: 'auto', height: '489px' }}>
                
                <li class="active">
                    <a href="#" class="toggled waves-effect waves-block">
                        <i class="material-icons">home</i>
                        <span>Home</span>
                    </a>
                </li>
    
            </ul><div class="slimScrollBar" style={{ background: 'rgba(0, 0, 0, 0.5)', width:'4px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '0px', zIndex: '99', right: '1px', height: '257.119px' }}></div><div class="slimScrollRail" style={{ width: '4px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '0px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '1px' }}></div></div>
        </div>

        <div class="legal">
            <div class="copyright">
                © 2023 - 2027 <a href="#">tulusdev.xyz</a>.
            </div>
            <div class="version">
                <b>Version: </b> 1.0.0
            </div>
        </div>
    </aside>
 
</section>;
  }
}

export default Sidebar;
