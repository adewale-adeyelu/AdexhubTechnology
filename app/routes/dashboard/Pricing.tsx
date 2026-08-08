export default function Pricing() {
  return (
    <section className="relative lg:left-64 lg:w-[calc(100%-16rem)] w-full px-5 pt-28 pb-6 dark:bg-gray-900 min-h-screen">
      
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full whitespace-nowrap text-sm text-left">
            
            {/* Header */}
            <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
                <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Network</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3">Web</th>
                <th className="px-4 py-3">API</th>
                <th className="px-4 py-3">Validity</th>
                <th className="px-4 py-3">Status</th>
                </tr>
            </thead>

            {/* Body */}
            <tbody className="text-gray-600">
                
                <tr className="border-t bg-gray-100 hover:bg-gray-200 transition">
                <td className="px-4 py-3 font-medium">7</td>
                <td className="px-4 py-3">MTN</td>
                <td className="px-4 py-3">SME</td>
                <td className="px-4 py-3">1GB</td>
                <td className="px-4 py-3">₦554.00</td>
                <td className="px-4 py-3">₦550.00</td>
                <td className="px-4 py-3">30days</td>
                <td className="px-4 py-3">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    Active
                    </span>
                </td>
                </tr>

                <tr className="border-t bg-white hover:bg-gray-100 transition">
                <td className="px-4 py-3 font-medium">8</td>
                <td className="px-4 py-3">MTN</td>
                <td className="px-4 py-3">SME</td>
                <td className="px-4 py-3">2GB</td>
                <td className="px-4 py-3">₦1,100.00</td>
                <td className="px-4 py-3">₦1,050.00</td>
                <td className="px-4 py-3">30days</td>
                <td className="px-4 py-3">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    Active
                    </span>
                </td>
                </tr>

                <tr className="border-t bg-gray-50 hover:bg-gray-100 transition">
                <td className="px-4 py-3 font-medium">44</td>
                <td className="px-4 py-3">MTN</td>
                <td className="px-4 py-3">SME</td>
                <td className="px-4 py-3">3GB</td>
                <td className="px-4 py-3">₦1,300.00</td>
                <td className="px-4 py-3">₦1,200.00</td>
                <td className="px-4 py-3">30days</td>
                <td className="px-4 py-3">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    Active
                    </span>
                </td>
                </tr>

            </tbody>
            </table>
        </div>

    </section>
  );
}