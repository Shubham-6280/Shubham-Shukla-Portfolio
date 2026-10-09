import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Play, 
  RotateCcw, 
  Database, 
  Table, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { sampleZeptoDataset, sampleSqlPlaygroundQueries } from '../data/portfolioData';

export default function SqlSandbox() {
  const [selectedPreset, setSelectedPreset] = useState(sampleSqlPlaygroundQueries[0]);
  const [customSql, setCustomSql] = useState(sampleSqlPlaygroundQueries[0].sql);
  const [results, setResults] = useState(null);
  const [executing, setExecuting] = useState(false);
  const [executionTime, setExecutionTime] = useState(12);

  // Run query simulation against the sample dataset
  const executeQuery = (preset = selectedPreset) => {
    setExecuting(true);
    setTimeout(() => {
      let output = [];
      const data = [...sampleZeptoDataset];

      if (preset.id === 'q1') {
        // Top Discounted Products
        output = data
          .sort((a, b) => b.discountPercent - a.discountPercent)
          .slice(0, 5)
          .map(d => ({
            name: d.name,
            mrp: `₹${d.mrp}`,
            discount: `${d.discountPercent}%`,
            selling_price: `₹${d.discountedSellingPrice}`
          }));
      } else if (preset.id === 'q2') {
        // High MRP Out of Stock
        output = data
          .filter(d => d.outOfStock && d.mrp > 300)
          .sort((a, b) => b.mrp - a.mrp)
          .map(d => ({
            name: d.name,
            category: d.category,
            mrp: `₹${d.mrp}`,
            stock_status: 'OUT OF STOCK'
          }));
      } else if (preset.id === 'q3') {
        // Category Estimated Revenue
        const catMap = {};
        data.forEach(d => {
          catMap[d.category] = (catMap[d.category] || 0) + (d.discountedSellingPrice * d.availableQuantity);
        });
        output = Object.entries(catMap)
          .map(([cat, rev]) => ({
            category: cat,
            estimated_revenue: `₹${rev.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`
          }))
          .sort((a, b) => parseFloat(b.estimated_revenue.replace(/[^0-9.]/g, '')) - parseFloat(a.estimated_revenue.replace(/[^0-9.]/g, '')));
      } else if (preset.id === 'q4') {
        // Value for Money (Price/Gram)
        output = data
          .filter(d => d.weightInGms >= 100)
          .map(d => ({
            name: d.name,
            weight_gms: `${d.weightInGms}g`,
            price: `₹${d.discountedSellingPrice}`,
            price_per_gram: `₹${(d.discountedSellingPrice / d.weightInGms).toFixed(3)}/g`
          }))
          .sort((a, b) => parseFloat(a.price_per_gram.slice(1)) - parseFloat(b.price_per_gram.slice(1)))
          .slice(0, 5);
      } else if (preset.id === 'q5') {
        // Weight Logistics Tiers (CASE)
        output = data.slice(0, 6).map(d => {
          let tier = 'Bulk';
          if (d.weightInGms < 1000) tier = 'Low';
          else if (d.weightInGms < 5000) tier = 'Medium';
          return {
            name: d.name,
            weight_gms: `${d.weightInGms}g`,
            weight_tier: tier
          };
        });
      }

      setResults(output);
      setExecutionTime(Math.floor(Math.random() * 8) + 8);
      setExecuting(false);
    }, 250);
  };

  // Initial load execution
  React.useEffect(() => {
    executeQuery(sampleSqlPlaygroundQueries[0]);
  }, []);

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setCustomSql(preset.sql);
    executeQuery(preset);
  };

  return (
    <section id="sandbox" className="py-24 relative overflow-hidden bg-[#03060d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> Interactive Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Interactive SQL Console
            </h2>
          </div>
          <div className="heading-line hidden md:block" />
        </div>

        <p className="text-slate-400 text-sm max-w-2xl mb-12 font-light">
          Test real queries written for the Zepto dataset. Click any analytical preset below to run the structured query against the live mock database and inspect the results.
        </p>

        {/* Preset Query Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {sampleSqlPlaygroundQueries.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                selectedPreset.id === preset.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'bg-white/[0.03] text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>{preset.label}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window Container */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Terminal Window Header Bar */}
          <div className="px-5 py-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                mysql&gt; database: zepto_retail
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => executeQuery(selectedPreset)}
                disabled={executing}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{executing ? 'Executing...' : 'Run Query'}</span>
              </button>
            </div>
          </div>

          {/* SQL Editor Area */}
          <div className="p-5 bg-black/80 font-mono text-xs text-slate-200 border-b border-white/10 relative">
            <div className="text-[11px] text-slate-500 mb-2 flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>{selectedPreset.description}</span>
            </div>
            <pre className="text-cyan-300 leading-relaxed overflow-x-auto p-3 rounded-xl bg-black/50 border border-white/5">
              <code>{customSql}</code>
            </pre>
          </div>

          {/* Results Tabular View */}
          <div className="p-5 bg-[#070b16]">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> 
                <span>Query OK &bull; {results ? results.length : 0} rows returned ({executionTime}ms)</span>
              </span>
              <span className="text-[11px] text-slate-500">Sample Dataset: zepto_v2</span>
            </div>

            {results && results.length > 0 ? (
              <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/40">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      {Object.keys(results[0]).map((key) => (
                        <th key={key} className="px-4 py-2.5 text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
                          {key.replace(/_/g, ' ')}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {results.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        {Object.values(row).map((val, cIdx) => (
                          <td key={cIdx} className="px-4 py-2.5 text-slate-300 whitespace-nowrap">
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-8 text-center text-xs font-mono text-slate-500">
                Executing query...
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
