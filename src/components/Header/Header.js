import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
    return (
        <div className="bg-color-green">
            <div className="row">
                <div className="col-md-2">
                    <div className="p-3">
                        <FontAwesomeIcon icon={faCartPlus} className="text-white" />
                        <span className="text-white text-uppercase m-1">Bazar</span>
                        <h6 className="text-white text-uppercase letter-space-12 ">Shodai</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container p-3">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-8">
                                <div className="search">
                                    <input type="text" className="form-control" placeholder="Search for products (eg: fish, oil)"/>
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">

                </div>

            </div>

        </div>
    );
}

export default Header;
