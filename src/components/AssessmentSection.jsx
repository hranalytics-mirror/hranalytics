import React from 'react';
import { CheckCircle, FileText, Lock, Download, BarChart2, PieChart } from 'lucide-react';

const AssessmentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-gray-300"></div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">TOOLS& ASSESSMENTS</h2>
          <div className="h-px w-12 bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Individuals Card */}
          <div className="bg-white border border-green-100 rounded-2xl p-8 shadow-lg shadow-green-50/50 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10"></div>
            <div>
              <p className="text-gray-500 text-sm font-medium mb-2">For Individuals( B2C )</p>
              <h3 className="text-2xl font-bold text-accent mb-4">HR Analytics Self Check</h3>
              <p className="text-gray-600 mb-8 max-w-sm text-sm leading-relaxed">
                Assess your skills, identify your strengths and get personalized insights.
              </p>
            </div>
            <button className="bg-accent hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-green-200 transition-colors w-max text-sm">
              TAKE SELF CHECK
            </button>
          </div>

          {/* Enterprises Card */}
          <div className="bg-pink-50/30 border border-pink-100 rounded-2xl p-8 shadow-lg shadow-pink-50/50 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-bl-full -z-10 opacity-50"></div>
            
            <div className="flex-1">
              <p className="text-gray-500 text-sm font-medium mb-2">For Enterprises( B2B )</p>
              <h3 className="text-2xl font-bold text-secondary mb-4">HR Analytics Maturity Assessment</h3>
              <p className="text-gray-600 mb-8 max-w-sm text-sm leading-relaxed">
                Evaluate your organization's HR analytics maturity and get a detailed report.
              </p>
              <button className="bg-secondary hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-pink-200 transition-colors w-max text-sm">
                START ASSESSMENT
              </button>
            </div>

            {/* Placeholder Illustration */}
            <div className="w-48 h-48 relative flex-shrink-0">
               <div className="absolute inset-0 bg-blue-100 rounded-xl shadow-inner flex flex-col items-center justify-center p-4">
                  <div className="w-full flex gap-2 mb-4 items-end justify-center h-16">
                    <div className="w-4 bg-blue-400 rounded-t h-8"></div>
                    <div className="w-4 bg-blue-500 rounded-t h-12"></div>
                    <div className="w-4 bg-blue-600 rounded-t h-16"></div>
                  </div>
                  <div className="w-20 h-20 rounded-full border-8 border-pink-400 border-r-yellow-400 border-b-green-400 flex items-center justify-center bg-white">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-8">
          <div className="flex items-center gap-4">
            <div className="text-accent">
              <CheckCircle size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-gray-800 font-bold text-sm">Easy to Use</h4>
              <p className="text-gray-500 text-xs">Quick& simple process</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-accent">
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-gray-800 font-bold text-sm">Data- driven insights</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-secondary">
              <Lock size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-gray-800 font-bold text-sm">Secure& Confidential</h4>
              <p className="text-gray-500 text-xs">Your data is safe with us</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-blue-500">
              <Download size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-gray-800 font-bold text-sm">Download Report</h4>
              <p className="text-gray-500 text-xs">Instant PDF report</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AssessmentSection;
