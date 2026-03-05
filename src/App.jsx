import { useState, useEffect } from "react";

const SECTIONS = [
  {
    id: "hr",
    title: "HR Onboarding",
    icon: "👤",
    color: "#0e7490",
    items: [
      { id: "hr1", label: "Staff Info Form", required: true },
      { id: "hr2", label: "Job Description & Position Responsibilities", required: true, note: "Position Descriptions Master Document" },
      { id: "hr3", label: "Resume (copy in file)", required: true },
      { id: "hr4", label: "National Police Check", required: true },
      { id: "hr5", label: "WWC Card Applied / Sighted (if applicable)", required: false },
      { id: "hr6", label: "Worker Screening Clearance", required: true },
      { id: "hr7", label: "NDIS Worker Orientation Module Certificates", required: true },
      { id: "hr8", label: "Infection Control Qualification", required: true },
      { id: "hr9", label: "Staff Commitment Declaration Form", required: true },
      { id: "hr10", label: "Qualification & Licence", required: true },
      { id: "hr11", label: "Additional Employment Disclosure (if applicable)", required: false },
      { id: "hr12", label: "Contract of Employment Signed & Returned", required: true },
      { id: "hr13", label: "Payments, Planned & Unplanned Leave Explained", required: true },
      { id: "hr14", label: "Timesheet and Leave Forms", required: true },
      { id: "hr15", label: "Contractor: Valid ABN (Check ABN Lookup)", required: false },
      { id: "hr16", label: "Right to Work Evidence (Visa/Birth Certificate/Passport)", required: true },
      { id: "hr17", label: "Equal Opportunity & Work Harassment Policy", required: true },
      { id: "hr18", label: "100 Points of ID (Primary and Secondary)", required: true },
      { id: "hr19", label: "All HR Employment Forms Completed", required: true },
    ],
  },
  {
    id: "org",
    title: "Staff Induction – Organisation",
    icon: "🏢",
    color: "#0f766e",
    items: [
      { id: "org1", label: "Vision, Mission, Structure & Strategic Plans", required: true },
      { id: "org2", label: "Organisational Structure & Management", required: true },
      { id: "org3", label: "Reporting Requirements", required: true },
      { id: "org4", label: "Use of Phone (Personal & Work)", required: true },
      { id: "org5", label: "Compliance Responsibilities", required: true },
      { id: "org6", label: "Training Competencies", required: true },
      { id: "org7", label: "Staff Code of Conduct", required: true },
      { id: "org8", label: "Team Process, Communication & Supervision", required: true },
      { id: "org9", label: "Position Responsibilities & Authority/Delegation", required: true },
      { id: "org10", label: "Introduction to Clients & Colleagues", required: true },
      { id: "org11", label: "Work Times, Meal Breaks & Availability/Timesheet", required: true },
      { id: "org12", label: "Notification of Sick Leave / Shift Swaps", required: true },
      { id: "org13", label: "Leave Entitlements – Casual Role", required: true },
      { id: "org14", label: "Probation Period Explained", required: true },
      { id: "org15", label: "Performance Development Process", required: true, note: "Performance Review Form" },
      { id: "org16", label: "Dress Code", required: true },
      { id: "org17", label: "Staff Concern & Complaint Resolution", required: true },
      { id: "org18", label: "Use of Social Media Policy", required: true },
      { id: "org19", label: "Role-Specific Policies, Procedures & Forms", required: true },
      { id: "org20", label: "Incident Reporting Structure", required: true, note: "Incident Management Policy & Procedure" },
    ],
  },
  {
    id: "training",
    title: "Mandatory Training",
    icon: "📚",
    color: "#7c3aed",
    items: [
      { id: "tr1", label: "Induction Training", required: true },
      { id: "tr2", label: "Manual Handling", required: true },
      { id: "tr3", label: "Aboriginal Culture eLearning (once only)", required: false, note: "For Aboriginal clients" },
      { id: "tr4", label: "Record Keeping Awareness (once only)", required: true },
      { id: "tr5", label: "Emergency Procedures eLearning", required: true },
      { id: "tr6", label: "Accountable & Ethical Decision Making", required: true },
      { id: "tr7", label: "Bullying in the Workplace eLearning (every 2 years)", required: true },
      { id: "tr8", label: "Aggression Prevention & Intervention", required: false, note: "For behavioural clients" },
      { id: "tr9", label: "Infection Prevention & Control Training", required: true },
      { id: "tr10", label: "Hand Hygiene eLearning", required: true },
      { id: "tr11", label: "Food Safety", required: true },
      { id: "tr12", label: "NDIS Worker Orientation Module (Quality, Safety & You)", required: true },
      { id: "tr13", label: "New Worker NDIS Induction – 8 Module", required: true },
      { id: "tr14", label: "Supporting Effective Communication", required: true },
      { id: "tr15", label: "Supporting Safe & Enjoyable Meals", required: true },
    ],
  },
  {
    id: "ndis",
    title: "NDIS Requirements",
    icon: "✅",
    color: "#b45309",
    items: [
      { id: "nd1", label: "NDIS Code of Conduct", required: true },
      { id: "nd2", label: "NDIS Worker Orientation (Quality, Safety & You)", required: true },
      { id: "nd3", label: "New Worker NDIS Induction 8 Module", required: true },
      { id: "nd4", label: "Supporting Effective Communication Module", required: true },
      { id: "nd5", label: "Supporting Safe & Enjoyable Meals Module", required: true },
      { id: "nd6", label: "Signed Risk Management Policy & Procedure", required: true },
      { id: "nd7", label: "Signed Privacy & Dignity Policy & Procedure", required: true },
      { id: "nd8", label: "Signed Conflict of Interest Policy & Procedure", required: true },
      { id: "nd9", label: "Signed Code of Conduct Agreement", required: true },
      { id: "nd10", label: "COVID-19 PPE for Disability Support Workers", required: true },
      { id: "nd11", label: "Supplementary Module: High Intensity Daily Personal Activities", required: false, note: "Check if applicable" },
      { id: "nd12", label: "NDIS Practice Standards Reviewed", required: true },
      { id: "nd13", label: "Welcome to Vitality Community Care Induction Pack", required: true },
      { id: "nd14", label: "Effective Incident Management Education Pack", required: true },
    ],
  },
  {
    id: "policies",
    title: "Policies & Procedures",
    icon: "📋",
    color: "#dc2626",
    items: [
      { id: "pp1", label: "WHS Policy", required: true },
      { id: "pp2", label: "Equal Opportunity", required: true },
      { id: "pp3", label: "Sexual Harassment", required: true },
      { id: "pp4", label: "Employee Assistance Program", required: true },
      { id: "pp5", label: "Smoking Policy", required: true },
      { id: "pp6", label: "Drug & Alcohol Policy", required: true },
      { id: "pp7", label: "Acceptance of Gifts", required: true },
      { id: "pp8", label: "Outside Employment", required: true },
      { id: "pp9", label: "Infection Prevention & Control Policy", required: true },
      { id: "pp10", label: "Rights & Responsibilities Policy", required: true },
      { id: "pp11", label: "Individual Values & Beliefs Policy", required: true },
      { id: "pp12", label: "Privacy & Confidentiality Policy", required: true },
      { id: "pp13", label: "Information Management Policy", required: true },
      { id: "pp14", label: "Independence & Informed Choice Policy", required: true },
      { id: "pp15", label: "Freedom from Violence, Abuse, Neglect & Discrimination Policy", required: true },
      { id: "pp16", label: "Governance & Operational Management Policy", required: true },
      { id: "pp17", label: "Conflict of Interest Policy", required: true },
      { id: "pp18", label: "Risk Management Policy", required: true },
      { id: "pp19", label: "Quality Management Policy", required: true },
      { id: "pp20", label: "Feedback & Complaints Management Policy", required: true },
      { id: "pp21", label: "Incident Management Policy", required: true },
      { id: "pp22", label: "Emergency & Disaster Management Policy", required: true },
      { id: "pp23", label: "Continuity of Supports Policy", required: true },
      { id: "pp24", label: "Access to Supports Policy", required: true },
      { id: "pp25", label: "Support Planning Policy", required: true },
      { id: "pp26", label: "Safe Environment Policy", required: true },
      { id: "pp27", label: "Infection Control Policy", required: true },
      { id: "pp28", label: "Participant Money & Property Policy", required: true },
      { id: "pp29", label: "Mealtime Management Policy", required: true },
      { id: "pp30", label: "Personal Support Policy", required: true },
      { id: "pp31", label: "Medication Management Policy", required: true },
      { id: "pp32", label: "Waste Management Policy", required: true },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Procedures",
    icon: "🚨",
    color: "#e11d48",
    items: [
      { id: "em1", label: "Emergency & Disaster Management Plan", required: true },
      { id: "em2", label: "Emergency Drill Completed", required: true },
      { id: "em3", label: "Reporting Emergencies & Raising the Alarm", required: true },
      { id: "em4", label: "Evacuation Procedure", required: true },
      { id: "em5", label: "Location of Emergency Evacuation Plan", required: true },
      { id: "em6", label: "Fire Extinguishers & Other Fire Equipment", required: true },
      { id: "em7", label: "Emergency Exits & Evacuation Assembly Point", required: true },
      { id: "em8", label: "Location of First Aid Box / Equipment", required: true },
      { id: "em9", label: "Smoke-Free Requirements & Boundaries", required: true },
    ],
  },
  {
    id: "whs",
    title: "Work Health & Safety",
    icon: "🦺",
    color: "#059669",
    items: [
      { id: "wh1", label: "Workplace Health & Safety Guidelines", required: true },
      { id: "wh2", label: "Procedure for Reporting Incidents / Hazards", required: true },
      { id: "wh3", label: "WHS Communication Process", required: true },
      { id: "wh4", label: "Contractor Management Processes", required: true },
      { id: "wh5", label: "WHS Responsibilities", required: true },
      { id: "wh6", label: "Return to Work Procedures & Processes", required: true },
      { id: "wh7", label: "Staff Commitment Declaration Statement", required: true },
      { id: "wh8", label: "Personal Protective Equipment (PPE)", required: true },
      { id: "wh9", label: "Chemical Management", required: true },
      { id: "wh10", label: "Manual Handling & Use of Equipment", required: true },
      { id: "wh11", label: "Injury Management & Workers Compensation Claims", required: true },
      { id: "wh12", label: "Role-Specific Competencies", required: true },
      { id: "wh13", label: "On-the-Job Training Requirements Identified", required: true },
    ],
  },
  {
    id: "workplace",
    title: "Workplace Familiarisation",
    icon: "🏠",
    color: "#0369a1",
    items: [
      { id: "wp1", label: "Building Access (Entrances & Exits)", required: true },
      { id: "wp2", label: "Tour of Building / Client House", required: true },
      { id: "wp3", label: "Location of Staff Facilities (Toilets, Staff Room)", required: true },
      { id: "wp4", label: "Parking", required: true },
      { id: "wp5", label: "Lockers", required: false },
      { id: "wp6", label: "Computer & Printer Location", required: true },
      { id: "wp7", label: "Policy & Procedure Locations (Ausmed / Hard Copy)", required: true },
      { id: "wp8", label: "Location of Forms & Health Records", required: true },
      { id: "wp9", label: "Record Keeping Procedures", required: true },
      { id: "wp10", label: "Waste Management Processes", required: true },
      { id: "wp11", label: "Working at Night", required: true },
      { id: "wp12", label: "Amenities: Kitchen, Storeroom & Supplies", required: true },
      { id: "wp13", label: "Housekeeping Procedures", required: true },
    ],
  },
  {
    id: "safety",
    title: "Safety & Quality",
    icon: "🔒",
    color: "#6d28d9",
    items: [
      { id: "sq1", label: "Identification, Reporting, Process & Debriefing", required: true },
      { id: "sq2", label: "Open Disclosure Policy", required: true },
      { id: "sq3", label: "Local Safety & Quality Measures", required: true },
      { id: "sq4", label: "Audit Responsibilities", required: true },
      { id: "sq5", label: "Client Safety", required: true },
      { id: "sq6", label: "Client-Centred Care – Responsibilities, Planning & Provision", required: true },
      { id: "sq7", label: "Medication Safety – Storage, Access, Charts, Auditing", required: true },
    ],
  },
  {
    id: "chemicals",
    title: "Chemicals in the Workplace",
    icon: "⚗️",
    color: "#475569",
    items: [
      { id: "ch1", label: "Location for Storage of Chemicals", required: true },
      { id: "ch2", label: "Location of Safety Data Sheets", required: true },
      { id: "ch3", label: "Precautions for Use Including PPE", required: true },
      { id: "ch4", label: "Management of Sharps Injury & Body Fluid Exposure", required: true },
    ],
  },
];

const HANDBOOK_SECTIONS = [
  {
    id: "hb_mission",
    title: "Mission, Vision & Values",
    icon: "⭐",
    content: `**Mission**\nAt Vitality Community Care, our mission is to enhance the lives of individuals with disabilities by providing compassionate, tailored support that empowers them to achieve their personal goals, embrace their independence, and actively participate in their communities.\n\n**Vision**\nTo be the foremost provider of innovative, person-centred disability services in Australia, transforming lives by setting new standards of excellence, inclusivity, and empowerment.\n\n**Values**\n• Empowerment – Supporting individuals to take control of their lives\n• Respect – Treating every person with dignity\n• Integrity – Transparency, honesty and accountability\n• Inclusivity – Embracing diversity for all\n• Excellence – Continuous improvement in service delivery\n• Collaboration – Working with participants, families & providers\n• Compassion – Empathy and understanding in all we do`
  },
  {
    id: "hb_sick",
    title: "Sick Leave & Shift Swaps",
    icon: "🏥",
    content: `Notify the Coordinator, Supervisor, or Clinical Key Worker using the listed contact numbers if you are unable to attend work due to illness or need to arrange a shift swap.\n\nFor sick leave exceeding two consecutive days, a medical certificate must be provided to your manager.\n\nThe roster is issued on a fortnightly basis and provided at least two weeks in advance.`
  },
  {
    id: "hb_training",
    title: "Education & Mandatory Training",
    icon: "🎓",
    content: `All staff must complete mandatory training within the specified timeframe. Annual competencies must be validated each year and completed within the first six weeks of employment.\n\nTraining requirements will be explained during your orientation. You are responsible for:\n• Arranging your training\n• Ensuring training is completed and recorded in your file\n• Liaising with Management and the Clinical Key Worker RN\n\n**Ausmed LMS** is the organisation's learning management system. You will receive an email invitation within approximately three days of your employment records being active.`
  },
  {
    id: "hb_ohs",
    title: "Occupational Safety & Health",
    icon: "🦺",
    content: `All employees must:\n• Follow all safety and health instructions\n• Report hazards without delay\n• Wear all required protective clothing and equipment\n• Work cooperatively on safety and health matters\n\n**What you must report:**\n• All injuries requiring medical treatment\n• All incidents requiring first aid\n• All near misses\n• All hazards or potential hazards\n• Any damaged or broken equipment\n\n**Zero Tolerance Policy:** Verbal abuse, physical abuse, or threatening behaviour are not accepted in any situation. Report any aggressive behaviour to your Coordinator, Supervisor, or Clinical Nurse immediately.`
  },
  {
    id: "hb_infection",
    title: "Infection Prevention & Control",
    icon: "🧤",
    content: `**Hand Hygiene – 5 Moments:**\n• Before eating or handling food\n• After coughing or sneezing into a tissue\n• After attending to personal hygiene\n• Before and after direct patient/client contact\n• After contact with body fluids\n\n**Standards:**\n• Cover any cuts or abrasions with a waterproof dressing\n• Remain bare below the elbows in clinical areas\n• No long sleeves, wrist/finger jewellery, false nails, or nail polish in clinical areas (wedding band excepted)\n• Shoes must be fully enclosed, non-slip, supportive and clean\n• Fingernails must be clean, short, free from polish and artificial nails`
  },
  {
    id: "hb_incidents",
    title: "Reporting of Incidents",
    icon: "📝",
    content: `Report all incidents, accidents, or near misses involving clients through the Incident Management System (accessible via Teams, barcode, or link).\n\nRecord accidents, injuries, near misses or hazards involving staff or visitors on the Employee Incident or Hazard Report Form.\n\n**Hard copy forms are available** when the system is down.\n\nThe Incident Management System is NOT used to discipline staff and is NOT for public access. Its purpose is to support improvement in client care.`
  },
  {
    id: "hb_contacts",
    title: "Key Contacts",
    icon: "📞",
    content: `**Managing Director:** \nEmail: \nAddress: \n\n**Clinical Key Worker:**\nEmail: Example.com.au\nMobile: 0400000001\n\n**Case Manager:** Contact your supervisor for assignment\n\n**Nurse / Supervisor / Coordinator / Team Leader:** To be advised on commencement`
  },
];

export default function InductionDashboard() {
  const [checked, setChecked] = useState({});
  const [activeSection, setActiveSection] = useState("overview");
  const [activeHandbook, setActiveHandbook] = useState(null);
  const [employeeInfo, setEmployeeInfo] = useState({ name: "", position: "", date: "", state: "", manager: "" });
  const [notes, setNotes] = useState({});
  const [filterMode, setFilterMode] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [signedOff, setSignedOff] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vitality_induction_v2");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.checked) setChecked(data.checked);
        if (data.employeeInfo) setEmployeeInfo(data.employeeInfo);
        if (data.notes) setNotes(data.notes);
        if (data.signedOff) setSignedOff(data.signedOff);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("vitality_induction_v2", JSON.stringify({ checked, employeeInfo, notes, signedOff }));
    } catch {}
  }, [checked, employeeInfo, notes, signedOff]);

  const allItems = SECTIONS.flatMap(s => s.items);
  const totalItems = allItems.length;
  const completedItems = allItems.filter(i => checked[i.id]).length;
  const progressPct = Math.round((completedItems / totalItems) * 100);

  const toggleItem = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  const getSectionProgress = (section) => {
    const done = section.items.filter(i => checked[i.id]).length;
    return { done, total: section.items.length, pct: Math.round((done / section.items.length) * 100) };
  };

  const getFilteredItems = (items) => {
    let result = items;
    if (filterMode === "pending") result = result.filter(i => !checked[i.id]);
    if (filterMode === "done") result = result.filter(i => checked[i.id]);
    if (searchTerm) result = result.filter(i => i.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const activeS = SECTIONS.find(s => s.id === activeSection);

  const accentColor = activeS?.color || "#0e7490";

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#f0f4f8",
      minHeight: "100vh",
      color: "#1e293b"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        .nav-item { transition: all 0.18s ease; cursor: pointer; }
        .nav-item:hover { background: rgba(255,255,255,0.15) !important; }
        .nav-item.active { background: rgba(255,255,255,0.2) !important; }
        .check-btn { transition: all 0.15s ease; cursor: pointer; border: none; background: none; }
        .check-btn:hover { transform: scale(1.05); }
        .card { transition: box-shadow 0.2s ease; }
        .card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important; }
        .section-card { cursor: pointer; transition: all 0.2s ease; }
        .section-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important; }
        .hb-card { cursor: pointer; transition: all 0.2s ease; }
        .hb-card:hover { transform: translateY(-2px); }
        input[type="text"], input[type="date"], textarea { outline: none; transition: border-color 0.15s; }
        input[type="text"]:focus, input[type="date"]:focus, textarea:focus { border-color: #0e7490 !important; }
        .progress-bar { transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }
        .tag { display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
        .animate-in { animation: fadeUp 0.3s ease forwards; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      {/* TOP HEADER */}
      <div style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0e7490 60%, #0f766e 100%)", padding: "0", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0 24px", gap: 16, height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
            <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💙</div>
            <div>
              <div style={{ color: "#fff", fontFamily: "'DM Serif Display', serif", fontSize: 16, lineHeight: 1 }}>Vitality Community Care</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase" }}>New Employee Induction Portal</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 11 }}>Overall Progress</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 20 }}>{progressPct}%</div>
            </div>
            <div style={{ width: 48, height: 48, position: "relative" }}>
              <svg viewBox="0 0 48 48" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4"/>
                <circle cx="24" cy="24" r="20" fill="none" stroke="#34d399" strokeWidth="4" strokeDasharray={`${progressPct * 1.257} 125.7`} strokeLinecap="round"/>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 9, fontWeight: 700 }}>{completedItems}/{totalItems}</div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div style={{ display: "flex", gap: 2, padding: "0 24px 0", overflowX: "auto" }}>
          {[
            { id: "overview", label: "Overview", icon: "🏠" },
            { id: "employee", label: "Employee Info", icon: "👤" },
            ...SECTIONS.map(s => ({ id: s.id, label: s.title, icon: s.icon, color: s.color })),
            { id: "handbook", label: "Handbook", icon: "📖" },
          ].map(nav => {
            const isActive = activeSection === nav.id;
            const prog = nav.id !== "overview" && nav.id !== "employee" && nav.id !== "handbook"
              ? getSectionProgress(SECTIONS.find(s => s.id === nav.id) || { items: [] })
              : null;
            return (
              <div key={nav.id} className={`nav-item ${isActive ? "active" : ""}`}
                onClick={() => { setActiveSection(nav.id); setActiveHandbook(null); }}
                style={{
                  padding: "8px 14px", borderRadius: "8px 8px 0 0", cursor: "pointer", whiteSpace: "nowrap",
                  background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
                  borderBottom: isActive ? "2px solid #34d399" : "2px solid transparent",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                <span style={{ fontSize: 13 }}>{nav.icon}</span>
                <span style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: isActive ? 600 : 400 }}>{nav.label}</span>
                {prog && (
                  <span style={{ background: prog.pct === 100 ? "#34d399" : "rgba(255,255,255,0.15)", color: prog.pct === 100 ? "#064e3b" : "rgba(255,255,255,0.9)", borderRadius: 20, padding: "1px 6px", fontSize: 10, fontWeight: 700 }}>
                    {prog.pct === 100 ? "✓" : `${prog.pct}%`}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px" }}>

        {/* OVERVIEW */}
        {activeSection === "overview" && (
          <div className="animate-in">
            {employeeInfo.name && (
              <div style={{ background: "linear-gradient(135deg, #0c4a6e, #0e7490)", borderRadius: 16, padding: "20px 28px", marginBottom: 24, color: "#fff" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, marginBottom: 4 }}>Welcome, {employeeInfo.name}! 👋</div>
                <div style={{ opacity: 0.8, fontSize: 14 }}>{employeeInfo.position} {employeeInfo.date && `• Starting ${employeeInfo.date}`} {employeeInfo.manager && `• Manager: ${employeeInfo.manager}`}</div>
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 28 }}>
              {[
                { label: "Total Items", value: totalItems, color: "#0e7490", icon: "📋" },
                { label: "Completed", value: completedItems, color: "#059669", icon: "✅" },
                { label: "Remaining", value: totalItems - completedItems, color: "#dc2626", icon: "⏳" },
                { label: "Progress", value: `${progressPct}%`, color: "#7c3aed", icon: "📈" },
              ].map(stat => (
                <div key={stat.label} className="card" style={{ background: "#fff", borderRadius: 14, padding: "18px 20px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: `4px solid ${stat.color}` }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{stat.icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", marginBottom: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontWeight: 600, color: "#0c4a6e" }}>Overall Completion</span>
                <span style={{ fontWeight: 700, color: "#0e7490" }}>{completedItems} / {totalItems}</span>
              </div>
              <div style={{ background: "#e2e8f0", borderRadius: 99, height: 12, overflow: "hidden" }}>
                <div className="progress-bar" style={{ width: `${progressPct}%`, height: "100%", background: "linear-gradient(90deg, #0e7490, #0f766e, #34d399)", borderRadius: 99 }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {SECTIONS.map(section => {
                const prog = getSectionProgress(section);
                return (
                  <div key={section.id} className="section-card card"
                    onClick={() => setActiveSection(section.id)}
                    style={{ background: "#fff", borderRadius: 14, padding: "18px 20px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderLeft: `4px solid ${section.color}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div>
                        <span style={{ fontSize: 20, marginRight: 8 }}>{section.icon}</span>
                        <span style={{ fontWeight: 600, fontSize: 14, color: "#1e293b" }}>{section.title}</span>
                      </div>
                      <span style={{ background: prog.pct === 100 ? "#dcfce7" : "#f1f5f9", color: prog.pct === 100 ? "#166534" : "#475569", borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 700 }}>
                        {prog.pct === 100 ? "✓ Done" : `${prog.done}/${prog.total}`}
                      </span>
                    </div>
                    <div style={{ background: "#e2e8f0", borderRadius: 99, height: 6, overflow: "hidden" }}>
                      <div className="progress-bar" style={{ width: `${prog.pct}%`, height: "100%", background: prog.pct === 100 ? "#22c55e" : section.color, borderRadius: 99 }} />
                    </div>
                    <div style={{ marginTop: 8, fontSize: 12, color: "#94a3b8" }}>{prog.pct}% complete</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* EMPLOYEE INFO */}
        {activeSection === "employee" && (
          <div className="animate-in">
            <div style={{ background: "#fff", borderRadius: 16, padding: "28px 32px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", maxWidth: 600 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "#0c4a6e", marginBottom: 6 }}>Employee Information</div>
              <div style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>Complete your details to personalise this induction.</div>
              {[
                { key: "name", label: "Full Name", placeholder: "Enter full name" },
                { key: "position", label: "Position Title", placeholder: "e.g. Support Worker" },
                { key: "date", label: "Commencement Date", type: "date" },
                { key: "state", label: "State", placeholder: "e.g. VIC" },
                { key: "manager", label: "Manager Name", placeholder: "Enter manager's name" },
              ].map(field => (
                <div key={field.key} style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{field.label}</label>
                  <input type={field.type || "text"} placeholder={field.placeholder}
                    value={employeeInfo[field.key]}
                    onChange={e => setEmployeeInfo(prev => ({ ...prev, [field.key]: e.target.value }))}
                    style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, color: "#1e293b", background: "#f8fafc" }} />
                </div>
              ))}
              <div style={{ marginTop: 24, padding: "16px 20px", background: "#f0f9ff", borderRadius: 12, border: "1px solid #bae6fd" }}>
                <div style={{ fontWeight: 600, color: "#0c4a6e", marginBottom: 4, fontSize: 14 }}>📞 Key Contact – Clinical Key Worker</div>
                <div style={{ fontSize: 13, color: "#334155" }}> Example() | example.com.au | 04000000001</div>
              </div>
            </div>
          </div>
        )}

        {/* CHECKLIST SECTIONS */}
        {activeS && activeSection !== "overview" && activeSection !== "employee" && activeSection !== "handbook" && (
          <div className="animate-in">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 28 }}>{activeS.icon}</span>
                  <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: "#0c4a6e" }}>{activeS.title}</h2>
                </div>
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 2, marginLeft: 38 }}>
                  {getSectionProgress(activeS).done} of {activeS.items.length} items completed
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {["all", "pending", "done"].map(mode => (
                  <button key={mode} onClick={() => setFilterMode(mode)}
                    style={{ padding: "6px 14px", borderRadius: 99, border: "1.5px solid", fontSize: 12, fontWeight: 600, cursor: "pointer",
                      borderColor: filterMode === mode ? activeS.color : "#e2e8f0",
                      background: filterMode === mode ? activeS.color : "#fff",
                      color: filterMode === mode ? "#fff" : "#64748b" }}>
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <input type="text" placeholder="🔍  Search items..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              style={{ width: "100%", padding: "10px 16px", border: "1.5px solid #e2e8f0", borderRadius: 12, fontSize: 14, marginBottom: 16, background: "#fff" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {getFilteredItems(activeS.items).map((item, idx) => (
                <div key={item.id} className="card"
                  style={{ background: checked[item.id] ? "#f0fdf4" : "#fff", borderRadius: 12, padding: "14px 18px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    border: `1.5px solid ${checked[item.id] ? "#bbf7d0" : "#e2e8f0"}`, display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <button className="check-btn" onClick={() => toggleItem(item.id)}
                    style={{ width: 26, height: 26, borderRadius: 8, border: `2px solid ${checked[item.id] ? activeS.color : "#cbd5e1"}`,
                      background: checked[item.id] ? activeS.color : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    {checked[item.id] && <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>✓</span>}
                  </button>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 14, fontWeight: checked[item.id] ? 400 : 500, color: checked[item.id] ? "#6b7280" : "#1e293b", textDecoration: checked[item.id] ? "line-through" : "none" }}>
                        {item.label}
                      </span>
                      {!item.required && <span className="tag" style={{ background: "#fef3c7", color: "#92400e" }}>Optional</span>}
                      {item.required && !checked[item.id] && <span className="tag" style={{ background: "#fee2e2", color: "#991b1b" }}>Required</span>}
                      {checked[item.id] && <span className="tag" style={{ background: "#dcfce7", color: "#166534" }}>Complete</span>}
                    </div>
                    {item.note && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 3 }}>📌 {item.note}</div>}
                    <textarea placeholder="Add notes..." value={notes[item.id] || ""}
                      onChange={e => setNotes(prev => ({ ...prev, [item.id]: e.target.value }))}
                      style={{ marginTop: 8, width: "100%", padding: "6px 10px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 12, color: "#475569", background: "#f8fafc", resize: "none", height: 38, fontFamily: "inherit" }} />
                  </div>
                </div>
              ))}
              {getFilteredItems(activeS.items).length === 0 && (
                <div style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>No items match your filter.</div>
              )}
            </div>

            {/* Mark all */}
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              <button onClick={() => {
                const update = {};
                activeS.items.forEach(i => { update[i.id] = true; });
                setChecked(prev => ({ ...prev, ...update }));
              }} style={{ padding: "10px 20px", background: activeS.color, color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                ✓ Mark All Complete
              </button>
              <button onClick={() => {
                const update = {};
                activeS.items.forEach(i => { update[i.id] = false; });
                setChecked(prev => ({ ...prev, ...update }));
              }} style={{ padding: "10px 20px", background: "#f1f5f9", color: "#64748b", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                ↺ Reset Section
              </button>
            </div>
          </div>
        )}

        {/* HANDBOOK */}
        {activeSection === "handbook" && (
          <div className="animate-in">
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: "#0c4a6e", marginBottom: 6 }}>Support Worker Handbook</div>
            <div style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>Key policies, procedures and information for working at Vitality Community Care.</div>

            {!activeHandbook ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
                {HANDBOOK_SECTIONS.map(hb => (
                  <div key={hb.id} className="hb-card card"
                    onClick={() => setActiveHandbook(hb.id)}
                    style={{ background: "#fff", borderRadius: 16, padding: "22px 24px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: "4px solid #0e7490", cursor: "pointer" }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{hb.icon}</div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#0c4a6e", marginBottom: 6 }}>{hb.title}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>Click to read →</div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <button onClick={() => setActiveHandbook(null)}
                  style={{ marginBottom: 16, padding: "8px 16px", background: "#f1f5f9", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontSize: 13, color: "#475569" }}>
                  ← Back to Handbook
                </button>
                {(() => {
                  const hb = HANDBOOK_SECTIONS.find(h => h.id === activeHandbook);
                  return (
                    <div style={{ background: "#fff", borderRadius: 16, padding: "28px 32px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", maxWidth: 720 }}>
                      <div style={{ fontSize: 32, marginBottom: 12 }}>{hb.icon}</div>
                      <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "#0c4a6e", marginBottom: 20 }}>{hb.title}</h3>
                      <div style={{ lineHeight: 1.8, color: "#374151", fontSize: 14, whiteSpace: "pre-line" }}>
                        {hb.content.split("\n").map((line, i) => {
                          if (line.startsWith("**") && line.endsWith("**")) {
                            return <div key={i} style={{ fontWeight: 700, color: "#0c4a6e", marginTop: 16, marginBottom: 4 }}>{line.replace(/\*\*/g, "")}</div>;
                          }
                          if (line.startsWith("•")) {
                            return <div key={i} style={{ paddingLeft: 16, color: "#475569" }}>{line}</div>;
                          }
                          return <div key={i}>{line}</div>;
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* SIGN OFF */}
        {activeSection === "overview" && completedItems === totalItems && (
          <div style={{ marginTop: 24, background: "linear-gradient(135deg, #dcfce7, #f0fdf4)", borderRadius: 16, padding: "24px 28px", border: "2px solid #86efac" }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#166534", marginBottom: 8 }}>🎉 All Items Completed!</div>
            <p style={{ color: "#15803d", fontSize: 14, marginBottom: 16 }}>You have completed all induction checklist items. Please sign off below to confirm completion.</p>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input type="checkbox" checked={signedOff} onChange={e => setSignedOff(e.target.checked)}
                style={{ width: 20, height: 20, accentColor: "#16a34a" }} />
              <span style={{ fontWeight: 600, color: "#166534", fontSize: 14 }}>
                I confirm all induction items have been discussed and understood — {employeeInfo.name || "Employee"}
              </span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
