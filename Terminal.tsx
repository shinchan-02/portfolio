import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-8 lg:mt-0 font-mono text-sm shadow-2xl rounded-lg overflow-hidden border border-slate-700 bg-[#0f172a]">
      {/* Terminal Header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-slate-400 text-xs">satyam@production-server:~</div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 text-slate-300 space-y-2 h-64 overflow-y-auto custom-scrollbar">
        <div className="flex gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-100">whoami</span>
        </div>
        <div className="text-slate-400 pl-4">
          Satyam Agrawal<br/>
          Sr. SRE / DevOps Engineer<br/>
          Location: India (Remote Ready)
        </div>

        <div className="flex gap-2 pt-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-100">cat skills.txt | grep "Expert"</span>
        </div>
        <div className="text-slate-400 pl-4">
          AWS, Kubernetes, Terraform,<br/>
          CI/CD (Jenkins/GitLab),<br/>
          Observability (Prometheus/Grafana)
        </div>

        <div className="flex gap-2 pt-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-100">./run_deployment.sh --production</span>
        </div>
        <div className="pl-4">
          <span className="text-yellow-500">Initializing Terraform...</span><br/>
          <span className="text-blue-500">Provisioning EKS Cluster...</span><br/>
          <span className="text-green-500">Deployment Successful! (99.99% Uptime)</span>
        </div>
         <div className="flex gap-2 pt-2 animate-pulse">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="w-2 h-5 bg-slate-400 inline-block align-middle"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
