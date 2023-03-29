import Wrapper from "@/components/shaired/Wrapper";
import Button from "./button";
import QuaterBox from "@/components/shaired/QuaterBox";

const coreTracks: any = () => {
  const header = "Core Courses \n (Common in All Specializations):";

  const coreTrackData = [
    {
      decription: "CS-101: Object-Oriented Programming using TypeScript",
      header: "Quarter I",
      number: 1,
    },
    {
      decription:
        "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      header: "Quarter II",
      number: 2,
    },
    {
      decription:
        "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      header: "Quarter III",
      number: 1,
    },
  ];
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-sm">
          <h4 className="text-green-800 text-lg font-bold mb-3">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold whitespace-pre-line ">{header}</h2>
          <p className="mt-4 text-lg text-slate-600">
            Every participant of the program will start by completing the <br />{" "}
            following three core courses:
          </p>
          <Button text="learn More" />
        </div>
        {/* boxex */}
        <div className="my-20 flex gap-x-4">
          {coreTrackData.map((item, i) => (
       
        <QuaterBox key={item.number} header={item.header} decprition={item.decription} number={i+1} haveBorder={true}/>
       
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default coreTracks;
