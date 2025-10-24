import React from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationHome(){
  return (
    <div>
      <h2 className="text-3xl font-semibold">Registration</h2>
      <p className="mt-2 text-gray-300">Choose an option below.</p>
      <div className="mt-6 flex gap-4">
        <Link to="/registration/fee" className="tech-card">Fee</Link>
        <Link to="/registration/code-of-conduct" className="tech-card">Code of Conduct</Link>
      </div>
      <div className="mt-8 tech-card">
        <h3 className="font-semibold">Quick register</h3>
        <RegistrationForm />
      </div>
    </div>
  )
}

function RegistrationForm(){
  const [s, setS] = React.useState({ name:'', email:'', org:'', feePaid:false, status:'' });
  const submit = async (e)=>{
    e.preventDefault();
    setS({...s, status:'saving'});
    try{
      const res = await fetch('/api/register', { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({ name:s.name, email:s.email, organization:s.org, feePaid:s.feePaid }) });
      const j = await res.json();
      if (j.success) setS({ name:'', email:'', org:'', feePaid:false, status:'saved' });
      else setS({...s, status:'error'});
    }catch(err){ setS({...s, status:'error'}); }
  };
  return (
    <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3 max-w-md mx-auto">
      <input className="p-3 rounded-md bg-black/60 border border-white/5" placeholder="Full name" value={s.name} onChange={e=>setS({...s, name:e.target.value})} required />
      <input className="p-3 rounded-md bg-black/60 border border-white/5" placeholder="Email" value={s.email} onChange={e=>setS({...s, email:e.target.value})} required />
      <input className="p-3 rounded-md bg-black/60 border border-white/5" placeholder="Organization" value={s.org} onChange={e=>setS({...s, org:e.target.value})} />
      <label className="flex items-center gap-2"><input type="checkbox" checked={s.feePaid} onChange={e=>setS({...s, feePaid:e.target.checked})} /> Fee paid</label>
      <button className="px-4 py-2 rounded-md" style={{background:'linear-gradient(90deg,#7c3aed,#ec4899)'}}>Submit</button>
      <div className="text-sm text-gray-400">{s.status}</div>
    </form>
  )
}
