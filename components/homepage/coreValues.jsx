import hero from './css/hero.module.css';
import React from 'react';

const CoreValues = () => {
    return (
        <div className={hero.coreValues}>
          <h1 className="mb-4 mt-6 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Our Core Values</h1>

            <div className={`${hero.cardContainer} flex flex-wrap justify-center`}>
                {/* Integrity Card */}
                <div className="flex flex-col shadow-sm border-slate-200 rounded-lg my-4 mx-2 w-60 md:w-72">
                    <div className="m-2.5 overflow-hidden rounded-md h-50 flex justify-center items-center">
                        <img className="w-full h-full object-cover" src="./images/integrity.png" alt="Integrity" />
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="mb-1 text-xl font-semibold text-slate-800">
                            Integrity
                        </h4>
                        <p className="text-base text-slate-600 mt-2 font-light">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                </div>

                {/* Innovation Card */}
                <div className="flex flex-col shadow-sm border-slate-200 rounded-lg my-4 mx-2 w-60 md:w-72">
                    <div className="m-2.5 overflow-hidden rounded-md h-50 flex justify-center items-center">
                        <img className="w-full h-full object-cover" src="./images/innovation.png" alt="Innovation" />
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="mb-1 text-xl font-semibold text-slate-800">
                            Innovation
                        </h4>
                        <p className="text-base text-slate-600 mt-2 font-light">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                </div>

                {/* Sustainability Card */}
                <div className="flex flex-col shadow-sm border-slate-200 rounded-lg my-4 mx-2 w-60 md:w-72">
                    <div className="m-2.5 overflow-hidden rounded-md h-50 flex justify-center items-center">
                        <img className="w-full h-full object-cover" src="./images/sustain2.png" alt="Sustainability" />
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="mb-1 text-xl font-semibold text-slate-800">
                            Sustainability
                        </h4>
                        <p className="text-base text-slate-600 mt-2 font-light">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
