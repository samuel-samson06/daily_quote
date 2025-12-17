# Daily Quote Email Service

A small backend project built to explore cron jobs, external APIs, and email delivery.

This service sends a motivational quote to my email every day at 6:00 AM.

---

## How It Works

1. A scheduled cron job runs daily at 6:00 AM.
2. The server fetches a random quote from the DummyJSON Quotes API.
3. If the external API fails, the system falls back to a local quote generator (`node-quotegen`).
4. The selected quote is sent to my email using the Resend email API.

---

## Tech Stack

- Node.js
- Express
- node-cron
- Resend (Email API)
- Axios
- DummyJSON Quotes API
- node-quotegen (fallback)

---

## Why I Built This

I built this project to better understand:
- Cron job scheduling in Node.js
- Handling external API failures with fallbacks
- Integrating third-party email services
- Running background jobs on a hosted server

---

## Future Improvements

- Store previously sent quotes to avoid duplicates
- Support multiple email recipients
- Add configurable delivery times
