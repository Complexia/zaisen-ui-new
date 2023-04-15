// components/PromotionForm.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Params {
  name: string;
  description: string;
  numberOfClaims: string;
  content: string;
  contractAddress: string;
}

const PromotionForm = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { contractAddress } = router.query;
  const [params, setParams] = useState<Params>({
    name: '',
    description: '',
    numberOfClaims: '',
    content: '',
    contractAddress: '',
  });






  params.contractAddress = contractAddress ? contractAddress.toString() : '';
  console.log(contractAddress);

  const handleInputChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSearch = () => {
    console.log(params);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4 ">
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
            <label className="block text-2xl font-bold mb-2">Content:</label>
            <input
              type="text"
              name="content"
              value={params.content}
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
      <div className="mt-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            onClick={handleNext}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Next
          </button>
        ) : (

          //@ts-ignore
          <Link href={{pathname: '/create-lens-post', query: params}} shallow>
              <button
                onClick={handleSearch}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Submit
              </button>
          </ Link>
        )}
      </div>
    </div>
  );

}

const CreatePromotion = () => {
  return (
    <div className="flex flex-grow h-screen ">
      <main className="items-center justify-center w-full text-center text-black">
        <h1 className="">Create Promotion</h1>
        <PromotionForm />
      </main>
    </div>
  );
};

export default CreatePromotion;

