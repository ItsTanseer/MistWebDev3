import React, { useState } from 'react';

export default function MISTForm() {
  const [name, setName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showRedButton, setShowRedButton] = useState(true);

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handleRegNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,9}$/.test(value)) {
      setRegNumber(value);
    }
  };

  const handleGreenClick = () => {
    setShowRedButton(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-500 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-bold text-3xl">MIST</div>
        </div>
        <div className="text-black text-sm">
          Name, Reg Number, Contact Number of person submitting
        </div>
      </div>

      {/* Main Content */}
      <div className="flex p-8 gap-8">
        {/* Left Side - Form */}
        <div className="flex-1 space-y-8">
          {/* Name Input */}
          <div className="flex items-center gap-4">
            <div className="w-64">
              <div className="text-sm mb-1">Enter Name</div>
              <div className="text-xs text-gray-400">(Should be letters only)</div>
            </div>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="flex-1 bg-gray-500 text-black px-4 py-3 outline-none"
            />
          </div>

          {/* Reg Number Input */}
          <div className="flex items-center gap-4">
            <div className="w-64">
              <div className="text-sm mb-1">Enter Reg Number</div>
              <div className="text-xs text-gray-400">(Should be 9 numbers only)</div>
            </div>
            <input
              type="text"
              value={regNumber}
              onChange={handleRegNumberChange}
              maxLength={9}
              className="flex-1 bg-gray-500 text-black px-4 py-3 outline-none"
            />
          </div>

          {/* Birthday Input */}
          <div className="flex items-center gap-4">
            <div className="w-64">
              <div className="text-sm mb-1">Enter birthday</div>
              <div className="text-xs text-gray-400">(Use react calendar form validation here)</div>
            </div>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="flex-1 bg-gray-500 text-black px-4 py-3 outline-none"
            />
          </div>

          
          <div className="flex items-center gap-4 mt-12">
            <div className="w-64">
              <div className="text-sm mb-1">Is webdev the best domain? :)</div>
              <div className="text-xs text-gray-400">
                (On clicking green here, the red on the sheet disappears and only green yes visible)
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleGreenClick}
                className="greenBtn"
              />
              <button className="redBtn" />
            </div>
          </div>
        </div>

        
        <div className="w-96 bg-white text-black p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold">MIST Mancomm Member 69</h2>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm">My name is</div>
              <div className="text-lg font-medium mt-1">{name || ''}</div>
            </div>

            <div>
              <div className="text-sm">My registration number is</div>
              <div className="text-lg font-medium mt-1">{regNumber || ''}</div>
            </div>

            <div>
              <div className="text-sm">My birthday is on DD/MM/YYY (Use data entered by user in calendar)</div>
              <div className="text-lg font-medium mt-1">
                {birthday ? new Date(birthday).toLocaleDateString('en-GB') : ''}
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm text-center mb-4">Is webdev the best domain? :)</div>
              <div className="flex flex-col gap-3">
                <button className="greenBtn">
                  YES
                </button>
                {showRedButton && (
                  <button className="redBtn">
                    NO
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}