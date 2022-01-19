import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="bg-color-green">
            <div className="row">
                <div className="col-md-6">
                    <div className="p-3">
                        <FontAwesomeIcon icon={faCartPlus} className="text-white" />
                        <span className="text-white text-uppercase m-5">Bazar</span>
                        <h6 className="text-white text-uppercase letter-space-12 p-0 m-5">Shodai</h6>
                    </div>
                </div>
                <div className="col-md-6">
                   {/* <div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control"/>
                            <label className="form-label" htmlFor="form1">Search</label>
                        </div>
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>*/}
                </div>

            </div>

        </div>
    );
}

export default Header;
