import React, { useState, useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import './Dashboard.css';


function PopForm() {
    const [modal, setModal] = useState(null);
    const exampleModal = useRef();

    useEffect(() => {
        setModal(new Modal(exampleModal.current))
    }, []);

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => modal.show()} >Add</button>
            <div className="modal modal-lg fade" id="exampleModal" ref={exampleModal} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Shipping</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label" >Driver Name</label>
                                        <input type="text" className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Abdullah"
                                            required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Phone Number</label>
                                        <input type="number" className="form-control"
                                            id="exampleFormControlInput2" placeholder="0576717982"
                                            maxLength='10' required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label">Shipping Company</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option >Open this select menu</option>
                                            <option value="1" id="test" selected>Aramex</option>
                                            <option value="2">أعمال فلو</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 mt-3">
                                        <label className="form-label">Scan Number</label>
                                        <textarea type="text" className="form-control is-valid"
                                            id="exampleFormControlInput4" placeholder="1256166512315"
                                            required />
                                    </div>
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" >Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopForm;