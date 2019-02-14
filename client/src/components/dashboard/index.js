import React from 'react'
import UserLayout from './../../hoc/UserLayout';
import Button from './../utiles/Button'
const Dashboard = ({userData}) => {
  return (
    <UserLayout>
          <div className="user_nfo_panel">
              <h1> User Information </h1>
              <div>
                  <span>Name: {userData.user.name}</span>
                  <span>Lastname : {userData.user.lastname} </span>
                  <span>Email : {userData.user.email} </span>:
              </div>
              <Button 
                type="default"
                title="Edit account info"
                linkTo="/user/user-profile"/>
          </div> 
          <div className="user_nfo_panel">
                <h1>History of purcheses</h1>
                <div className="user_product_block_wrapper">
                        history
                </div>
          </div>
    </UserLayout>
  )
}

export default Dashboard;