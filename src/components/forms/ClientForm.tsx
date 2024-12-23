import React from 'react';
import { Users } from 'lucide-react';

interface ClientFormData {
  clientEmail: string;
  clientName: string;
  clientAddress: string;
  clientCity: string;
  clientState: string;
  clientZip: string;
  clientCountry: string;
  clientTaxId: string;
}

interface ClientFormProps {
  data: ClientFormData;
  onChange: (data: Partial<ClientFormData>) => void;
}

export function ClientForm({ data, onChange }: ClientFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Your client</h2>
      </div>

      <p className="text-sm text-gray-500">We'll fill the billing details automatically if we find the company.</p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={data.clientEmail}
          onChange={(e) => onChange({ clientEmail: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="client@example.com"
        />
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Billing details</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company name
            </label>
            <input
              type="text"
              value={data.clientName}
              onChange={(e) => onChange({ clientName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              value={data.clientAddress}
              onChange={(e) => onChange({ clientAddress: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                value={data.clientCity}
                onChange={(e) => onChange({ clientCity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                value={data.clientState}
                onChange={(e) => onChange({ clientState: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                value={data.clientZip}
                onChange={(e) => onChange({ clientZip: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                value={data.clientCountry}
                onChange={(e) => onChange({ clientCountry: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}