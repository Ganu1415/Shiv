import React, { useEffect, useState } from "react";

const Mantra = () => {
      const [mantras, setMantra] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:8050/mantras")
          .then((res) => res.json())
          .then((data) => setMantra(data));
      }, []);
    
  return (
   <>
   {mantras.map((mantra) => (
        <div key={mantra.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-blue-600 text-3xl mb-5">{mantra.title}</h2>
          {/* <p className="text-gray-700 text-md-xl">{mantra.text}</p> */}
          
          {/* Dynamically Show Additional Properties */}
          {Object.values(mantra.text).map((key) => 
            key !== "id" && key !== "title" && key !== "text" ? (
              <p key={key} className="text-xs md:text-xl mb-1 text-red-600 bg-red-100 md:bg-transparent rounded-md md:rounded-none px-3 py-1">
                <strong>{key}</strong> {mantra[key]}
              </p>
            ) : null
          )}
        </div>
      ))}
   </>
  )
}

export default Mantra