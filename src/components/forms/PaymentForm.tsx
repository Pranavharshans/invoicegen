import React from 'react';
import { Wallet } from 'lucide-react';

interface PaymentFormData {
  walletAddress: string;
  network: string;
  asset: string;
}

interface PaymentFormProps {
  data: PaymentFormData;
  onChange: (data: Partial<PaymentFormData>) => void;
}

export function PaymentForm({ data, onChange }: PaymentFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Wallet className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Payment method</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Wallet Address
        </label>
        <input
          type="text"
          value={data.walletAddress}
          onChange={(e) => onChange({ walletAddress: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="0x..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Network
        </label>
        <select
          value={data.network}
          onChange={(e) => onChange({ network: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="ethereum">Ethereum</option>
          <option value="polygon">Polygon</option>
          <option value="bsc">BSC</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Asset
        </label>
        <select
          value={data.asset}
          onChange={(e) => onChange({ asset: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="usdc">USDC</option>
          <option value="usdt">USDT</option>
          <option value="dai">DAI</option>
        </select>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Receive this payment directly in your bank account
        </p>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Set up now →
        </a>
      </div>
    </div>
  );
}