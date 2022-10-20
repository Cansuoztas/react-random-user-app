import React from 'react'
import  Phone  from "./assets/phone.svg";
import  Mail  from "./assets/email.svg";
import  Location  from "./assets/location.svg";


const Assets = ({user,getUser}) => {
  console.log(user);
  const{name,phone,location,picture,email,dob,registered}=user
  // console.log(name)
  return (
<> 
    <div className='container'>
        <div className='ilk'>
        <img className='image' src={picture?.large} alt="" />
        <h2>{name?.title}{name?.first}</h2>
        </div>
        <div className='ilk'>
        <img src={Mail}  width="30px"  /> 
        <p>{email}</p>
        </div>
        <div className='ilk '>
        <img src={Phone} width="30px" alt="" />
        <p> {phone}</p></div>
        <div className='ilk'>
        <img src={Location} width="30px" alt="" />
         <p>{location?.state} {location?.country}</p>
         </div>
         
    <div className='footer'>
     <p>Age: {dob?.age}</p>
     <br />
     <p>Registered Date: {registered?.date.slice(0,10)}</p>
    </div>
   
    </div> 
    <button onClick={getUser}>Random User</button>
  </>
  )
}

export default Assets