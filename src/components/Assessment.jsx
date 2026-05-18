import React, { useState } from "react";
import assessment1 from "../assets/assesment1.png";
import assessment2 from "../assets/assesment2.png";
import attritionicon from "../assets/attritionicon.svg";
import engagementicon from "../assets/engagementicon.svg";
import headcounticon from "../assets/headcounticon.svg";
import performanceicon from "../assets/performanceicon.svg";
import payicon from "../assets/payicon.svg";

import {
  CheckCircle,
  FileText,
  Lock,
  Download,
  BarChart2,
  PieChart,
} from "lucide-react";

const Assessment = () => {
  const [individual, setIndividual] = useState(false);
  const [enterprise, setEnterprise] = useState(false);

  function setForEnterprise() {
    setEnterprise(true);
    setIndividual(false);
  }

  function setForIndividual() {
    setEnterprise(false);
    setIndividual(true);
  }
  return (
    <div id="assessments" className="max-w-7xl mx-auto pt-4">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-12 bg-gray-300"></div>
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">
          TOOLS& ASSESSMENTS
        </h2>
        <div className="h-px w-12 bg-gray-300"></div>
      </div>
      <div className="flex  gap-6">
        <div className="flex rounded-lg border border-gray-300 px-6 py-4">
          <div className="flex flex-col">
            {" "}
            <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
              For Individuals( B2C )
            </p>{" "}
            <p className="text-2xl font-bold tracking-wide text-accent mb-1">
              HR Analytics Self Check
            </p>{" "}
            <p className="text-gray-600 mb-2 max-w-sm font-bold tracking-wide text-sm leading-relaxed">
              Assess your skills, identify your strengths and get personalized
              insights.
            </p>
            <button
              className="bg-accent hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-green-200 transition-colors w-max text-sm"
              onClick={setForIndividual}
            >
              TAKE SELF CHECK
            </button>
          </div>
          <img
            src={assessment1}
            alt=""
            className="h-[180px] w-[250px] object-contain"
          />{" "}
        </div>
        <div className="flex rounded-lg border border-gray-300 px-6 py-4">
          <div className="flex flex-col">
            {" "}
            <p className="text-gray-500 text-sm font-medium mb-1 tracking-wide">
              For Enterprises( B2B )
            </p>
            <h3 className="text-2xl font-bold text-secondary mb-1 tracking-wide">
              HR Analytics Maturity Assessment
            </h3>
            <p className="text-gray-600 mb-2 max-w-sm text-sm tracking-wide font-bold leading-relaxed">
              Evaluate your organization's HR analytics maturity and get a
              detailed report.
            </p>
            <button
              className="bg-secondary hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-pink-200 transition-colors w-max text-sm"
              onClick={setForEnterprise}
            >
              START ASSESSMENT
            </button>
          </div>
          <img
            src={assessment2}
            alt=""
            className="h-[180px] object-contain"
          />{" "}
        </div>
      </div>
      {/* for indi */}
      {individual && (
        <div className="flex flex-col items-center w-[80%] mx-auto  mt-4 bg-green-100 rounded-lg p-4">
          <h1 className="text-2xl font-bold tracking-wide text-green-600 mb-4">
            For Individuals
          </h1>
          <div className="flex gap-4 justify-between w-full">
            <a href="https://survey.zohopublic.in/zs/YCCjGV">
              <div className="flex flex-col items-center text-center">
                <img src={attritionicon} alt="" className="mb-2 w-[60px]" />
                <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                  Attrition Analytics
                </p>
              </div>{" "}
            </a>
            <a href="https://survey.zohopublic.in/zs/aNCjRn">
              <div className="flex flex-col items-center text-center">
                <img src={engagementicon} alt="" className="mb-2 w-[60px]" />
                <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                  Engagement Analytics
                </p>
              </div>
            </a>
            <a href="https://survey.zohopublic.in/zs/LrCjLO">
              <div className="flex flex-col items-center text-center">
                <img src={headcounticon} alt="" className="mb-2 w-[60px]" />
                <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                  Headcount Analytics
                </p>
              </div>
            </a>
            <a href="https://survey.zohopublic.in/zs/97CjuK">
              <div className="flex flex-col items-center text-center">
                <img src={performanceicon} alt="" className="mb-2 w-[60px]" />
                <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                  Performance Analytics
                </p>
              </div>
            </a>
            <a href="https://survey.zohopublic.in/zs/jaCjgd">
              <div className="flex flex-col items-center text-center">
                <img src={payicon} alt="" className="mb-2 w-[60px]" />
                <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                  Pay Analytics
                </p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* for enterpriss */}
      {enterprise && (
        <div className="flex flex-col items-center w-[80%] mx-auto  mt-4 bg-pink-100 rounded-lg p-4">
          <h1 className="text-2xl font-bold tracking-wide text-pink-600 mb-4">
            For Enterprises
          </h1>
          <div className="flex gap-4 justify-between w-full">
            <div className="flex flex-col items-center text-center">
              <img src={attritionicon} alt="" className="mb-2 w-[60px]" />
              <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                Attrition Analytics
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={engagementicon} alt="" className="mb-2 w-[60px]" />
              <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                Engagement Analytics
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={headcounticon} alt="" className="mb-2 w-[60px]" />
              <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                Headcount Analytics
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={performanceicon} alt="" className="mb-2 w-[60px]" />
              <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                Performance Analytics
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={payicon} alt="" className="mb-2 w-[60px]" />
              <p className="text-gray-500 text-sm tracking-wide font-medium mb-1">
                Pay Analytics
              </p>
            </div>
          </div>
        </div>
      )}

      {/* others */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-8">
        <div className="flex items-center justify-center gap-4">
          <div className="text-accent">
            <CheckCircle size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-gray-800 font-bold text-sm">Easy to Use</h4>
            <p className="text-gray-500 text-xs">Quick& simple process</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="text-accent">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-gray-800 font-bold text-sm">
              Data- driven insights
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="text-secondary">
            <Lock size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-gray-800 font-bold text-sm">
              Secure& Confidential
            </h4>
            <p className="text-gray-500 text-xs">Your data is safe with us</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="text-blue-500">
            <Download size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-gray-800 font-bold text-sm">Download Report</h4>
            <p className="text-gray-500 text-xs">Instant PDF report</p>
          </div>
        </div>
      </div>
      <div className="h-px mx-16 mt-3 bg-gray-300"></div>
    </div>
  );
};

export default Assessment;
