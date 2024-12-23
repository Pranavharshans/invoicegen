import React from 'react';

interface CompanyFormData {
  email: string;
  companyName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  taxId: string;
}

interface CompanyFormProps {
  data: CompanyFormData;
  onChange: (data: Partial<CompanyFormData>) => void;
}

export function CompanyForm({ data, onChange }: CompanyFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium mb-4">Your company</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
              placeholder="company@example.com"
            />
          </div>

          <p className="text-xs text-gray-500">
            We'll fill the billing details automatically if we find the company.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Billing details</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Company name</label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => onChange({ companyName: e.target.value })}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Logo</label>
            <button className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-400 text-center">
              +
            </button>
          </div>

          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              type="text"
              value={data.address}
              onChange={(e) => onChange({ address: e.target.value })}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">City</label>
              <input
                type="text"
                value={data.city}
                onChange={(e) => onChange({ city: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">State</label>
              <input
                type="text"
                value={data.state}
                onChange={(e) => onChange({ state: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">ZIP Code</label>
              <input
                type="text"
                value={data.zip}
                onChange={(e) => onChange({ zip: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Country</label>
              <input
                type="text"
                value={data.country}
                onChange={(e) => onChange({ country: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Tax ID</label>
            <input
              type="text"
              value={data.taxId}
              onChange={(e) => onChange({ taxId: e.target.value })}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}