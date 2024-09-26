
import QuaterBox from "../shaired/QuaterBox";
import Wrapper from "../shaired/Wrapper";
import Button from "./button";


const CoreTracks = () => { // Capitalized component name for consistency
  const header = "Core Courses \n (Common in All Specializations):";

  const coreTrackData = [
    {
      description: "CS-101: Object-Oriented Programming using TypeScript", // Corrected spelling
      header: "Quarter I",
      number: 1,
    },
    {
      description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform", // Corrected the repeated word 'Cloud'
      header: "Quarter II",
      number: 2,
    },
    {
      description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development", // Corrected spelling
      header: "Quarter III",
      number: 3, // Updated to reflect the correct number
    },
  ];

  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-sm">
          <h4 className="text-green-800 text-lg font-bold mb-3">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-4 text-lg text-slate-600">
            Every participant of the program will start by completing the <br />
            following three core courses:
          </p>
          <Button text="Learn More" />
        </div>
        
        {/* Boxes */}
        <div className="my-20 flex flex-col sm:flex-row gap-4"> {/* Adjusted for responsive stacking */}
          {coreTrackData.map((item, i) => (
            <QuaterBox 
              key={item.number} 
              header={item.header} 
              description={item.description} // Corrected spelling
              number={item.number} // Corrected to use the number from data
              haveBorder={true} 
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks; // Capitalized component name for consistency
