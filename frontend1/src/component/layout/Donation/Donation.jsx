import React, { useRef } from "react";
import "./Donation.css";

const Donation = () => {
    const category = useRef();
    const file = useRef();
    const address1 = useRef();
    const address2 = useRef();
    const address3 = useRef();
    const address4 = useRef();
    const address5 = useRef();

    const submitHandler = () => {
        alert("Successfully Submitted!");
        localStorage.setItem("category", category.current.value);
        localStorage.setItem("file", file.current.value);
        localStorage.setItem("Address1", address1.current.value);
        localStorage.setItem("Address2", address2.current.value);
        localStorage.setItem("Address3", address3.current.value);
        localStorage.setItem("Address4", address4.current.value);
        localStorage.setItem("Address5", address5.current.value);
    };

    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center w-3/4">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <label for="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3 font-font-krona">
                                                        Donation
                                                    </h4>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="logemail"
                                                            className="form-style"
                                                            placeholder="Item Category..."
                                                            id="logemail"
                                                            ref={category}
                                                        />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="file"
                                                            name="logpass"
                                                            className="form-style"
                                                            placeholder="Your Password"
                                                            id="logpass"
                                                            ref={file}
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <form action="">
                                                        <div className="address mt-2">
                                                            <h1 className="mt-4  mb-2 pb-3 font-font-krona">
                                                                Address
                                                            </h1>

                                                            <div className="form-group mb-2">
                                                                <input
                                                                    type="text"
                                                                    name="address-1"
                                                                    className="form-style"
                                                                    placeholder="House No./ Flat No."
                                                                    id="address-1"
                                                                    ref={
                                                                        address1
                                                                    }
                                                                />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div className="form-group mb-2">
                                                                <input
                                                                    type="text"
                                                                    name="address-2"
                                                                    className="form-style"
                                                                    placeholder="City"
                                                                    id="address-2"
                                                                    ref={
                                                                        address2
                                                                    }
                                                                />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div className="form-group mb-2">
                                                                <input
                                                                    type="text"
                                                                    name="address-3"
                                                                    className="form-style"
                                                                    placeholder="Landmark (optional)"
                                                                    id="address-3"
                                                                    ref={
                                                                        address3
                                                                    }
                                                                />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div className="form-group mb-2">
                                                                <input
                                                                    type="text"
                                                                    name="address-4"
                                                                    className="form-style"
                                                                    placeholder="State"
                                                                    id="address-4"
                                                                    ref={
                                                                        address4
                                                                    }
                                                                />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div className="form-group mb-2">
                                                                <input
                                                                    type="text"
                                                                    name="address-5"
                                                                    className="form-style"
                                                                    placeholder="Country"
                                                                    id="address-5"
                                                                    ref={
                                                                        address5
                                                                    }
                                                                />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <a
                                                        href="/"
                                                        className="btn mt-4"
                                                        onClick={submitHandler}
                                                    >
                                                        submit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
