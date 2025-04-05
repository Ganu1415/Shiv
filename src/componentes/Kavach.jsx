import React, { useEffect, useState } from "react";

const Kavach = () => {
      const [kavach, setKavach] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:8050/kavach")
          .then((res) => res.json())
          .then((data) => setKavach(data));
      }, []);
    
  return (
   <>
   {kavach.map((kavach) => (
        <div key={kavach.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-blue-600 text-xl md:text-3xl mb-5">{kavach.title}</h2>
          {/* <p className="text-gray-700 text-md-xl">{mantra.text}</p> */}
          
          {/* Dynamically Show Additional Properties */}
          {Object.values(kavach.text).map((key) => 
            key !== "id" && key !== "title" && key !== "text" ? (
              <p key={key} className="text-xs md:text-xl mb-1 text-red-600 bg-red-100 md:bg-transparent rounded-md md:rounded-none px-3 py-1">
                <strong>{key}</strong> {kavach[key]}
              </p>
            ) : null
          )}
        </div>
      ))}
   </>
  )
}

export default Kavach