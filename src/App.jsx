import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>สวัสดีครับ! 👋</h1>
      <p style={{ fontSize: '18px' }}>Hello my name is Pawapo Nukuleerumrung</p>
    </div>
  );
}

function Certificates() {
  const certs = [
    { name: 'Certificate in Cybersecurity Basics', year: 2024 },
    { name: 'TryHackMe: Complete Beginner Path', year: 2025 },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Certificates</h2>
      <div style={{ marginTop: '16px' }}>
        {certs.map((cert, index) => (
          <div key={index} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '12px' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{cert.name}</p>
            <p style={{ fontSize: '14px', color: '#666' }}>{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Kali Linux', 'Burp Suite'];

  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Skills</h2>
      <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ fontSize: '16px', marginBottom: '6px' }}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ padding: '16px', backgroundColor: '#f0f0f0', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
        <ul style={{ display: 'flex', gap: '16px', listStyle: 'none', padding: 0, margin: 0 }}>
          <li><Link to="/" style={{ textDecoration: 'none', fontWeight: '500' }}>Home</Link></li>
          <li><Link to="/certificates" style={{ textDecoration: 'none', fontWeight: '500' }}>Certificates</Link></li>
          <li><Link to="/skills" style={{ textDecoration: 'none', fontWeight: '500' }}>Skills</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
