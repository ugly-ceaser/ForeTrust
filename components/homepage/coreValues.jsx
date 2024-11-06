import hero from './css/hero.module.css';

import React from 'react';

const CoreValues = () => {
    return (
        <div className={hero.coreValues}>
          <h1 class="mb-4 mt-6 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-dark">Our Core Values</h1>

            <div className={hero.cardContainer}>

                <div class="flex flex-col   shadow-sm border-slate-200 rounded-lg my-6 w-60">
                    <div class="m-2.5 overflow-hidden rounded-md h-50 flex justify-center items-center">
                        <img class="w-full h-full object-cover" src="./images/integrity.png" alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-1 text-xl font-semibold text-slate-800">
                            Integrity
                        </h4>
                        
                        <p class="text-base text-slate-600 mt-4 font-light ">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                    
                </div>

                <div class="flex flex-col  shadow-sm  border-slate-200 rounded-lg my-6 w-60">
                    <div class="m-2.5 overflow-hidden rounded-md h-50 flex justify-center items-center">
                        <img class="w-full h-full object-cover" src="./images/innovation.png" alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-1 text-xl font-semibold text-slate-800">
                            Innovation
                        </h4>
                       
                        <p class="text-base text-slate-600 mt-4 font-light ">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                    
                </div>

                <div class="flex flex-col  shadow-sm  border-slate-200 rounded-lg my-6 w-60">
                    <div class="m-2.5 overflow-hidden rounded-md h-50 flex justify-center items-center">
                        <img class="w-full h-full object-cover" src="./images/sustain2.png" alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-1 text-xl font-semibold text-slate-800">
                            Sustainability
                        </h4>
                        
                        <p class="text-base text-slate-600 mt-4 font-white ">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                    
                </div>

            </div>

        </div>
    )
};

export default CoreValues;