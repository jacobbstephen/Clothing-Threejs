import React, { useState } from 'react';
import { useModel } from './ModelContext';
import { models } from './ModelContext';





const ModelPicker = ({ onSelectModel }) => {
    const { selectedModel, setSelectedModel } = useModel()
    const [isOpen, setIsOpen] = useState(false)
    const handleModelChange = (model) => {
        setSelectedModel(model);
        setIsOpen(false)
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    // return (

        
    //     <div className='absolute left-full ml-3 flex-1 flex flex-row'>
    //     {models.map((model) => (
    //         <div
    //         key={model.name}
    //         style={{
    //             margin: '10px',
    //             padding: '10px',
    //             border: '1px solid black',
    //             cursor: 'pointer'
    //         }}
    //         onClick={() => handleModelChange(model)}
    //         >
    //         {model.name}
    //         </div>
    //     ))}
    //     </div>
    // );

    return (
        <div className="relative">
          <button 
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <div className="flex items-center">
              <img
                src={`./public/images/${selectedModel.name}.png`}
                alt={selectedModel.name}
                className="w-10 h-10 mr-2"
              />
              
            </div>
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          { isOpen &&
            <div className="absolute top-0 left-full ml-3 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="grid grid-cols-2 gap-2 p-4 ml-8">
              {models.map((model) => (
                <div
                  key={model.name}
                  onClick={() => handleModelChange(model)}
                  className="flex items-center hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={`/images/${model.name}.png`}
                    alt={model.name}
                    className="w-10 h-10"
                  />
                  
                </div>
              ))}
            </div>
          </div>
            }
        </div>
        
      );
};

export default ModelPicker;
