import React from "react";
// useNavigate() ডায়নামিক ইউআরএল সেট করা জন্য
import { useNavigate } from "react-router-dom";
import './Service.css'

const Service = ({service}) => {

  const { title, picture, description, id } = service;
  // useNavigate() ডায়নামিক ইউআরএল সেট করা জন্য
  const navigate = useNavigate();

  const navigateToServiceDetail = id => {
    // useNavigate() ডায়নামিক আইডি সেট করা জন্য
    navigate(`/service/${id}`);
  }
  
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={picture} className="card-img-top" alt="pic" />
          <div className="card-body">
            <h4  className="card-title"> {title} </h4>
            <p className="card-text"> {description} </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary" >Service Dtail</button>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
