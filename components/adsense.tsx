import React from "react";
import AdSense from "react-ssr-adsense";

function Adsense1() {
  return (
    <div className="flex justify-center py-4">
      <AdSense
        client="ca-pub-2936243013421317"
        slot="9874799090"
        style={{ width: 336, height: 280, display: "inline-block" }}
        format=""
      />
    </div>
  );
}

function Adsense2() {
  return (
    <div className="flex justify-center py-4">
      <AdSense
        client="ca-pub-2936243013421317"
        slot="5543320775"
        style={{ width: 300, height: 250, display: "inline-block" }}
        format=""
      />
    </div>
  );
}

function Adsense3() {
  return (
    <div className="flex justify-center py-4">
      <AdSense
        client="ca-pub-2936243013421317"
        slot="6919325087"
        style={{ width: 320, height: 50, display: "inline-block" }}
        format=""
      />
    </div>
  );
}
export { Adsense1, Adsense2, Adsense3 };
