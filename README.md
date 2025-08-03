
# 💻 Decentralized Banking UI

🚀 **Hackathon-Winning Project** • [🌐 Live Demo](https://decentralized-banking-ui-uh3s.vercel.app)

Frontend for a next-gen decentralized banking system combining traditional finance, AI, and blockchain.

---

## 🌟 Key Features

- 🔐 **OneKYC with ZKPs**: AI-powered onboarding using OCR, facial scan, and Zero-Knowledge Proofs for privacy-first identity.
- 💰 **RupeeX Stablecoin**: INR-pegged, fiat-backed ERC-20 token for secure and instant transactions.
- 🪪 **Reputation Passport**: Decentralized, shareable wallet storing your financial data, issued as Soulbound NFTs and DIDs.
- 📜 **Consent Ledger**: Tamper-proof history of data access using IPFS and Merkle Trees.
- 🎓 **Smart Loans**: Purpose-bound scholarships/loans usable only at verified institutions.
- 🤖 **CitiGPT**: AI assistant for investment guidance and smart contract interaction.

---

## ⚙️ Tech Stack

### 🧠 AI/ML
- OCR, Facial Recognition
- Langchain + OpenAI
- RAG + AI Agents (`CitiGPT`)

### 🔐 Privacy
- Zero-Knowledge Proofs (Semaphore)
- Merkle Trees, IPFS

### 💻 Frontend
- React + Vite
- Tailwind CSS, Heroicons
- React Router, Framer Motion
- Wallet Integration: MetaMask / WalletConnect

---

## 🛠️ Getting Started (Frontend Only)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/decentralized-banking-ui.git
cd decentralized-banking-ui

# 2. Install dependencies (with legacy peer support)
npm install --legacy-peer-deps

# 3. Start the development server
npm run dev

# 4. Or build and start in production
npm run build
npm start
````

---

## 📂 Project Structure

```
.
├── public/             # Static files
├── src/
│   ├── assets/         # Illustrations and media
│   ├── components/     # Reusable UI components
│   ├── context/        # React Contexts
│   ├── pages/          # Main screens (Login, Dashboard, etc.)
│   ├── App.jsx         # Main App layout
│   └── main.jsx        # ReactDOM entry
├── package.json
└── README.md
```

---

## 🛡️ Backend + Smart Contract Stack (Overview)

* **Smart Contracts**: Solidity, Web3.py, Ganache
* **Backend**: Node.js, Express, MongoDB, dotenv
* **Blockchain Interaction**: `ethers.js`, MetaMask

---

## 🤝 Contributing

Pull requests are welcome! For significant changes, please open an issue first.

---

## 📄 License

This project is licensed under the **MIT License**.

---

> “Transform your banking experience with decentralized trust, privacy, and intelligence.”

```

---
