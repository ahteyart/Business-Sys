export interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
  complexity: "Simple" | "Medium" | "Advanced";
  estimatedTime: string;
  prompt: string;
  previewFeatures: string[];
  previewScreens: string[];
  color: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  departments: Department[];
}

export const industries: Industry[] = [
  {
    id: "retail",
    name: "Retail",
    icon: "🛍️",
    description: "Physical & multi-channel retail stores",
    color: "from-blue-500 to-blue-700",
    departments: [
      {
        id: "retail-pos",
        name: "Point of Sale (POS)",
        icon: "🏪",
        description: "Cashier interface with product search, cart, discounts, and receipt printing",
        complexity: "Medium",
        estimatedTime: "2-4 hours",
        color: "bg-blue-50 border-blue-200",
        previewFeatures: ["Product barcode scan", "Cart management", "Discount & promo codes", "Payment (cash/card/e-wallet)", "Receipt print/email", "Daily sales summary"],
        previewScreens: ["Cashier Dashboard", "Product Search", "Cart & Checkout", "Payment Screen", "Receipt View"],
        prompt: `Build a Point of Sale (POS) system for a retail store using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Product Search**: Search by name or barcode with instant results
- **Shopping Cart**: Add/remove items, adjust quantities, line item discounts
- **Payment Processing**: Support Cash, Card, and E-Wallet payment methods with change calculator
- **Discount System**: Apply percentage or fixed amount discounts, promo codes
- **Receipt**: Digital receipt preview with print functionality and email option
- **Sales Summary**: Today's totals, transaction count, top products widget

## Sample Data:
Include at least 20 sample products across categories: Electronics, Clothing, Food & Beverage, Household

## UI Requirements:
- Two-panel layout: product grid (left) + cart (right)
- Large touch-friendly buttons suitable for tablet use
- Clear color coding: green for available, red for out of stock
- Dark/light mode toggle
- Keyboard shortcuts: F1=search, F2=discount, F3=payment, Esc=cancel

## Tech Stack:
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide icons
- Local state management (no backend needed for prototype)

Make it production-ready with clean code, proper TypeScript types, and responsive design.`
      },
      {
        id: "retail-inventory",
        name: "Inventory Management",
        icon: "📦",
        description: "Track stock levels, low-stock alerts, purchase orders and supplier management",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-indigo-50 border-indigo-200",
        previewFeatures: ["Real-time stock levels", "Low stock alerts", "Purchase order creation", "Supplier directory", "Stock adjustment history", "Inventory reports"],
        previewScreens: ["Stock Dashboard", "Product List", "Purchase Orders", "Supplier Management", "Stock History"],
        prompt: `Build an Inventory Management System for a retail SME using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Dashboard**: Stock overview cards (total SKUs, low stock count, out-of-stock count, inventory value)
- **Product Catalog**: CRUD for products with SKU, category, cost price, selling price, current stock, reorder point
- **Stock Alerts**: Visual badge for low stock items, email notification simulation
- **Purchase Orders**: Create PO to suppliers, track status (draft/sent/received), receive stock
- **Supplier Management**: Supplier directory with contact info and order history
- **Stock Adjustments**: Manual adjustments with reason (damage, count correction, etc.)
- **Reports**: Stock valuation report, movement history, slow-moving items

## Sample Data:
50 sample products across 5 categories with realistic stock levels

## UI Requirements:
- Data table with sort, filter, and search
- Status badges with color coding
- Charts for stock value over time (use recharts)
- CSV export button

## Tech Stack:
- Next.js 14+ App Router
- TypeScript
- Tailwind CSS + shadcn/ui
- Recharts for charts
- React Hook Form for forms

Build with clean architecture and full TypeScript types.`
      },
      {
        id: "retail-crm",
        name: "Customer Loyalty Program",
        icon: "⭐",
        description: "Points system, customer tiers, redemption, and birthday rewards",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-yellow-50 border-yellow-200",
        previewFeatures: ["Points earning & redemption", "Customer tiers (Bronze/Silver/Gold)", "Birthday rewards", "Purchase history", "Loyalty card digital", "Campaign management"],
        previewScreens: ["Customer Profile", "Points Balance", "Rewards Catalog", "Transaction History", "Tier Progress"],
        prompt: `Build a Customer Loyalty Program system for a retail store using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Customer Registration**: Sign up with phone/email, digital loyalty card generation
- **Points System**: Earn points per RM spent (configurable rate), bonus points for categories
- **Tier Management**: Bronze (0-999 pts), Silver (1000-4999 pts), Gold (5000+ pts) with benefits per tier
- **Rewards Catalog**: Redeem points for discounts, free items, or vouchers
- **Birthday Rewards**: Auto-generate bonus points on customer birthday month
- **Transaction History**: Full history of earn/redeem per customer
- **Campaign Builder**: Create double-points periods, member-exclusive promos
- **Admin Dashboard**: Total members, points liability, tier distribution chart

## Sample Data:
100 sample customers with varied tier levels and transaction history

## UI Requirements:
- Beautiful loyalty card component with tier color coding
- Progress bar showing points to next tier
- Confetti animation on tier upgrade
- Mobile-first responsive design

## Tech Stack:
- Next.js 14+ App Router
- TypeScript, Tailwind CSS, shadcn/ui
- Recharts for member analytics

Full TypeScript types and clean component architecture.`
      },
      {
        id: "retail-hr",
        name: "HR & Payroll",
        icon: "👥",
        description: "Staff records, attendance tracking, leave management and salary computation",
        complexity: "Advanced",
        estimatedTime: "4-6 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Employee profiles", "Attendance clock-in/out", "Leave application & approval", "Payroll calculation", "Payslip generation", "Overtime tracking"],
        previewScreens: ["Employee Directory", "Attendance Sheet", "Leave Calendar", "Payroll Run", "Payslip Preview"],
        prompt: `Build an HR & Payroll Management System for a retail SME using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Employee Management**: Full profile (personal info, position, department, salary, documents), onboarding checklist
- **Attendance**: Daily clock-in/out log, late arrival flagging, attendance summary calendar
- **Leave Management**: Apply for annual/sick/emergency leave, approval workflow (manager approve/reject), leave balance tracker
- **Payroll Calculation**: Monthly payroll run with: basic salary + allowances + overtime - EPF - SOCSO - EIS - PCB tax
- **Payslip**: Professional payslip PDF view per employee
- **Reports**: Monthly payroll summary, attendance report, leave utilization

## Malaysian Compliance:
- EPF: Employee 11%, Employer 13% (or 12% for salary > RM5000)
- SOCSO: Employee 0.5%, Employer 1.75% (capped at RM4000)
- EIS: 0.2% each (capped at RM4000)
- PCB: Simplified progressive tax table

## Sample Data:
15 employees with 3 months of attendance and payroll history

## UI Requirements:
- Calendar view for attendance
- Payslip looks like a real formatted document
- Approval buttons with status workflow badges

## Tech Stack:
- Next.js 14+ App Router, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "retail-supplier",
        name: "Supplier Management",
        icon: "🤝",
        description: "Vendor database, price comparison, order tracking and payment terms",
        complexity: "Simple",
        estimatedTime: "2-3 hours",
        color: "bg-purple-50 border-purple-200",
        previewFeatures: ["Supplier directory", "Price list comparison", "Order history", "Payment terms tracker", "Performance rating", "Contact management"],
        previewScreens: ["Supplier List", "Supplier Profile", "Price Comparison", "Order History", "Performance Score"],
        prompt: `Build a Supplier Management System for a retail SME using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Supplier Directory**: Full company profile (name, contact, address, payment terms, product categories)
- **Product Price List**: Per-supplier pricing with effective dates, bulk discount tiers
- **Price Comparison**: Side-by-side comparison of same product across suppliers
- **Purchase History**: All orders per supplier with delivery performance tracking
- **Performance Scorecard**: On-time delivery %, quality rating, price competitiveness score
- **Payment Tracker**: Outstanding payables, payment due dates, aging report
- **Document Storage**: Upload supplier contracts, certifications (simulated)

## Sample Data:
20 suppliers with product catalogs and 6 months of order history

## UI Requirements:
- Supplier cards with performance badge (Preferred/Standard/Probation)
- Price comparison table with color-coded best price
- Payment aging chart

## Tech Stack:
- Next.js 14+ App Router, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  },
  {
    id: "fnb",
    name: "Food & Beverage",
    icon: "🍽️",
    description: "Restaurants, cafes, cloud kitchens & catering",
    color: "from-orange-500 to-red-600",
    departments: [
      {
        id: "fnb-pos",
        name: "Restaurant POS",
        icon: "🍕",
        description: "Table-based ordering, kitchen tickets, bill splitting and payment",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-orange-50 border-orange-200",
        previewFeatures: ["Table map floor plan", "Order taking by table", "Kitchen display system", "Bill splitting", "Payment & receipt", "Void & discount"],
        previewScreens: ["Table Floor Plan", "Order Entry", "Kitchen Display", "Bill View", "Payment Screen"],
        prompt: `Build a Restaurant Point of Sale (POS) system using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Floor Plan**: Interactive table map (dine-in), each table shows status (available/occupied/reserved) and seat count
- **Menu**: Categories (Appetizer, Main, Dessert, Drinks), item photos, prices, notes (e.g. spicy level)
- **Order Management**: Add items to table order, send to kitchen, mark items ready
- **Kitchen Display System (KDS)**: Real-time order tickets with time elapsed, mark individual items done
- **Billing**: View full bill per table, add service charge (10%) + SST (6%), bill splitting by amount or items
- **Payment**: Cash, card, e-wallet, split payment between methods
- **Void & Discount**: Manager pin required for void, apply discount with reason
- **Reports**: Daily revenue, popular items, table turnover rate

## Sample Data:
30-item menu, 20 tables, 10 active orders

## UI Requirements:
- Color-coded table statuses (green/red/yellow/blue)
- KDS shows timer turning red after 15 minutes
- Responsive: works on tablet for waitstaff, large screen for cashier

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Lucide icons`
      },
      {
        id: "fnb-reservation",
        name: "Table Reservation System",
        icon: "📅",
        description: "Online booking, waitlist management, and automated reminders",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-red-50 border-red-200",
        previewFeatures: ["Online booking form", "Availability calendar", "Waitlist management", "SMS/email reminders", "Walk-in queue", "Booking history"],
        previewScreens: ["Booking Calendar", "Reservation Form", "Waitlist View", "Admin Dashboard", "Table Assignment"],
        prompt: `Build a Table Reservation System for a restaurant using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Public Booking Page**: Date/time picker, party size, special requests, customer contact info
- **Availability Engine**: Show available time slots based on table capacity and current bookings (2-hour slot duration)
- **Admin Calendar**: Day/week view of all reservations, drag to reschedule
- **Waitlist**: Add walk-in customers to waitlist, notify when table ready
- **Reminders**: Simulate SMS/email reminder 24h and 2h before reservation
- **Check-in Flow**: Mark arrival, assign table, note no-shows
- **Analytics**: Booking conversion rate, peak hours heatmap, no-show rate

## Sample Data:
20 tables (2-8 pax), 2 weeks of booking history, 30 upcoming reservations

## UI Requirements:
- Beautiful public-facing booking widget (can be embedded)
- Calendar heatmap showing busy/quiet periods
- Notification toast for new bookings

## Tech Stack: Next.js 14+ App Router, TypeScript, Tailwind CSS, shadcn/ui, date-fns`
      },
      {
        id: "fnb-inventory",
        name: "Kitchen Inventory & Cost",
        icon: "🥩",
        description: "Recipe costing, ingredient stock, waste tracking and food cost percentage",
        complexity: "Advanced",
        estimatedTime: "4-6 hours",
        color: "bg-amber-50 border-amber-200",
        previewFeatures: ["Ingredient stock tracking", "Recipe builder & costing", "Food cost % calculator", "Waste log", "Supplier purchase orders", "Daily stock take"],
        previewScreens: ["Ingredient Stock", "Recipe Manager", "Cost Analysis", "Waste Log", "Purchase Orders"],
        prompt: `Build a Kitchen Inventory & Food Cost Management system for a restaurant using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Ingredient Master**: All ingredients with unit (kg/L/pcs), current stock, cost per unit, reorder level
- **Recipe Builder**: Create menu items by linking ingredients with quantities, auto-calculates food cost
- **Food Cost %**: Dashboard showing food cost % per dish and overall, target vs actual
- **Waste Log**: Daily waste entry by ingredient with reason (spoilage/prep waste/cooking error), cost impact
- **Stock Take**: Daily/weekly count sheet, variance from expected consumption
- **Purchase Orders**: Generate PO based on par levels, receive stock updates quantities
- **FIFO Costing**: Track ingredient batches with expiry dates

## Sample Data:
80 ingredients, 25 recipes, 1 month of purchase and waste history

## UI Requirements:
- Food cost % shown as gauge chart (green <30%, yellow 30-35%, red >35%)
- Recipe card with ingredient list and cost breakdown
- Waste heatmap by day of week

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "fnb-delivery",
        name: "Delivery Management",
        icon: "🛵",
        description: "Order dispatch, rider tracking, delivery zone management and performance",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-yellow-50 border-yellow-200",
        previewFeatures: ["Order queue board", "Rider assignment", "Delivery zone map", "ETA tracking", "Performance dashboard", "Customer notifications"],
        previewScreens: ["Order Queue", "Rider Map View", "Dispatch Panel", "Delivery History", "Rider Performance"],
        prompt: `Build a Delivery Management System for an F&B business using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Order Board**: Kanban board (New → Preparing → Ready → Dispatched → Delivered)
- **Rider Management**: Rider profiles, availability status, current assignment, contact info
- **Auto-Assignment**: Suggest nearest available rider based on zone (simulated)
- **Delivery Zones**: Visual zone map with base delivery fee per zone
- **Live Tracking**: Simulated rider location updates with ETA countdown
- **Customer Notifications**: SMS/push notification simulation at each status change
- **Performance Dashboard**: Average delivery time, rider efficiency, late delivery %, daily order volume

## Sample Data:
5 riders, 20 active orders, delivery zones on a city map

## UI Requirements:
- Order board with drag-and-drop between columns
- Map component using Leaflet.js with zone overlays
- Real-time ETA timer counting down

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Leaflet.js for maps`
      },
      {
        id: "fnb-staff",
        name: "Staff Scheduling",
        icon: "📋",
        description: "Shift roster, availability management, overtime tracking and labor cost",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Weekly shift roster", "Staff availability", "Shift swap requests", "Overtime alerts", "Labor cost calculator", "Attendance integration"],
        previewScreens: ["Weekly Roster", "Availability Grid", "Shift Swap Board", "Labor Cost View", "Clock In/Out"],
        prompt: `Build a Staff Scheduling System for a restaurant using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Weekly Roster**: Drag-and-drop schedule builder with shift blocks (Morning/Afternoon/Night)
- **Availability Management**: Staff submit unavailable dates, system prevents conflict scheduling
- **Role-based Scheduling**: Different roles (Chef, Server, Cashier, Cleaner) with min coverage rules
- **Shift Swap**: Staff request swap, system finds eligible replacement, manager approves
- **Overtime Tracker**: Flag shifts exceeding 8hrs/day or 48hrs/week, calculate OT premium
- **Labor Cost**: Daily/weekly labor cost vs revenue target (labor cost % gauge)
- **Clock In/Out**: Simple time-tracking with late arrival flagging

## Sample Data:
12 staff members, 3 roles, 4 weeks of schedule history

## UI Requirements:
- Calendar-style schedule grid with color-coded roles
- Conflict warnings shown in red overlay
- Export schedule as PDF/print view

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, dnd-kit for drag-drop`
      }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "🏭",
    description: "Production facilities, factories & fabrication shops",
    color: "from-slate-600 to-slate-800",
    departments: [
      {
        id: "mfg-production",
        name: "Production Planning",
        icon: "⚙️",
        description: "Work orders, production scheduling, Bill of Materials and capacity planning",
        complexity: "Advanced",
        estimatedTime: "5-7 hours",
        color: "bg-slate-50 border-slate-200",
        previewFeatures: ["Work order management", "BOM builder", "Gantt schedule", "Capacity planning", "Material requirements", "Production reports"],
        previewScreens: ["Production Dashboard", "Work Orders", "BOM View", "Gantt Chart", "Capacity Board"],
        prompt: `Build a Production Planning System for a manufacturing SME using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Work Orders**: Create, assign, and track work orders with status (planned/in-progress/completed/on-hold)
- **Bill of Materials (BOM)**: Multi-level BOM builder for each product, link raw materials and quantities
- **Production Schedule**: Gantt chart view of work orders by machine/workstation
- **Capacity Planning**: Workstation capacity (hours/shift), load vs capacity bar chart
- **Material Requirements Planning (MRP)**: Calculate raw material needs based on production plan
- **Production Reports**: Daily output vs target, efficiency %, defect rate, OEE (Overall Equipment Effectiveness)
- **Quality Gate**: Pass/fail checkpoint at each production stage, defect log

## Sample Data:
5 products with multi-level BOM, 10 workstations, 30 work orders

## UI Requirements:
- Gantt chart with zoom (day/week/month)
- OEE gauge chart
- Color-coded work order priority (high/medium/low)
- Print-friendly work order cards for shop floor

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts, react-gantt-chart`
      },
      {
        id: "mfg-quality",
        name: "Quality Control",
        icon: "✅",
        description: "Inspection checklists, defect tracking, non-conformance reports and CAPA",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Inspection checklists", "Defect logging", "NCR management", "CAPA tracking", "Quality metrics", "Supplier quality"],
        previewScreens: ["Inspection Form", "Defect Log", "NCR Report", "CAPA Tracker", "Quality Dashboard"],
        prompt: `Build a Quality Control Management System for a manufacturer using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Inspection Plans**: Define inspection checkpoints for incoming materials, in-process, and finished goods
- **Digital Inspection Forms**: Mobile-friendly forms with pass/fail/measurement inputs, photo upload (simulated)
- **Defect Logging**: Log defects with type, quantity, severity, location on product (image annotation simulation)
- **Non-Conformance Reports (NCR)**: Formal NCR creation with root cause analysis, affected lot tracking
- **CAPA**: Corrective and Preventive Action tracking with due dates, owner, effectiveness review
- **Quality Metrics Dashboard**: First Pass Yield, Defect Rate, Cost of Poor Quality (COPQ), Pareto chart of defect types
- **Supplier Quality**: Track incoming material rejection rate per supplier

## Sample Data:
8 product types, 3 months of inspection records, 20 NCRs in various stages

## UI Requirements:
- Pareto chart for defect types
- Kanban board for CAPA workflow
- Traffic light status indicators
- Print-friendly inspection forms

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "mfg-maintenance",
        name: "Equipment Maintenance",
        icon: "🔧",
        description: "Preventive maintenance schedules, work requests, spare parts and downtime tracking",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-yellow-50 border-yellow-200",
        previewFeatures: ["Equipment registry", "PM schedules", "Breakdown requests", "Spare parts inventory", "Downtime tracking", "Maintenance reports"],
        previewScreens: ["Equipment List", "Maintenance Calendar", "Work Request Form", "Spare Parts Store", "Downtime Report"],
        prompt: `Build an Equipment Maintenance Management System (CMMS) for a manufacturer using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Equipment Registry**: Machine ID, name, location, purchase date, warranty, maintenance manual link
- **Preventive Maintenance (PM)**: Schedule recurring tasks (daily/weekly/monthly/annual) per equipment, checklist-based
- **Maintenance Calendar**: Month/week view showing upcoming PM tasks and overdue items
- **Work Requests**: Operators submit breakdown reports, technician assignment, job card workflow
- **Spare Parts Inventory**: Track spare parts with minimum stock levels, usage per repair
- **Downtime Tracking**: Log breakdown start/end times, reason codes, calculate MTTR and MTBF
- **Maintenance KPIs**: Equipment availability %, PM compliance %, breakdown frequency per machine

## Sample Data:
15 machines, 6 months of maintenance history, 50 work requests

## UI Requirements:
- Calendar with color-coded PM (on-time/overdue/completed)
- MTBF/MTTR trend line chart
- Equipment QR code generator (display only)
- Priority matrix for breakdown requests (urgent/high/normal)

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "mfg-warehouse",
        name: "Warehouse Management",
        icon: "🏗️",
        description: "Location management, goods receipt, picking & packing and stock transfers",
        complexity: "Advanced",
        estimatedTime: "4-6 hours",
        color: "bg-blue-50 border-blue-200",
        previewFeatures: ["Bin location system", "Goods receipt", "Pick & pack orders", "Stock transfers", "Cycle counting", "Warehouse map"],
        previewScreens: ["Warehouse Map", "Goods Receipt", "Pick List", "Stock Transfer", "Location Report"],
        prompt: `Build a Warehouse Management System (WMS) for a manufacturer using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Warehouse Layout**: Visual rack/bin location map (zones: Receiving, Storage A-D, Staging, Shipping)
- **Goods Receipt**: Receive against PO, assign to bin location, print location label
- **Inventory by Location**: View stock quantities per bin, search by item or location
- **Pick List**: Generate optimized pick list for production orders/shipments (zone-based routing)
- **Stock Transfer**: Move stock between locations with audit trail
- **Cycle Counting**: Schedule and execute cycle counts by zone, variance reporting
- **FIFO Enforcement**: Alert when picking non-FIFO order
- **Reports**: Space utilization %, inventory accuracy %, pending receipts

## Sample Data:
200 locations, 300 SKUs, 1 month of transactions

## UI Requirements:
- Interactive warehouse grid map with hover details
- Pick list optimized for mobile (warehouse scanner simulation)
- Real-time location availability heatmap

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinic",
    icon: "🏥",
    description: "Clinics, dental practices & specialist centers",
    color: "from-teal-500 to-green-600",
    departments: [
      {
        id: "health-appointment",
        name: "Appointment Scheduling",
        icon: "📅",
        description: "Online booking, doctor availability, queue management and reminders",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-teal-50 border-teal-200",
        previewFeatures: ["Online booking", "Doctor availability", "Queue number system", "SMS reminders", "Cancellation management", "Walk-in support"],
        previewScreens: ["Booking Calendar", "Doctor Schedule", "Queue Display", "Patient Check-in", "Appointment List"],
        prompt: `Build an Appointment Scheduling System for a medical clinic using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Patient Self-Booking**: Online form with doctor selection, date/time, appointment type (general/follow-up/procedure)
- **Doctor Schedule**: Per-doctor availability matrix, block time (lunch/leave/procedure), max patients per slot
- **Queue Management**: Auto-assign queue numbers, display board showing current/next patients, estimated wait time
- **Reminders**: Simulate WhatsApp/SMS reminder 1 day before, 2 hours before
- **Check-in Flow**: Patient arrives → check in → join queue → called by doctor
- **Cancellation & Reschedule**: With configurable cancellation policy (24hr notice)
- **Calendar Views**: Doctor's daily schedule, clinic-wide calendar, list view

## Sample Data:
5 doctors, 3 specialties, 100 upcoming appointments, 2 weeks of history

## UI Requirements:
- Queue display board (TV-screen ready, full-screen mode)
- Appointment status timeline (Booked → Confirmed → Arrived → In Progress → Done)
- Calendar with doctor color-coding

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, date-fns`
      },
      {
        id: "health-emr",
        name: "Electronic Medical Records",
        icon: "📋",
        description: "Patient records, consultation notes, diagnosis history and prescription management",
        complexity: "Advanced",
        estimatedTime: "5-7 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Patient profiles", "Consultation notes (SOAP)", "Diagnosis & ICD codes", "Prescription writing", "Medical history", "Lab results"],
        previewScreens: ["Patient Profile", "Consultation Form", "Prescription Pad", "Medical History", "Lab Results"],
        prompt: `Build an Electronic Medical Records (EMR) system for a clinic using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Patient Registration**: Demographics, contact, emergency contact, insurance, photo
- **Medical History**: Allergies, chronic conditions, family history, past surgeries, vaccinations
- **Consultation Notes**: SOAP format (Subjective/Objective/Assessment/Plan) with structured fields
- **Diagnosis**: ICD-10 code search and selection (include 200+ common codes)
- **Prescription Writer**: Drug name search, dosage, frequency, duration, quantity, special instructions; generate prescription slip
- **Lab Requests & Results**: Order lab tests, record results, flag abnormal values, trend charts for repeat tests
- **Document Upload**: Simulate X-ray/scan image upload and storage
- **Visit History**: Timeline of all visits with expandable consultation details

## Sample Data:
50 patients with complete profiles, 200 consultation records, realistic medical data

## UI Requirements:
- Clinical-grade clean white design
- Prescription printable format
- Vital signs trend chart (BP, weight, glucose)
- Drug interaction warning (simplified simulation)

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "health-billing",
        name: "Medical Billing & Claims",
        icon: "💳",
        description: "Invoice generation, insurance panel claims, payment tracking and aging",
        complexity: "Advanced",
        estimatedTime: "4-6 hours",
        color: "bg-blue-50 border-blue-200",
        previewFeatures: ["Visit invoicing", "Insurance panel billing", "Claim submission", "Payment tracking", "Outstanding aging", "Financial reports"],
        previewScreens: ["Invoice Creator", "Insurance Claims", "Payment Receipt", "Outstanding Report", "Revenue Dashboard"],
        prompt: `Build a Medical Billing & Claims Management System for a clinic using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Invoice Generation**: Auto-create invoice per visit with consultation fee, procedures, medications, lab fees
- **Panel Management**: Corporate/insurance panel with agreed rates, claim forms
- **Claim Submission**: Submit claims to panels with supporting documents, track claim status
- **Payment Processing**: Cash, card, insurance deductible, partial payment
- **Outstanding Aging**: 0-30, 31-60, 61-90, 90+ days aging report per panel
- **Patient Statements**: Generate account statement for patients
- **Revenue Dashboard**: Daily/monthly revenue by category (consultation/procedures/pharmacy/lab)
- **Receipts**: Official receipt generation, GST/SST compliant

## Sample Data:
10 insurance panels, 200 invoices, 2 months billing history

## UI Requirements:
- Invoice looks like real medical bill
- Aging report with color coding
- Revenue charts breakdown by category

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "health-pharmacy",
        name: "Pharmacy Management",
        icon: "💊",
        description: "Drug inventory, dispensing, prescription tracking and expiry management",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-purple-50 border-purple-200",
        previewFeatures: ["Drug inventory", "Prescription dispensing", "Expiry date alerts", "Drug interaction check", "Reorder management", "Dispensing history"],
        previewScreens: ["Drug Inventory", "Dispensing Counter", "Expiry Alerts", "Purchase Orders", "Dispensing History"],
        prompt: `Build a Pharmacy Management System for a clinic pharmacy using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Drug Inventory**: Drug name (generic/brand), category, form (tablet/capsule/liquid), stock level, reorder point, cost/selling price
- **Dispensing**: Link to prescription, dispense items, deduct stock, label generation (drug name, dosage, instructions)
- **Expiry Management**: Track batch numbers with expiry dates, 3/6 month expiry alerts, FEFO dispensing
- **Drug Interaction Check**: Simplified interaction database for 50 common drugs, warn on conflict
- **Reorder Management**: Auto-generate PO when stock hits reorder point, supplier selection
- **Controlled Drugs Register**: Special log for Schedule 1/2 drugs with mandatory fields
- **Reports**: Stock valuation, dispensing frequency, near-expiry report, consumption trend

## Sample Data:
150 drugs with batch data, 1 month dispensing history

## UI Requirements:
- Red/orange/green stock level indicators
- Expiry calendar heatmap
- Drug label print preview

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    icon: "💼",
    description: "Law firms, accounting, consulting & agencies",
    color: "from-violet-600 to-purple-700",
    departments: [
      {
        id: "ps-crm",
        name: "Client CRM & Pipeline",
        icon: "🎯",
        description: "Lead tracking, client management, deal pipeline and relationship history",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-violet-50 border-violet-200",
        previewFeatures: ["Lead pipeline kanban", "Client profiles", "Contact management", "Interaction history", "Deal tracking", "Follow-up reminders"],
        previewScreens: ["Pipeline Board", "Client Profile", "Contact Details", "Activity Timeline", "Deal Forecast"],
        prompt: `Build a Client CRM and Sales Pipeline system for a professional services firm using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Lead Pipeline**: Kanban board with stages (Lead → Qualified → Proposal → Negotiation → Won/Lost)
- **Client Profiles**: Company info, key contacts, industry, services engaged, account value, status
- **Contact Management**: Individual contacts linked to companies, role, communication preferences
- **Interaction Log**: Log calls, emails, meetings with notes; link to client/deal
- **Deal Tracker**: Deal value, probability, expected close date, owner, next action
- **Follow-up Reminders**: Set follow-up date, notification badge on overdue items
- **Pipeline Analytics**: Conversion rate by stage, average deal size, win/loss reasons, pipeline value by rep
- **Activity Feed**: Recent interactions across all clients

## Sample Data:
50 clients, 80 contacts, 30 deals in pipeline, 3 months of interactions

## UI Requirements:
- Pipeline board with deal value and probability badges
- Client 360 view (single page with all info)
- Funnel chart for pipeline stages
- Activity timeline component

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts, dnd-kit`
      },
      {
        id: "ps-timesheet",
        name: "Time Tracking & Billing",
        icon: "⏱️",
        description: "Billable hours tracking, project budgets, invoicing and profitability",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-blue-50 border-blue-200",
        previewFeatures: ["Timer & manual entry", "Project/task tagging", "Billable vs non-billable", "Invoice from timesheets", "Profitability reports", "Budget tracking"],
        previewScreens: ["Time Entry", "Timesheet View", "Invoice Generator", "Project Budget", "Utilization Report"],
        prompt: `Build a Time Tracking and Billing system for a professional services firm using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Time Entry**: Running timer with start/stop + manual time entry, tag to client/project/task
- **Timesheet View**: Weekly grid view of all entries, submit for approval, manager review
- **Billable Classification**: Mark entries as billable/non-billable/internal, set hourly rates per person/project
- **Invoice Generation**: Select billing period, pull approved billable hours, generate professional invoice with line items
- **Project Budget**: Set budget (hours + value), track burn rate, ETA to budget exhaustion
- **Utilization Report**: Per staff billable utilization %, target vs actual, trend over time
- **Profitability**: Revenue vs cost per project, gross margin %

## Sample Data:
10 staff, 20 projects, 3 months of timesheet data

## UI Requirements:
- Timer widget always visible in header
- Timesheet grid resembles spreadsheet
- Budget burn-down chart
- Invoice looks professional with letterhead area

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "ps-project",
        name: "Project Management",
        icon: "📊",
        description: "Task boards, milestones, resource allocation and client deliverables",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Kanban & Gantt views", "Milestone tracking", "Resource allocation", "Client portal link", "File attachments", "Status reports"],
        previewScreens: ["Project Board", "Gantt Timeline", "Milestone Tracker", "Resource Grid", "Status Report"],
        prompt: `Build a Project Management System for a professional services firm using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Project Dashboard**: Active projects with health status (On Track/At Risk/Off Track), progress %, key dates
- **Task Board**: Kanban and list views, tasks with assignee, priority, due date, labels, subtasks
- **Gantt Chart**: Project timeline with task dependencies, milestone markers, critical path highlight
- **Milestone Tracker**: Key deliverables with due dates, completion status, client sign-off
- **Resource Allocation**: Assign staff to projects, view capacity across projects per week
- **File Management**: Attach documents to projects/tasks (simulated), version naming
- **Status Reports**: Auto-generate weekly status report template (accomplishments, next steps, risks, budget)
- **Client Portal**: Read-only project view for clients showing milestones and key status

## Sample Data:
10 active projects, 5 team members, 3 months timeline data

## UI Requirements:
- Project health traffic lights
- Gantt with zoom controls
- Clean status report print view

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, react-gantt-chart`
      },
      {
        id: "ps-document",
        name: "Document Management",
        icon: "📄",
        description: "File organization, version control, approvals and client document portal",
        complexity: "Simple",
        estimatedTime: "2-3 hours",
        color: "bg-gray-50 border-gray-200",
        previewFeatures: ["Folder hierarchy", "Version control", "Approval workflow", "Search & tags", "Access permissions", "Audit trail"],
        previewScreens: ["File Explorer", "Document Preview", "Version History", "Approval Flow", "Access Settings"],
        prompt: `Build a Document Management System for a professional services firm using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **File Explorer**: Hierarchical folder structure (by client/project/year), breadcrumb navigation
- **Document Upload**: Drag-and-drop upload (simulated), file type icons, size display
- **Version Control**: Each upload creates new version, view version history, restore previous version
- **Approval Workflow**: Submit document for approval, reviewer approves/rejects with comments, status badges
- **Search**: Full-text search by filename, tags, client, date range
- **Tags & Metadata**: Custom tags, document type, confidentiality level (Public/Internal/Confidential)
- **Access Control**: Role-based access (Admin/Staff/Client-view), shared links with expiry
- **Audit Trail**: Log all views, downloads, edits with timestamp and user

## Sample Data:
3 clients, folder structure with 50+ files across departments, version history examples

## UI Requirements:
- File manager feel (like Google Drive)
- Preview pane for PDFs/images
- Confidentiality label badges

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui`
      }
    ]
  },
  {
    id: "construction",
    name: "Construction",
    icon: "🏗️",
    description: "Contractors, builders & infrastructure projects",
    color: "from-yellow-600 to-orange-700",
    departments: [
      {
        id: "const-project",
        name: "Project Management",
        icon: "🏢",
        description: "Site management, progress tracking, contractor coordination and milestones",
        complexity: "Advanced",
        estimatedTime: "5-7 hours",
        color: "bg-yellow-50 border-yellow-200",
        previewFeatures: ["Site dashboard", "Progress % tracking", "Contractor management", "Issue log", "Drawing register", "Progress photos"],
        previewScreens: ["Project Dashboard", "Progress Tracker", "Contractor List", "Issue Log", "Drawing Register"],
        prompt: `Build a Construction Project Management System using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Project Dashboard**: Active sites with overall progress %, budget spent %, schedule health (ahead/on time/delayed)
- **Work Breakdown Structure (WBS)**: Hierarchical task breakdown (phase → section → activity), % completion per item
- **Contractor Management**: Subcontractor profiles, trade, contract value, progress claims, performance rating
- **Site Diary**: Daily log entries (weather, workers on-site count, activities completed, issues, visitors)
- **Issue & Defect Log**: RFI (Request for Information), NCR, punch list items with photos (simulated), assignment, resolution status
- **Drawing Register**: Document list with revision tracking, current revision, distribution list
- **Progress Claims**: Contractor submits claim, QS certifies amount, payment status
- **Reports**: S-curve (planned vs actual progress), cash flow projection

## Sample Data:
5 active projects, 20 subcontractors, 3 months of site diary

## UI Requirements:
- S-curve chart (progress over time)
- Gantt-style phase timeline
- Site photo gallery grid

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "const-cost",
        name: "Cost & Budget Control",
        icon: "💰",
        description: "Budget vs actual, variation orders, progress claims and cash flow",
        complexity: "Advanced",
        estimatedTime: "4-6 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Budget breakdown", "Variation orders", "Cost-to-complete", "Cash flow chart", "Progress claims", "Cost reports"],
        previewScreens: ["Budget Summary", "Variation Log", "Cost-to-Complete", "Cash Flow Chart", "Cost Report"],
        prompt: `Build a Construction Cost & Budget Control System using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Budget Breakdown**: Contract sum broken down by trade/section with budget vs committed vs actual cost
- **Variation Orders (VO)**: Log client and subcontractor VOs, approval workflow, impact on contract sum
- **Cost-to-Complete**: Forecast final cost per cost item based on current spend and work remaining
- **Progress Claims**: Client billing claims by milestone %, retention tracking, payment certificates
- **Procurement Tracking**: Material purchase orders, delivery status, invoice matching
- **Cash Flow**: Monthly cash in (client payments) vs cash out (subcontractor/supplier), S-curve
- **Cost Reports**: Detailed cost report, budget variance analysis, profitability forecast

## Sample Data:
3 projects with full budget breakdowns, 6 months of cost data

## UI Requirements:
- Budget variance shown as traffic lights and % bars
- S-curve with forecast extension
- Professional cost report print layout

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "const-safety",
        name: "Site Safety Management",
        icon: "⛑️",
        description: "Safety inductions, incident reporting, permit to work and inspection checklists",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-red-50 border-red-200",
        previewFeatures: ["Safety induction log", "Incident reporting", "Permit to work", "Safety checklists", "Toolbox talk records", "HIRARC register"],
        previewScreens: ["Safety Dashboard", "Incident Report", "Permit to Work", "Inspection Checklist", "HIRARC Register"],
        prompt: `Build a Construction Site Safety Management System using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Safety Dashboard**: Incident stats (LTI, near miss, unsafe acts), Man-hours worked, TRIR (Total Recordable Incident Rate), Days without incident counter
- **Worker Induction**: Log worker safety induction completion, IC verification, green card tracking
- **Incident Reporting**: Report accidents/near misses with type, severity, description, witnesses, immediate action, root cause
- **Permit to Work (PTW)**: Hot work, confined space, work at height, electrical isolation permits with approval workflow
- **Site Inspection**: Weekly safety inspection checklist by area, issue assignment and close-out
- **Toolbox Talk**: Log daily safety briefings with topic, attendees, signature list
- **HIRARC Register**: Hazard Identification, Risk Assessment, and Risk Control matrix

## Sample Data:
6 months of safety records, 20 incidents, 50 permits

## UI Requirements:
- Days-without-incident counter (big prominent number)
- Risk matrix heat map
- Permit timeline Gantt

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  },
  {
    id: "logistics",
    name: "Logistics & Transport",
    icon: "🚚",
    description: "Freight, courier, warehousing & supply chain",
    color: "from-sky-600 to-blue-700",
    departments: [
      {
        id: "log-fleet",
        name: "Fleet Management",
        icon: "🚛",
        description: "Vehicle registry, maintenance scheduling, driver assignments and fuel tracking",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-sky-50 border-sky-200",
        previewFeatures: ["Vehicle registry", "Maintenance scheduling", "Driver assignment", "Fuel log", "Road tax & insurance alerts", "Fleet cost reports"],
        previewScreens: ["Fleet Dashboard", "Vehicle Profile", "Maintenance Calendar", "Driver Assignment", "Fuel Log"],
        prompt: `Build a Fleet Management System for a logistics company using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Vehicle Registry**: Full vehicle profile (plate, make, model, year, capacity, type, assigned driver)
- **Document Alerts**: Road tax, insurance, puspakom inspection expiry with 30/60/90-day advance alerts
- **Maintenance Schedule**: PM based on mileage intervals or time (oil change/tyre/service), service history log
- **Driver Management**: Driver profiles, license class, license expiry, medical cert, assignment history
- **Fuel Log**: Fill-up records with odometer, liters, cost, location; calculate fuel efficiency (km/L)
- **Trip Log**: Record trip start/end odometer, purpose, driver, vehicle
- **Fleet Cost Dashboard**: Total cost breakdown (fuel/maintenance/insurance/depreciation) per vehicle and fleet

## Sample Data:
20 vehicles, 15 drivers, 6 months of maintenance and fuel records

## UI Requirements:
- Vehicle card grid with status badges (Active/In Workshop/Idle)
- Fuel efficiency trend chart per vehicle
- Document expiry countdown badges

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "log-shipment",
        name: "Shipment Tracking",
        icon: "📦",
        description: "Consignment management, milestone tracking, POD and customer portal",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-blue-50 border-blue-200",
        previewFeatures: ["Consignment creation", "Status milestones", "POD capture", "Customer portal", "Route mapping", "SLA monitoring"],
        previewScreens: ["Shipment List", "Tracking Timeline", "POD View", "Customer Portal", "SLA Dashboard"],
        prompt: `Build a Shipment Tracking System for a logistics company using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Consignment Management**: Create shipment with sender/recipient, dimensions, weight, declared value, service type
- **Milestone Tracking**: Timeline of events (Collected → In Transit → At Hub → Out for Delivery → Delivered) with timestamp and location
- **Proof of Delivery (POD)**: Recipient name, signature (canvas drawing simulation), photo capture simulation, timestamp
- **Customer Portal**: Public tracking page where customer enters tracking number to see status
- **Route Planning**: Assign shipments to delivery runs, optimize by zone (visual grouping)
- **SLA Monitoring**: Track on-time delivery %, delayed shipments, breach alerts
- **Reports**: Delivery performance by zone, driver, service type; failed delivery reasons

## Sample Data:
200 shipments in various stages, 10 drivers, coverage across Malaysian states

## UI Requirements:
- Tracking timeline with icons per milestone
- Map showing shipment route (Leaflet.js)
- Customer-facing tracking page looks clean and professional

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Leaflet.js`
      },
      {
        id: "log-order",
        name: "Order Management",
        icon: "📋",
        description: "Customer orders, job costing, invoicing and delivery coordination",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-indigo-50 border-indigo-200",
        previewFeatures: ["Order creation", "Quotation & pricing", "Job costing", "Invoice generation", "Delivery scheduling", "Customer history"],
        previewScreens: ["Order List", "New Order Form", "Pricing Calculator", "Invoice View", "Delivery Schedule"],
        prompt: `Build an Order Management System for a logistics/freight company using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Order Creation**: New shipment order with route, cargo type, dimensions/weight, special requirements
- **Pricing Engine**: Auto-calculate freight charges based on origin/destination zone, weight, service level, fuel surcharge
- **Quotation**: Generate formal quotation PDF, quote validity period, customer acceptance
- **Job Costing**: Assign costs per order (driver cost, fuel, tolls, handling), calculate profit margin
- **Invoice Generation**: Auto-invoice on delivery confirmation, credit terms per customer, tax (SST)
- **Delivery Scheduling**: Assign orders to vehicles/drivers by date, view daily dispatch plan
- **Customer Accounts**: Credit limit, outstanding balance, payment history, statement

## Sample Data:
100 orders, 20 customers with accounts, 3 months history

## UI Requirements:
- Pricing calculator with instant rate display
- Dispatch board for daily assignments
- Professional invoice template

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  },
  {
    id: "education",
    name: "Education",
    icon: "🎓",
    description: "Schools, tuition centers, training & e-learning",
    color: "from-emerald-500 to-teal-600",
    departments: [
      {
        id: "edu-sis",
        name: "Student Information System",
        icon: "👨‍🎓",
        description: "Student profiles, enrollment, class assignments and parent contacts",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-emerald-50 border-emerald-200",
        previewFeatures: ["Student profiles", "Enrollment management", "Class assignment", "Parent portal", "Student ID cards", "Academic history"],
        previewScreens: ["Student List", "Student Profile", "Enrollment Form", "Class Roster", "Parent Portal"],
        prompt: `Build a Student Information System (SIS) for a school or tuition center using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Student Registration**: Full profile (personal, parent/guardian contacts, emergency, previous school, medical notes)
- **Enrollment Management**: Enroll in programs/classes, enrollment status, intake batch
- **Class Assignment**: Assign students to classes, class size limits, waitlist if full
- **Student ID Card**: Generate printable ID card with photo placeholder, student ID, class, barcode
- **Academic History**: Subjects enrolled per term, progression from level to level
- **Parent Portal**: Parent login to view child's profile, attendance, results, fee balance
- **Reports**: Enrollment by program/class, gender breakdown, intake trends

## Sample Data:
100 students, 10 classes, 5 programs, 2 academic years

## UI Requirements:
- Student profile page feels like a complete record card
- ID card print layout
- Enrollment status badge (Active/Withdrawn/On Leave/Graduated)

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui`
      },
      {
        id: "edu-attendance",
        name: "Attendance & Gradebook",
        icon: "📊",
        description: "Daily attendance, grade entry, report cards and academic performance",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Daily attendance taking", "Attendance percentage", "Grade entry by subject", "Report card generation", "Performance analytics", "Parent notifications"],
        previewScreens: ["Attendance Sheet", "Grade Entry", "Report Card", "Performance Charts", "Absent Alerts"],
        prompt: `Build an Attendance & Gradebook System for a school using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Attendance Taking**: Daily roster per class, mark present/absent/late/medical, bulk mark present
- **Attendance Summary**: Per-student attendance % by month, cumulative for term, flag below-threshold (e.g. <80%)
- **Grade Entry**: Enter marks for assignments/quizzes/exams per subject, weightage configuration
- **Automatic Grading**: Calculate weighted average, assign grade (A+/A/B+... or 1-100 scale)
- **Report Card**: Generate formal report card with all subjects, grades, attendance, teacher remarks, class rank
- **Performance Analytics**: Class average per subject, bell curve, top/bottom performers
- **Alerts**: Auto-notify parents when student absent 3+ consecutive days

## Sample Data:
30 students, 8 subjects, full semester attendance, 3 assessment periods

## UI Requirements:
- Attendance grid resembles class register book
- Report card looks like official school document (printable)
- Performance radar chart per student

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "edu-fees",
        name: "Fee Management",
        icon: "💳",
        description: "Fee schedules, invoicing, payment collection and outstanding tracking",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-blue-50 border-blue-200",
        previewFeatures: ["Fee schedule setup", "Bulk invoice generation", "Payment recording", "Outstanding aging", "Receipt generation", "Financial reports"],
        previewScreens: ["Fee Structure", "Invoice List", "Payment Entry", "Outstanding Report", "Receipt Preview"],
        prompt: `Build a School Fee Management System using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Fee Structure**: Configure fee types (tuition/registration/uniform/activity) by program and level, with due dates
- **Bulk Invoicing**: Generate invoices for entire class or all students in a batch, per term
- **Payment Recording**: Record cash/bank transfer/online payments, partial payments supported
- **Outstanding Tracking**: Aging report (current/30/60/90+ days overdue), total outstanding per class
- **Receipts**: Official receipt generation with sequential number
- **Sibling Discount**: Configure % discount for additional siblings enrolled
- **Reminders**: Simulate automated payment reminder via WhatsApp/email
- **Financial Reports**: Collection rate %, monthly collection trend, revenue by fee type

## Sample Data:
5 fee structures, 100 student invoices, 3 months payment records

## UI Requirements:
- Outstanding aging with color gradient (green → red)
- Collection rate gauge
- Official-looking receipt template

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  },
  {
    id: "hospitality",
    name: "Hospitality & Hotel",
    icon: "🏨",
    description: "Hotels, resorts, serviced apartments & guesthouses",
    color: "from-rose-500 to-pink-700",
    departments: [
      {
        id: "hotel-pms",
        name: "Property Management (PMS)",
        icon: "🗝️",
        description: "Room reservations, check-in/out, housekeeping and front desk operations",
        complexity: "Advanced",
        estimatedTime: "5-7 hours",
        color: "bg-rose-50 border-rose-200",
        previewFeatures: ["Room availability grid", "Reservation management", "Check-in/out", "Housekeeping status", "Guest profiles", "Night audit"],
        previewScreens: ["Room Grid", "Reservation Form", "Check-in Screen", "Housekeeping Board", "Guest Profile"],
        prompt: `Build a Hotel Property Management System (PMS) using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Room Inventory**: Room types (Standard/Deluxe/Suite), floor plan grid showing all rooms with status color-coding
- **Reservation Calendar**: Timeline view (rooms as rows, dates as columns), drag to extend/move booking
- **Check-in**: ID verification fields, room assignment, key card issuance note, welcome letter
- **Check-out**: Final bill review (room charges + extras), payment settlement, folio generation
- **Housekeeping Board**: Room status workflow (Occupied → Checked Out → Dirty → Cleaning → Inspected → Clean), assign housekeeper
- **Guest Profiles**: CRM-style guest history, preferences, special requests, loyalty tier
- **Night Audit**: End-of-day process, revenue posting, occupancy statistics
- **Reports**: Occupancy %, ADR (Average Daily Rate), RevPAR, arrival/departure list

## Sample Data:
50 rooms, 5 room types, 2 weeks of reservations

## UI Requirements:
- Room grid with color-coded status
- Timeline booking chart
- Professional hotel folio (invoice) layout

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "hotel-booking",
        name: "Online Booking Engine",
        icon: "💻",
        description: "Direct booking website with rate management, availability calendar and upsells",
        complexity: "Medium",
        estimatedTime: "3-5 hours",
        color: "bg-pink-50 border-pink-200",
        previewFeatures: ["Date availability search", "Room type display", "Rate plans", "Add-on upsells", "Booking confirmation", "Rate calendar"],
        previewScreens: ["Search Widget", "Room Selection", "Rate Comparison", "Add-ons Page", "Booking Confirmation"],
        prompt: `Build a Hotel Direct Booking Engine using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Search Widget**: Check-in/out date picker, adult/child count, promo code field
- **Availability Results**: Show available room types with photos (placeholder), descriptions, amenities icons, rates
- **Rate Plans**: Multiple rates per room (Flexible/Non-refundable/B&B/Room-only) with cancellation policy
- **Room Comparison**: Compare up to 3 room types side by side
- **Upsells**: Optional add-ons (airport transfer, breakfast, romantic package, late checkout)
- **Booking Flow**: Step-by-step (Search → Select Room → Add-ons → Guest Details → Review → Confirm)
- **Confirmation**: Booking confirmation page + simulated email with booking reference
- **Rate Management** (Admin): Set rates by date range, min stay, close-to-arrival dates

## Sample Data:
5 room types with detailed descriptions, seasonal pricing, 10 add-on packages

## UI Requirements:
- Hotel website quality design with hero imagery areas
- Mobile-responsive booking steps
- Rate calendar heatmap (cheap=green, expensive=red)

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui`
      },
      {
        id: "hotel-fnb",
        name: "Hotel F&B & Events",
        icon: "🍾",
        description: "Restaurant billing, room service, banquet events and catering management",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-amber-50 border-amber-200",
        previewFeatures: ["Restaurant POS", "Room service orders", "Banquet bookings", "Event floor plans", "Catering packages", "F&B revenue reports"],
        previewScreens: ["Restaurant POS", "Room Service", "Event Booking", "Floor Plan Setup", "Revenue Report"],
        prompt: `Build a Hotel F&B and Events Management System using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Restaurant POS**: Table-based ordering with hotel room charge option (post charges to room folio)
- **Room Service**: Order from in-room menu, delivery time tracking, charge to room folio
- **Banquet Management**: Event booking (wedding/corporate/birthday), function sheet with timeline
- **Event Floor Plans**: Setup configurations for banquet halls (theater/classroom/banquet/cocktail style) with capacity
- **Catering Packages**: Package builder (menu selection, table setup, AV equipment, decorations), pricing
- **Event Billing**: Final event invoice with package + extras, deposit tracking, balance due
- **F&B Revenue Dashboard**: Revenue by outlet (restaurant/room service/banquet), covers count, average spend

## Sample Data:
3 banquet halls, 5 catering packages, 2 months event bookings

## UI Requirements:
- Floor plan visual configurator
- Function sheet looks like professional event document
- Revenue breakdown by outlet chart

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: "🛒",
    description: "Online stores, marketplaces & D2C brands",
    color: "from-fuchsia-500 to-pink-600",
    departments: [
      {
        id: "ec-store",
        name: "Online Store Admin",
        icon: "🏬",
        description: "Product catalog, storefront management, SEO and promotions",
        complexity: "Medium",
        estimatedTime: "4-5 hours",
        color: "bg-fuchsia-50 border-fuchsia-200",
        previewFeatures: ["Product catalog CRUD", "Category management", "Image gallery", "SEO fields", "Promo/discount engine", "Store preview"],
        previewScreens: ["Product List", "Product Editor", "Category Tree", "Promo Builder", "Storefront Preview"],
        prompt: `Build an E-commerce Store Admin Panel using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Product Management**: CRUD with name, SKU, category, description (rich text), images (gallery), price, compare price, cost
- **Variants**: Product variants (size, color, etc.) with per-variant pricing and stock
- **Category Management**: Hierarchical categories, category images, sorting
- **SEO Fields**: Meta title, meta description, URL slug per product/category
- **Promotions Engine**: Percentage/fixed discount, voucher codes, buy-X-get-Y, free shipping threshold, date range
- **Inventory Sync**: Stock per variant, low stock threshold, track stock on/off toggle
- **Store Preview**: Preview how product/category page would look to customers
- **Analytics Widget**: Top products by revenue, conversion funnel placeholder

## Sample Data:
50 products, 10 categories, 20 active promotions

## UI Requirements:
- Product editor with image upload zones
- Variant matrix (size × color grid)
- Promo rules builder with visual condition builder

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, react-quill for rich text`
      },
      {
        id: "ec-orders",
        name: "Order Management",
        icon: "📦",
        description: "Order processing, fulfillment workflow, returns and customer communication",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-violet-50 border-violet-200",
        previewFeatures: ["Order processing queue", "Fulfillment workflow", "Shipping integration", "Return management", "Customer communication", "Order analytics"],
        previewScreens: ["Order List", "Order Detail", "Fulfillment Screen", "Return Request", "Customer Chat"],
        prompt: `Build an E-commerce Order Management System using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Order List**: Filterable/sortable by status, date, payment method, amount; bulk actions
- **Order Detail**: Full order view with customer info, items, payment, shipping address, order timeline
- **Order Status Workflow**: Pending → Payment Confirmed → Processing → Packed → Shipped → Delivered
- **Fulfillment**: Pick-pack workflow, generate packing slip, input tracking number per courier
- **Shipping Labels**: Generate shipping label format (Pos Malaysia/J&T/Ninja style)
- **Returns & Refunds**: Customer return request, approve/reject, condition assessment, refund processing
- **Customer Communication**: Order confirmation, shipping notification templates (simulate sending)
- **Analytics**: Order volume by day, AOV (Average Order Value), fulfillment time, return rate

## Sample Data:
200 orders in various stages, 10 couriers, 30 return requests

## UI Requirements:
- Kanban-style order board by status
- Packing slip print layout
- Return reason analysis pie chart

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "ec-analytics",
        name: "Analytics & Marketing",
        icon: "📈",
        description: "Sales dashboard, customer segmentation, marketing campaigns and ROI tracking",
        complexity: "Medium",
        estimatedTime: "3-4 hours",
        color: "bg-blue-50 border-blue-200",
        previewFeatures: ["Revenue dashboard", "Customer segments", "Product performance", "Marketing campaigns", "Conversion funnel", "ROI tracking"],
        previewScreens: ["Revenue Dashboard", "Customer Segments", "Product Analytics", "Campaign Manager", "Funnel View"],
        prompt: `Build an E-commerce Analytics & Marketing Dashboard using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Revenue Dashboard**: GMV, orders, AOV, conversion rate KPI cards with sparklines; date range selector
- **Sales Charts**: Revenue trend (line), orders by channel (bar), revenue by category (pie), hourly heatmap
- **Customer Analytics**: New vs returning %, customer lifetime value distribution, top customers table, RFM segmentation
- **Product Performance**: Best sellers, worst performers, stock turnover rate, profit margin per product
- **Marketing Campaigns**: Create email/SMS campaigns, target segment selection, send simulation, open rate tracking
- **Conversion Funnel**: Visitor → Cart → Checkout → Purchase funnel with drop-off rates
- **Cohort Analysis**: Customer retention by acquisition month
- **UTM Tracking**: Revenue attributed by marketing source/medium/campaign

## Sample Data:
6 months of sales data with realistic seasonality, 500 customers, 5 campaigns

## UI Requirements:
- Executive-level dashboard design
- Interactive charts with drill-down
- Campaign performance cards with A/B test comparison

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      },
      {
        id: "ec-customer",
        name: "Customer Support (Helpdesk)",
        icon: "🎧",
        description: "Support tickets, live chat simulation, FAQ management and CSAT tracking",
        complexity: "Simple",
        estimatedTime: "2-3 hours",
        color: "bg-green-50 border-green-200",
        previewFeatures: ["Ticket management", "Live chat simulation", "FAQ builder", "CSAT surveys", "Response templates", "Support metrics"],
        previewScreens: ["Ticket Queue", "Conversation View", "FAQ Manager", "CSAT Report", "Performance Dashboard"],
        prompt: `Build a Customer Support Helpdesk System for an e-commerce business using Next.js, TypeScript, and Tailwind CSS.

## Features Required:
- **Ticket Management**: Support tickets with category (shipping/payment/product/returns), priority, status, assigned agent
- **Ticket Detail**: Conversation thread, internal notes (hidden from customer), file attachments, linked order
- **Live Chat Simulation**: Chat widget interface for agents with typing indicator, canned responses
- **FAQ Manager**: Create/edit FAQ articles organized by category, search, mark as helpful/not helpful
- **Response Templates**: Pre-written reply templates by category, insert with one click
- **CSAT Surveys**: Auto-send survey on ticket close, collect 1-5 star rating + comment, aggregate score
- **SLA Tracking**: First response time, resolution time against SLA targets (e.g. P1: 1hr, P2: 4hr)
- **Dashboard**: Open tickets, SLA breach alerts, agent workload, CSAT trend

## Sample Data:
100 tickets, 5 agents, 3 months history, 200 CSAT responses

## UI Requirements:
- Inbox-style layout (left panel list, right panel conversation)
- SLA timer countdown on tickets
- CSAT trend chart

## Tech Stack: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Recharts`
      }
    ]
  }
];

export const getAllDepartments = () =>
  industries.flatMap(ind => ind.departments.map(dep => ({ ...dep, industryId: ind.id, industryName: ind.name })));
