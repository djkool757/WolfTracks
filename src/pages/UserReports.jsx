import React from 'react';

const UserReports = () => {
    const reports = [
        { id: 1, name: 'Monthly Report', date: '2023-10-01' },
        { id: 2, name: 'Weekly Report', date: '2023-10-08' },
        { id: 3, name: 'Daily Report', date: '2023-10-10' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Reports</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{report.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserReports;