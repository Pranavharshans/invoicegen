import React from 'react';
import { QrCode } from 'lucide-react';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

interface InvoicePreviewProps {
  companyName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  items: InvoiceItem[];
}

export function InvoicePreview({ companyName, email, address, city, state, items }: InvoicePreviewProps) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const tax = subtotal * 0.1; // 10% tax rate
  const total = subtotal + tax;

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">{companyName || 'Your Company'}</h1>
          <p className="text-gray-400">{email || 'company@example.com'}</p>
          <p className="text-gray-400">{address || '123 Business St'}</p>
          <p className="text-gray-400">{city} {state}</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-bold mb-1">INVOICE</h2>
          <p className="text-gray-400">INV-{String(Math.floor(Math.random() * 10000)).padStart(4, '0')}</p>
          <p className="text-gray-400">Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="mb-8">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="text-left py-2">Description</th>
              <th className="text-center py-2">Qty</th>
              <th className="text-right py-2">Price</th>
              <th className="text-right py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2">{item.description}</td>
                <td className="text-center py-2">{item.quantity}</td>
                <td className="text-right py-2">${item.price.toFixed(2)}</td>
                <td className="text-right py-2">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <div className="w-1/3">
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-700 font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
            <p className="text-gray-400">Bank: Example Bank</p>
            <p className="text-gray-400">Account: XXXX-XXXX-XXXX-1234</p>
            <p className="text-gray-400">Reference: INV-{String(Math.floor(Math.random() * 10000)).padStart(4, '0')}</p>
          </div>
          <div className="text-gray-400">
            <QrCode size={100} />
          </div>
        </div>
      </div>
    </div>
  );
}