import React from 'react';
import { Receipt } from 'lucide-react';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

interface InvoiceDetailsFormData {
  currency: string;
  items: InvoiceItem[];
  notes: string;
}

interface InvoiceDetailsFormProps {
  data: InvoiceDetailsFormData;
  onChange: (data: Partial<InvoiceDetailsFormData>) => void;
}

export function InvoiceDetailsForm({ data, onChange }: InvoiceDetailsFormProps) {
  const addItem = () => {
    onChange({
      items: [...data.items, { description: '', quantity: 1, price: 0 }]
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Receipt className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Invoice details</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Currency
        </label>
        <select
          value={data.currency}
          onChange={(e) => onChange({ currency: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Items</h3>
        <div className="space-y-4">
          {data.items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => {
                    const newItems = [...data.items];
                    newItems[index].description = e.target.value;
                    onChange({ items: newItems });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Item description"
                />
              </div>
              <div className="col-span-3">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const newItems = [...data.items];
                    newItems[index].quantity = Number(e.target.value);
                    onChange({ items: newItems });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Qty"
                />
              </div>
              <div className="col-span-3">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => {
                    const newItems = [...data.items];
                    newItems[index].price = Number(e.target.value);
                    onChange({ items: newItems });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Price"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={addItem}
          className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          + Add item
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notes
        </label>
        <textarea
          value={data.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Additional notes..."
        />
      </div>
    </div>
  );
}