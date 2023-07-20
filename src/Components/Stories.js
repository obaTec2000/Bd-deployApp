import React from "react";
import BD_Samuel from "../../src/assests/BD_@Samuel.png";


class Stories extends React.Component {
  render() {
    let stories = [
      { src: "./images/stories1.png", title: "stories1" },
      { src: "./images/stories2.png", title: "stories2" },
      { src: "./images/stories3.png", title: "stories3" },
      { src: "./images/images (1).jpg", title: "mike" },
      { src: "./images/stories3.png", title: "stories3" },
    ];
    return (

      <div className="flex items-center  h-36 px-2 mt-4 sm:mt-8">
        <div className="w-full   flex justify-between space-x-1 sm:space-x-4 p-1 mx-auto  sm:max-w-[40rem] px-2  ">
          <div>
            <img src="./images/create.png"
              alt="create"
              className="relative h-36 w-40"
            />
          </div>
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative flex  h-32 sm:w-40 sm:h-36 rounded-[1rem]"
            >
              <div className="flex ">

                <img
                  src={story.src}
                  title={story.title}
                  alt="story"
                  className="flex object-cover rounded-[1rem] border-4 w-40 border-[#BE9524] "

                />
                <img src={BD_Samuel} alt="Sanuel" className="w-8 h-8 rounded-full absolute top-32 mx-7" />
              </div>
            </div>
          ))}
        </div>
      </div>


    );
  }
}

export default Stories;
