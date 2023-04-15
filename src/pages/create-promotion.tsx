// components/PromotionForm.tsx
import { useState } from 'react';

interface Params {
  name: string;
  description: string;
  numberOfClaims: string;
  sismoGroupId: string;
}

const PromotionForm = () => {
  const [step, setStep] = useState(1);
  const [params, setParams] = useState<Params>({
    name: '',
    description: '',
    numberOfClaims: '',
    sismoGroupId: '',
  });

  const handleInputChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSearch = () => {
    console.log(params);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Name of Promotion:</label>
            <input
              type="text"
              name="name"
              value={params.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 2:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Description of Promotion:</label>
            <input
              type="text"
              name="description"
              value={params.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 3:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Number of Claims:</label>
            <input
              type="text"
              name="numberOfClaims"
              value={params.numberOfClaims}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 4:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Sismo Group ID (Optional):</label>
            <input
              type="text"
              name="sismoGroupId"
              value={params.sismoGroupId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
      {renderStep()}
      {step < 4 ? (
        <button onClick={handleNext} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400">Next</button>
      ) : (
        <button onClick={handleSearch} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400">Submit</button>
      )}
    </div>
  );
};

const CreatePromotion = () => {
    return (
        <div className='h-screen text-black font-bold'>
            <PromotionForm />
        </div>
    )
}

export default CreatePromotion;
