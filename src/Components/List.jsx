import React, { useEffect, useState } from 'react';
function List() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState([]);
//   let user = [{ name, age, email}];
  useEffect(()=>{
    console.log("Good Morning"); 
  },[name])
  useEffect(()=>{
    console.log("Good Afternoon"); 
  },[age])
  useEffect(()=>{
    console.log("Good Evening"); 
  },[email])
  const userSub = () => {
    setSubmit([{ name, age, email}]);
  };
  return (
<div>
    <div className="d-flex flexwrap gap-5">
      <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter your age" 
        onChange={(e) => setAge(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter your email" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={userSub}>Submit</button>
      </div>
      <div>
        {submit.map((user, index) => (
          <div key={index} >
            <pre>Name: {user.name}     Age: {user.age}    Email: {user.email}</pre>
            {/* <p>Age: {user.age}</p>
            <p>Email: {user.email}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
export default List;
