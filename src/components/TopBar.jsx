import React from 'react';
import Button from '../containers/Button.jsx';
import '../styles/topBar.css';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

function TopBar ({ drawerOpen, toggleDrawer, children }) {
    return (
      <header className="TopBar">
        <div className="TopBar__Row">
          <section className="TopBar__Section">
            <Button
              icon={drawerOpen ? CloseIcon : MenuIcon}
              className="TopBar__MenuButton"
              iconClass="TopBar__Icon"
              onClick={toggleDrawer}
            />
            <span className="TopBar__Title">Sort Visualizer</span>
          </section>
          <section className="TopBar__Section TopBar__Section_align_end">
            {children}
          </section>
        </div>
      </header>
    );
  };

export default TopBar;