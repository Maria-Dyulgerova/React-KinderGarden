import {useState, useEffect} from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import * as childService from "../../services/childService"
import { formatDate } from "../../utils/dateUtils";


export default function ChildDetailsModal({
    ...child
}) 
{
    const location = useLocation();
    const navigate = useNavigate();
    const [childDetails, setChildDetails] = useState({});
    console.log(childDetails);
    console.log(location.pathname);

    const { child_id } = useParams();

    useEffect(() => {
        childService.getOne(child_id)
        .then(result => setChildDetails(result))
        .catch((err) => {
            console.log(err);
            navigate('/children');
        });
        
    }, [child_id]);
    // useEffect(() => {
    //     fetch(`http://localhost:3030/jsonstore/children/${child_id}`)
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error('Not found');
    //             }

    //             return res.json();
    //         })
    //         .then(setChildDetails)
    //         .catch((err) => {
    //             navigate('/children');
    //         });
    // }, [child_id]);


    return (
        <div className="overlay">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="detail-container">
                <header className="headers">
                    <h2>{childDetails.firstName} </h2>
                    <button className="btn close" >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                        className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor"
                        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                        </path>
                    </svg>
                    </button>
                </header>
                <div className="content">
                    <div className="image-container">
                    <img src={childDetails.imageUrl} alt={childDetails.firstName}
                        className="image" />
                    </div>
                    <div className="user-details">
                    <p>User Id: <strong>{childDetails._id}</strong></p>
                    <p>
                        Full Name:
                        <strong> {childDetails.firstName}  {childDetails.lastName}</strong>
                    </p>
                    <p>Email: <strong>{childDetails.email}</strong></p>
                    <p>Phone Number: <strong>{childDetails.phoneNumber}</strong></p>
                    <p>
                        Address:
                        {/* Защото при зареждането имаме празен стейт и childDetails.address is undefined */}
                        <strong>{childDetails.address?.country}, {childDetails.address?.city}, {childDetails.address?.street} {childDetails.address?.streetNumber} </strong>
                    </p>

                    <p>Created on: <strong>{formatDate(childDetails.createdAt)}</strong></p>
                    <p>Modified on: <strong>{formatDate(childDetails.updatedAt)}</strong></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}




    // console.log(childDetails.address.city);
    