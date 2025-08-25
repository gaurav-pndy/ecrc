import React from "react";
import WhatWeDoHero from "../components/WhatWeDo/WhatWeDoHero";
import WhatWeDoDetails from "../components/WhatWeDo/WhatWeDoDetails";
import ProjectDetails from "../components/WhatWeDo/ProjectDetails";

const WhatWeDo = () => {
  return (
    <div className="overflow-hidden">
      <WhatWeDoHero />
      <WhatWeDoDetails />
      <ProjectDetails />
    </div>
  );
};

export default WhatWeDo;
