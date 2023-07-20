import Navbar from "../Components/Navbar";
import Feed from "../Components/Feed";

export default function Homepage() {
  return (
    <div>
       <div className="w-auto h-auto">
          {/*Navbar */}
          <Navbar />
        </div>
      <div>
          {/* Feed */}
          <Feed />
      </div>
    </div>
   
  );
}
