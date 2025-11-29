'use client';

import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
    const storedUser = localStorage.getItem('user');
   console.log('Stored User:', storedUser);
  useEffect(() => {
    // Only runs in browser
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="p-10 text-black">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {user ? (
        <p>Welcome, {user.name || user.email || 'User'}!</p>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
}
