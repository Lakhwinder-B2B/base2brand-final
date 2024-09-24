/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./demo.css";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors: string[] = [
  "#ff5f45",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow"
];

interface FullpageSection {
  text: string;
}

const DemoPage: React.FC = () => {
  const [sectionsColor] = useState<string[]>([...originalColors]);
  const [fullpages] = useState<FullpageSection[]>([
    { text: "Section 1" },
    { text: "Section 2" },
    { text: "Section 3" }
  ]);

  const onLeave = (origin: any, destination: any, direction: any) => {
    console.log("onLeave", { origin, destination, direction });
    // handle the event, arguments are mapped as per fullpage.js
  };

  if (!fullpages.length) {
    return null;
  }

  const Menu: React.FC = () => (
    <div
      className="menu"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100
      }}
    ></div>
  );

  return (
    <div className="App">
      <Menu />
      <ReactFullpage
        debug={true} /* Debug logging */
        // Required when using extensions
        pluginWrapper={pluginWrapper}
        licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation={true}
        anchors={["firstPage", "secondPage", "thirdPage"]}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        credits={{ enabled: false }} // Hide credits
        render={() => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ text }) => (
              <div key={text} className={SEL}>
                <div className="slide">
                  <h3>{text}</h3>
                </div>
                <div className="slide">
                  <h3>{text}</h3>
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default DemoPage;
