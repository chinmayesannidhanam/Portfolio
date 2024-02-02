import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p=4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline-border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem50,Make sure that the import statement is correct, and t he file
          path points to the location where the 'About' component is defined.
          After making these adjustments, the errors should be resolved. If
          you're still facing issues, double-check the f ile paths and import
          statements in both index.js and App.js to ensure they are accurate.
        </p>
        <br />
        <p className="text-xl">
          Make sure that the import statement is correct, and the file path
          points to the location where the 'About' component is defined. After
          making these adjustments, the errors should be resolved. If you're
          still facing issues, double-check the file paths and import statements
          in both index.js and App.js to ensure they are accurate.
        </p>
      </div>
    </div>
  );
};

export default About;
