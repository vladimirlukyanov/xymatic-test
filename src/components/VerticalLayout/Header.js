import React, {useState} from 'react';

import {connect} from "react-redux";
import {Row, Col} from "reactstrap";

import {Link} from "react-router-dom";

// Reactstrap
import {Dropdown, DropdownToggle, DropdownMenu} from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../Common/LanguageDropdown";
import NotificationDropdown from "../Common/NotificationDropdown";
import ProfileMenu from "../Common/ProfileMenu";

import logoLightSvgBig from "../../assets/images/logo-light-big.svg";
import logoLightSvg from "../../assets/images/logo-light.svg";

//i18n
import {withNamespaces} from 'react-i18next';

// Redux Store
import { toggleLeftmenu, changeSidebarType} from "../../store/actions";


const Header = (props) => {

    const [search, setsearch] = useState(false);
    const [megaMenu, setmegaMenu] = useState(false);
    const [socialDrp, setsocialDrp] = useState(false);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


    function tToggle() {
        props.toggleLeftmenu(!props.leftMenu);
        if (props.leftSideBarType === "default") {
            props.changeSidebarType("condensed", isMobile);
        } else if (props.leftSideBarType === "condensed") {
            props.changeSidebarType("default", isMobile);
        }
    }

    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">

                            <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22"/>
                  </span>
                                <span className="logo-lg">
                    <img src={logoLightSvgBig} alt="" height="25"/>
                  </span>
                            </Link>
                        </div>

                        <button type="button" onClick={() => {
                            tToggle()
                        }} className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                    </div>
                    <div className="d-flex">
                        <LanguageDropdown/>
                        <NotificationDropdown/>
                        <ProfileMenu/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}
const mapStatetoProps = state => {
    const {layoutType, showRightSidebar, leftMenu, leftSideBarType} = state.Layout;
    return {layoutType, showRightSidebar, leftMenu, leftSideBarType};
};

export default connect(mapStatetoProps, {
    toggleLeftmenu,
    changeSidebarType
})(withNamespaces()(Header));
