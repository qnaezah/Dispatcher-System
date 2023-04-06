import './Dashboard.css'
import PopForm from './popForm';
function Dashborad() {
    return (
        <>
            <div className='mainDiv'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4"><h1 className='fs-1 bold'>Dispatcher System</h1></div>
                        <div className="col-md-4 offset-md-4">{<PopForm></PopForm>}</div>
                    </div>
                </div>
                <hr />

                <div className="container mx-auto my-8 px-4">
                    <div className="content rounded">
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Shipment Number</th>
                                    <th scope="col">Shipping Company</th>
                                    <th scope="col">Time of Receipt</th>
                                    <th scope="col">Recipient Name</th>
                                    <th scope="col">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Abdullah</td>
                                    <td>0576717982</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Abdullah</td>
                                    <td>0576717982</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Abdullah</td>
                                    <td>0576717982</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Abdullah</td>
                                    <td>0576717982</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Abdullah</td>
                                    <td>0576717982</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end border border-light-subtle mt-3 p-2 rounded">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Dashborad;
