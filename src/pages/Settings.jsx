import React from 'react';

const Settings = () => {
    const handleSave = () => {
        alert('Settings saved!');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Settings</h1>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Username:
                        <input type="text" placeholder="Enter your username" />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Email:
                        <input type="email" placeholder="Enter your email" />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Notifications:
                        <input type="checkbox" />
                    </label>
                </div>
                <button type="button" onClick={handleSave}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default Settings;