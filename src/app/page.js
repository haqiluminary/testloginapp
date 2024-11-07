"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [name, setName] = useState(null);

    useEffect(() => {
        const username = Cookies.get('name');
        if (username) setName(username);
    }, []);

    const handleLogout = () => {
      Cookies.remove('name'); // Remove the username cookie
      setName(null); // Clear the username state
      window.location.reload(); // Refresh the page
  };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">
                {name ? `Welcome back, ${name}!` : 'Welcome to the Home Page'}
            </h1>

            {name && (
                <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                >
                    Log Out
                </button>
            )}
        </div>
    );
}
