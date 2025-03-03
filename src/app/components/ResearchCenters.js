import React from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

const ResearchCenters = () => {
  return (
    <div className="relative bg-[#111111]/80 backdrop-blur-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* DH.arc Section */}
          <a 
            href="https://centri.unibo.it/dharc/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="flex flex-col items-center space-y-6 p-8 rounded-xl bg-[#252525] hover:bg-[#303030] transition-colors h-full shadow-md">
              <div className="h-[120px] flex items-center justify-center w-full">
                <Image
                  src={getImagePath('/images/dharc_logo.png')}
                  alt="DH.arc Logo"
                  width={150}
                  height={150}
                  className="transition-transform group-hover:scale-105 object-contain"
                  style={{ maxHeight: '120px' }}
                />
              </div>
              <div className="text-center mt-auto">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Digital Humanities Advanced Research Centre</h3>
                <p className="text-gray-400">University of Bologna</p>
                <p className="mt-4 text-sm text-primary">Part of the Bologna Digital Humanities ecosystem</p>
              </div>
            </div>
          </a>

          {/* DHLab Section */}
          <a 
            href="https://dhlab.nl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group h-full"
          >
            <div className="flex flex-col items-center space-y-6 p-8 rounded-xl bg-[#252525] hover:bg-[#303030] transition-colors h-full shadow-md">
              <div className="h-[120px] flex items-center justify-center w-full">
                <Image
                  src={getImagePath('/images/dhlab_logo.png')}
                  alt="DHLab Logo"
                  width={180}
                  height={70}
                  className="transition-transform group-hover:scale-105 object-contain"
                  style={{ maxHeight: '120px' }}
                />
              </div>
              <div className="text-center mt-auto">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Digital Humanities Lab</h3>
                <p className="text-gray-400">KNAW Humanities Cluster</p>
                <p className="mt-4 text-sm text-primary">Inter-institutional research group</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchCenters; 