import React, { useState } from 'react';

const Dropdown = ({ product }) => {
  const items = [
    { id: 5, name: 'R5' },
    { id: 10, name: 'R10' },
    { id: 20, name: 'R20' },
    { id: 50, name: 'R50' },
    { id: 100, name: 'R100' },
    { id: 200, name: 'R200' },
  ];

  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const selectedIndex = parseInt(e.target.value);
    const selectedItem = items[selectedIndex];
    setSelectedIds([...selectedIds, selectedItem.id]);
  };

  const handlePayment = async () => {
    if(selectedIds.reduce((a, b) => a + b, 0) < product.price) {
      alert('Insufficient funds. Please insert more coins/notes.');
      return;
    }
    if (selectedIds.length === 0) {
      alert('Please insert at least one coin/note before paying.');
      return;
    }

    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:8080/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { 
            productId: product.id,
            cashInserted: selectedIds
          }
        ),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (response.status === 200) {
      setResponseMessage(`${data.message}. Change Returned: R${data.changeReturned}. Enjoy your ${data.productName}!`);
      }
    } catch (error) {
      console.error('Payment failed:', error);
      setResponseMessage(`Payment failed. Please try again. ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Payment:</h3>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          -- Insert Coins/Notes --
        </option>
        {items.map((item, index) => (
          <option key={index} value={index}>
            {item.name} (ID: {item.id})
          </option>
        ))}
      </select>

      <h4>Entered Coins/Notes:</h4>
      <ul>
        {selectedIds.map((id, idx) => (
          <li key={idx}>{id}</li>
        ))}
      </ul>

      <button onClick={handlePayment} disabled={loading} style={{ marginTop: '10px' }}>
        {loading ? 'Processing...' : 'Pay'}
      </button>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Dropdown;
