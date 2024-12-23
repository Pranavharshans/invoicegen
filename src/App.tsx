import React, { useState } from 'react';
import { CompanyForm } from './components/forms/CompanyForm';
import { ClientForm } from './components/forms/ClientForm';
import { InvoiceDetailsForm } from './components/forms/InvoiceDetailsForm';
import { PaymentForm } from './components/forms/PaymentForm';
import { FormNavigation } from './components/FormNavigation';
import { Box } from 'lucide-react';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    taxId: '',
    clientEmail: '',
    clientName: '',
    clientAddress: '',
    clientCity: '',
    clientState: '',
    clientZip: '',
    clientCountry: '',
    clientTaxId: '',
    currency: 'USD',
    items: [{ description: '', quantity: 1, price: 0 }],
    notes: '',
    walletAddress: '',
    network: 'ethereum',
    asset: 'usdc',
  });

  const handleFormChange = (changes: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...changes }));
  };

  const forms = [
    <CompanyForm data={formData} onChange={handleFormChange} />,
    <ClientForm data={formData} onChange={handleFormChange} />,
    <InvoiceDetailsForm data={formData} onChange={handleFormChange} />,
    <PaymentForm data={formData} onChange={handleFormChange} />,
  ];

  return (
    <div className="h-screen bg-[#f5f5f5] flex">
      <div className="w-[460px] h-full p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Box className="w-8 h-8 p-1.5 bg-black text-white rounded-lg" />
          <div>
            <h1 className="text-base font-medium">Crypto Invoice Generator</h1>
            <p className="text-xs text-gray-500">By Acctual</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm flex-1 flex flex-col">
          <div className="p-6">
            {forms[currentStep]}
          </div>
          <div className="p-6 pt-0 mt-auto border-t border-gray-100">
            <FormNavigation
              currentStep={currentStep}
              totalSteps={forms.length}
              onNext={() => setCurrentStep(prev => Math.min(prev + 1, forms.length - 1))}
              onPrev={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
              nextLabel={currentStep === forms.length - 1 ? 'Invoice terms' : 'Next'}
              prevLabel={currentStep === 0 ? '' : currentStep === 1 ? 'Your company' : 'Back'}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white" />
    </div>
  );
};

export default App;
