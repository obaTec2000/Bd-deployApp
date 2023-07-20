import React from "react";
import "./style.css"


const Search = () => {
    const profiles = [
        { name: "Taiwo Junior", photo: "/images/p1.png" },
        { name: "Josephine Phina", photo: "/images/p2.png" },
        { name: "KingsTech", photo: "/images/p3.png" },
        { name: "Topex", photo: "/images/p4.png" },
        { name: "Mr Joseph", photo: "/images/p5.png" },
        { name: "John", photo: "/images/p6.png" },
        { name: "BD Admin", photo: "/images/p1.png" },
       
      ];
  return (
    <div>
         <div className="space-y-4 text-white items-center mt-5">
            {profiles.map((profile, ind) => (
              <div className="flex items-center" key={ind}>
                <div className="relative w-12 mx-5 flex">
                  <img
                    src={profile.photo}
                    className="object-cover rounded-full"
                    alt=""
                    style={{zIndex:0}}
                  />
                </div>
                <p className="  font-bold font-outfit mx-2 text-sm">
                  {profile.name}
                  <div className="flex">
                <p className="text-xs">@gabrieljones</p>
              </div>
                </p>
              </div>
            ))}
          </div>
          <div className="text-white text-center mt-10">
            <h1>
            See all results
            </h1>
          </div>
    </div>
    
  
  );
};

export default Search;