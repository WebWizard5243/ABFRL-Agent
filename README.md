# ABFRL AI Conversational Sales Agent

An **AI-driven conversational sales agent** designed to deliver a **unified, personalized shopping experience** across digital and physical retail channels.  
This prototype demonstrates how a **Master Agent** orchestrates multiple **specialized worker agents** to guide customers seamlessly from discovery to checkout and post-purchase support.

---

## 🚀 Problem Statement

Retail customer experiences are often **fragmented** across:
- Web and mobile applications  
- Messaging platforms (e.g., WhatsApp)  
- In-store interactions  

Sales associates have limited bandwidth, resulting in:
- Inconsistent recommendations  
- Missed upsell and cross-sell opportunities  
- Lower Average Order Value (AOV) and conversion rates  

---

## 💡 Solution Overview

This project implements an **Agentic AI Conversational Sales System** that:

- Acts like a **top-tier sales associate**
- Maintains **session continuity** across interactions
- Delivers **natural, personalized dialogue**
- Supports the complete shopping lifecycle:
  - Product discovery
  - Recommendations
  - Checkout
  - Fulfillment
  - Post-purchase support

The system uses **LLMs where reasoning is required** and **deterministic logic where reliability and speed are critical**.

---

## 🧠 Architecture Summary

### Master–Worker Agent Pattern

- **Master Sales Agent**
  - Central entry point for all conversations
  - Detects user intent
  - Orchestrates worker agents
  - Handles conversational continuation (`continue`)

- **Worker Agents**
  - Recommendation Agent (Gemini-powered)
  - Inventory Agent
  - Payment Agent
  - Fulfillment Agent
  - Post-Purchase Agent

- **Session Store**
  - Persists conversational context
  - Stores preferences and last active intent

---

## 🧩 Key Features

- ✅ Omnichannel-ready conversational design  
- ✅ Natural language recommendations using **Google Gemini 2.5 Pro**  
- ✅ Context-aware continuation ("continue where we left off")  
- ✅ Intelligent upsell and cross-sell flows  
- ✅ Deterministic handling of checkout and logistics  
- ✅ Demo-safe error handling and fallbacks  

---

## 🤖 Agent Responsibilities

### 🧭 Master Agent
- Routes incoming messages to the appropriate worker agent
- Maintains conversational state
- Manages continuation logic

### 👔 Recommendation Agent
- Powered by **Google Gemini 2.5 Pro**
- Generates personalized fashion recommendations
- Optimized for relevance and AOV uplift

### 📦 Inventory Agent
- Simulates real-time product availability
- Supports home delivery, store pickup, and reservation flows

### 💳 Payment Agent
- Handles checkout confirmation
- Simulates payment success and retry scenarios

### 🚚 Fulfillment Agent
- Manages delivery and store pickup options
- Confirms timelines and next steps

### 📦 Post-Purchase Agent
- Order tracking
- Returns and exchanges
- Customer reassurance and support

---

## 🛠️ Tech Stack

### Frontend
- React.js (Chat-based UI)

### Backend
- Node.js
- Express.js

### AI
- Google Gemini 2.5 Pro (reasoning-heavy tasks)
- Gemini Flash (lightweight conversational continuation)

### State Management
- In-memory session store (prototype)

---

## 🧪 Demo Flow

Try the following inputs in order:

```text
i want something formal
continue
is this available in store
checkout
home delivery
continue
track my order
i want to return this
