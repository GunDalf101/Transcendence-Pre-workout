import React from 'react'

const TableRows = () => {
  return (
    <>
        <div className="hidden md:block overflow-auto">
          <table className="w-full text-left text-gray-200 bg-gray-900 rounded-lg shadow-lg border-collapse pixel-font">
            <thead>
              <tr className="bg-gray-700 text-green-400">
                <th className="py-3 px-4 border-b-4 border-gray-600">Date</th>
                <th className="py-3 px-4 border-b-4 border-gray-600">Opponent</th>
                <th className="py-3 px-4 border-b-4 border-gray-600">Result</th>
                <th className="py-3 px-4 border-b-4 border-gray-600">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700 transition duration-200">
                <td className="py-4 px-4 border-b border-gray-600">2024-11-12</td>
                <td className="py-4 px-4 border-b border-gray-600">AI</td>
                <td className="py-4 px-4 border-b border-gray-600 text-green-500">Win</td>
                <td className="py-4 px-4 border-b border-gray-600">10 - 8</td>
              </tr>
              <tr className="hover:bg-gray-700 transition duration-200">
                <td className="py-4 px-4 border-b border-gray-600">2024-11-11</td>
                <td className="py-4 px-4 border-b border-gray-600">Player 2</td>
                <td className="py-4 px-4 border-b border-gray-600 text-red-500">Loss</td>
                <td className="py-4 px-4 border-b border-gray-600">7 - 10</td>
              </tr>
              <tr className="hover:bg-gray-700 transition duration-200">
                <td className="py-4 px-4 border-b border-gray-600">2024-11-10</td>
                <td className="py-4 px-4 border-b border-gray-600">AI</td>
                <td className="py-4 px-4 border-b border-gray-600 text-green-500">Win</td>
                <td className="py-4 px-4 border-b border-gray-600">10 - 3</td>
              </tr>
            </tbody>
          </table>
        </div>
    
        <div className="block md:hidden space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg shadow-lg pixel-font">
            <details className="text-gray-200">
              <summary className="cursor-pointer text-lg font-bold text-green-400">2024-11-12 - AI</summary>
              <div className="mt-4 text-gray-300">
                <p><strong>Result:</strong> Win</p>
                <p><strong>Score:</strong> 10 - 8</p>
              </div>
            </details>
          </div>
    
          <div className="bg-gray-700 p-4 rounded-lg shadow-lg pixel-font">
            <details className="text-gray-200">
              <summary className="cursor-pointer text-lg font-bold text-green-400">2024-11-11 - Player 2</summary>
              <div className="mt-4 text-gray-300">
                <p><strong>Result:</strong> Loss</p>
                <p><strong>Score:</strong> 7 - 10</p>
              </div>
            </details>
          </div>
    
          <div className="bg-gray-700 p-4 rounded-lg shadow-lg pixel-font">
            <details className="text-gray-200">
              <summary className="cursor-pointer text-lg font-bold text-green-400">2024-11-10 - AI</summary>
              <div className="mt-4 text-gray-300">
                <p><strong>Result:</strong> Win</p>
                <p><strong>Score:</strong> 10 - 3</p>
              </div>
            </details>
          </div>
        </div>
    </>
  )
}

export default TableRows
