/* Replace empty lists with verified company details. Plain text is rendered safely.
   Owner: {name, role, bio, photo:"assets/owner-name.jpg"}
   Partner: {name, logo:"assets/bank-name.svg"} (logo is optional)
   Milestone: {date, title, description}
   Do not put confidential information in this public file. */
window.DREAM_CONTENT = {
  tagline: "", // Your approved tagline; blank keeps the proposed headline.
  owners: [],
  partners: [
  {
    "name": "Bank of Maharashtra",
    "logo": "assets/banks/bank-of-maharashtra.png"
  },
  {
    "name": "Central Bank of India",
    "logo": "assets/banks/central-bank-of-india.jpeg"
  },
  {
    "name": "Canara Bank",
    "logo": "assets/banks/canara-bank.png"
  },
  {
    "name": "HDFC Bank",
    "logo": "assets/banks/hdfc-bank.png"
  },
  {
    "name": "Bajaj Housing Finance",
    "logo": "assets/banks/bajaj-housing-finance.jpeg"
  },
  {
    "name": "Jio Finance",
    "logo": "assets/banks/jio-finance.jpeg"
  },
  {
    "name": "Tata Capital",
    "logo": "assets/banks/tata-capital.png"
  },
  {
    "name": "Axis Bank",
    "logo": "assets/banks/axis-bank.jpeg"
  },
  {
    "name": "ICICI Bank",
    "logo": "assets/banks/icici-bank.jpeg"
  }
],
  milestones: [],
  contact: {email: "", phone: "", whatsapp: "", address: "", hours: ""}
};
