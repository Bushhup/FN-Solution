import {
  Calculator,
  Landmark,
  FileText,
  Building2,
  Handshake,
  ShieldCheck,
  Lock,
  BadgeCheck,
  Users,
  Zap,
  User,
  Building,
  Repeat,
  Heart,
  CreditCard,
  Factory,
  Key,
  MailCheck,
  BarChart,
  Gavel,
  Banknote,
  TrendingUp,
  ClipboardCheck,
  Warehouse,
  Globe,
  FileBadge,
  Laptop,
  FileQuestion,
  Scale,
  Info,
  ScrollText,
  Smartphone,
  Store,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  slug: string;
  category: string;
  description: string;
  details: {
    heading: string;
    text: string;
  }[];
};

export const services: Service[] = [
  // Business Formation
  {
    icon: Building2,
    title: 'Formation of a Private Company.',
    slug: 'private-company-formation',
    category: 'Business Formation',
    description: 'Launch your private limited company with our expert, end-to-end registration services for a fast and compliant start.',
    details: [
      {
        heading: 'Ideal for Startups',
        text: 'A Private Limited Company offers limited liability and a separate legal identity, making it a preferred structure for startups and growing businesses seeking credibility and funding opportunities.'
      },
      {
        heading: 'All-Inclusive Package',
        text: 'Our service covers Digital Signature Certificates (DSC), Director Identification Numbers (DIN), company name approval (RUN), and filing of all incorporation documents (SPICe+).'
      },
      {
        heading: 'Post-Incorporation Essentials',
        text: 'We guide you through mandatory post-registration steps, including PAN/TAN application, opening a corporate bank account, and fulfilling initial statutory requirements.'
      }
    ]
  },
  {
    icon: Building,
    title: 'Formation of a Public Company.',
    slug: 'public-company-formation',
    category: 'Business Formation',
    description: 'Establish a public limited company, enabling you to raise capital from the public and list on stock exchanges.',
    details: [
      {
        heading: 'Access to Public Capital',
        text: 'A public company can offer its shares to the general public, providing a significant avenue for raising capital for large-scale operations and expansion.'
      },
      {
        heading: 'Strict Compliance Framework',
        text: 'We navigate the stringent regulatory requirements for forming a public company, ensuring compliance with SEBI and Companies Act provisions from day one.'
      },
      {
        heading: 'Complete Formation Support',
        text: 'From drafting the Memorandum and Articles of Association to appointing directors and filing the prospectus, we manage the entire complex process for you.'
      }
    ]
  },
  {
    icon: User,
    title: 'Formation of a One Person Company (OPC)',
    slug: 'opc-formation',
    category: 'Business Formation',
    description: 'Start your own venture as a single entrepreneur with the benefits of a corporate structure and limited liability.',
    details: [
      {
        heading: 'Empowering Solo Entrepreneurs',
        text: 'An OPC allows a single promoter to run a corporate entity with limited liability protection, combining the advantages of a sole proprietorship and a company.'
      },
      {
        heading: 'Simplified Compliance',
        text: 'OPCs enjoy relaxed compliance requirements compared to private limited companies, making them easier to manage for individual business owners.'
      },
      {
        heading: 'Full Registration Service',
        text: 'We handle everything from appointing a nominee to filing all necessary forms, ensuring your OPC is set up correctly and quickly.'
      }
    ]
  },
  {
    icon: Handshake,
    title: 'Formation of a Limited Liability Partnership (LLP)',
    slug: 'llp-registration',
    category: 'Business Formation',
    description: 'Combine the flexibility of a partnership with the advantage of limited liability by forming a Limited Liability Partnership (LLP).',
    details: [
      {
        heading: 'Hybrid Business Structure',
        text: 'An LLP is a corporate body with a legal identity separate from its partners. It offers the best of both worlds: operational flexibility and limited liability protection.'
      },
      {
        heading: 'Customized LLP Agreement',
        text: 'We draft a comprehensive LLP Agreement that clearly defines the roles, responsibilities, and profit-sharing ratios of the partners, preventing future disputes.'
      },
      {
        heading: 'Seamless Process',
        text: 'Our streamlined process includes obtaining Designated Partner Identification Numbers (DPIN), name reservation, and filing the FiLLiP form for a hassle-free registration.'
      }
    ]
  },
  {
    icon: Heart,
    title: 'Formation of a non-profit organization/ section 8 company.',
    slug: 'section-8-company-npo-formation',
    category: 'Business Formation',
    description: 'Form a non-profit organization to promote social welfare, arts, science, or charity with tax-exempt benefits.',
    details: [
      {
        heading: 'For Charitable Objectives',
        text: 'A Section 8 Company is a government-recognized non-profit entity established for promoting commerce, art, science, sports, education, research, social welfare, religion, or charity.'
      },
      {
        heading: 'Tax Exemptions & Credibility',
        text: 'These companies receive special tax exemptions and have higher credibility among donors and government bodies compared to trusts or societies.'
      },
      {
        heading: 'Complete Legal Formalities',
        text: 'We manage the entire process, including obtaining the license from the central government and handling all incorporation filings with the ROC.'
      }
    ]
  },
   {
    icon: ScrollText,
    title: 'Trust Formation',
    slug: 'trust-formation',
    category: 'Business Formation',
    description: 'Establish a trust for charitable, religious, or private purposes with our expert guidance on legal drafting and registration.',
    details: [
        {
            heading: 'Public & Private Trusts',
            text: 'We assist in forming both public trusts for charitable purposes and private trusts for estate planning and managing family assets.'
        },
        {
            heading: 'Drafting the Trust Deed',
            text: 'The Trust Deed is the most critical document. Our legal experts draft a clear and legally sound deed that outlines the objectives, beneficiaries, and powers of the trustees.'
        },
        {
            heading: 'Registration & Compliance',
            text: 'We handle the registration of the trust with the appropriate authorities and advise on ongoing compliance, including tax exemptions under Section 12A and 80G.'
        }
    ]
  },
  {
    icon: User,
    title: 'Formation of a Proprietorship Business',
    slug: 'proprietorship-formation',
    category: 'Business Formation',
    description: 'The simplest way to start a business. We help you get the necessary registrations to operate as a sole proprietor.',
    details: [
        {
            heading: 'Easy to Start & Manage',
            text: 'A sole proprietorship is the easiest business structure to set up, with minimal compliance requirements, giving you full control over your operations.'
        },
        {
            heading: 'Essential Registrations',
            text: 'While there is no formal registration, we assist you in obtaining key registrations like a GST number, Udyam Registration, or a professional license to establish your business identity.'
        },
        {
            heading: 'Advisory on Growth',
            text: 'We provide advice on how to manage your finances as a proprietor and guide you on when and how to convert to a more formal business structure as you grow.'
        }
    ]
  },
  {
    icon: Users,
    title: 'Formation of a Partnership Firm',
    slug: 'partnership-firm-formation',
    category: 'Business Formation',
    description: 'Create a partnership firm with a well-drafted partnership deed to ensure clarity and protection for all partners involved.',
    details: [
        {
            heading: 'Governed by Partnership Deed',
            text: 'A partnership is governed by the Partnership Deed, an agreement that specifies the terms, conditions, profit/loss sharing, and responsibilities of each partner.'
        },
        {
            heading: 'Expert Deed Drafting',
            text: 'Our legal team drafts a robust Partnership Deed tailored to your business, covering all essential clauses to prevent future conflicts and protect your interests.'
        },
        {
            heading: 'Optional Registration',
            text: 'While registration is not mandatory, we advise on its benefits—such as the ability to sue third parties—and can manage the registration process with the Registrar of Firms.'
        }
    ]
  },
  {
    icon: Repeat,
    title: 'Conversion of a Proprietorship concern, Partnership firm, LLP into Private or Public Company.',
    slug: 'firm-to-company-conversion',
    category: 'Business Formation',
    description: 'Upgrade your business structure from a firm or LLP to a company to access limited liability, funding, and greater scalability.',
    details: [
      {
        heading: 'Scale Your Business',
        text: 'Convert your proprietorship, partnership, or LLP into a private or public company to benefit from limited liability, easier access to funding, and enhanced credibility.'
      },
      {
        heading: 'Asset Transfer & Compliance',
        text: 'We manage the complex process of asset and liability transfer, ensuring compliance with all legal and tax implications during the conversion.'
      },
      {
        heading: 'End-to-End Legal Management',
        text: 'Our team manages all legal documentation, partner/shareholder approvals, and filings with the ROC to ensure a smooth and compliant transition.'
      }
    ]
  },
  {
    icon: Repeat,
    title: 'Conversion of a Private Company into Public Company or vice versa.',
    slug: 'company-structure-conversion',
    category: 'Business Formation',
    description: 'Strategically alter your company type between private and public to align with your capital needs and business strategy.',
    details: [
      {
        heading: 'Private to Public',
        text: 'Go public to raise capital from the general public through an IPO. We handle the complex process of converting to a public company, including prospectus filing and SEBI compliance.'
      },
      {
        heading: 'Public to Private',
        text: 'Convert your public company to a private one for greater operational control, reduced compliance overhead, and a more consolidated ownership structure.'
      },
      {
        heading: 'Regulatory Navigation',
        text: 'We manage all regulatory requirements, including shareholder approvals via special resolution, NCLT approvals where necessary, and all filings with the Registrar of Companies.'
      }
    ]
  },
  // Compliance & Filing
  {
    icon: FileText,
    title: 'ROC FILING',
    slug: 'roc-filing',
    category: 'Compliance & Filing',
    description: "Fulfill your company's mandatory annual and event-based filing requirements with the Registrar of Companies (ROC) accurately.",
    details: [
        {
            heading: 'Annual Return (MGT-7/7A)',
            text: "We prepare and file your company's annual return, a comprehensive snapshot of your corporate structure, ensuring you meet statutory deadlines."
        },
        {
            heading: 'Financial Statements (AOC-4)',
            text: "Our experts file your audited financial statements, including the Balance Sheet and P&L Account, maintaining your company's financial transparency."
        },
        {
            heading: 'Event-Based Compliance',
            text: "We manage all event-based filings, such as changes in directors (DIR-12) or share capital (SH-7), keeping your company's records current with the ROC."
        }
    ]
  },
  {
    icon: Landmark,
    title: 'GST FILING',
    slug: 'gst-filing',
    category: 'Compliance & Filing',
    description: 'Ensure timely and accurate GST return filings (GSTR-1, GSTR-3B) to maintain compliance and optimize your input tax credit.',
    details: [
      {
        heading: 'Monthly & Quarterly Filings',
        text: 'We manage the timely filing of your GSTR-1 (outward supplies) and GSTR-3B (summary return) to ensure you are always compliant and avoid late fees.'
      },
      {
        heading: 'Input Tax Credit (ITC) Reconciliation',
        text: 'Our team performs detailed reconciliation of your purchase data with GSTR-2A/2B to ensure you claim the maximum eligible Input Tax Credit, optimizing your cash flow.'
      },
      {
        heading: 'Annual GST Return',
        text: 'We handle the preparation and filing of the annual GST return (GSTR-9) and reconciliation statement (GSTR-9C), providing a consolidated view of your yearly GST activity.'
      }
    ]
  },
   {
    icon: FileText,
    title: 'Income Tax Filing',
    slug: 'income-tax-filing',
    category: 'Compliance & Filing',
    description: 'Maximize returns and ensure compliance with our precise income tax filing services for individuals, firms, and companies.',
    details: [
        {
            heading: 'For Individuals & Salaried',
            text: 'We help you file your income tax returns while maximizing deductions under sections like 80C, 80D, HRA, and more, ensuring you get the best possible refund.'
        },
        {
            heading: 'For Businesses & Professionals',
            text: 'Our corporate tax experts manage the entire tax filing process, from computing tax liability under various heads of income to timely filing of ITR to avoid penalties.'
        },
        {
            heading: 'TDS & Advance Tax Compliance',
            text: 'We provide advisory and assistance in TDS compliance, advance tax calculations, and payment to ensure you meet all your tax obligations throughout the year.'
        }
    ]
  },
  {
    icon: MailCheck,
    title: 'Notice clearing of GST and income tax.',
    slug: 'notice-clearing',
    category: 'Compliance & Filing',
    description: 'Expertly handle and respond to notices from GST and Income Tax departments with our professional representation services.',
    details: [
      {
        heading: 'Analysis and Response Strategy',
        text: "Our tax experts analyze the notice to understand the department's query, prepare a robust strategy, and draft a detailed, legally sound response."
      },
      {
        heading: 'Professional Representation',
        text: 'We represent you before the tax authorities, handling all communications and submissions to ensure your case is presented clearly and professionally.'
      },
      {
        heading: 'Resolution and Closure',
        text: 'Our goal is to achieve a swift and favorable resolution of the issue, minimizing any potential liability and ensuring the matter is formally closed with the department.'
      }
    ]
  },
  // Accounting & Advisory
  {
    icon: Calculator,
    title: 'Accounting and Book-keeping Services',
    slug: 'accounting-book-keeping',
    category: 'Accounting & Advisory',
    description: 'Maintain pristine financial records with our professional accounting and bookkeeping services, tailored to your business needs.',
    details: [
      {
        heading: 'Accurate Record Keeping',
        text: 'We use modern accounting software to manage your daily transactions, maintain ledgers, and ensure your books are always accurate and up-to-date.'
      },
      {
        heading: 'Bank & Ledger Reconciliation',
        text: 'Our team performs regular bank reconciliations and scrutinizes ledgers to identify and rectify discrepancies, ensuring the integrity of your financial data.'
      },
      {
        heading: 'Compliance with Accounting Standards',
        text: 'We ensure that your books of accounts are maintained in accordance with the applicable accounting standards, providing a solid foundation for audits and financial reporting.'
      }
    ]
  },
  {
    icon: Users,
    title: 'Payroll Processing Services',
    slug: 'payroll-processing',
    category: 'Accounting & Advisory',
    description: 'Streamline your payroll process, from salary calculation to compliance, ensuring accuracy and timeliness for your employees.',
    details: [
      {
        heading: 'End-to-End Management',
        text: 'We handle everything from calculating salaries, deductions, and reimbursements to generating payslips and managing employee records.'
      },
      {
        heading: 'Statutory Compliance',
        text: 'Our service includes managing all payroll-related statutory compliance, including Provident Fund (PF), Employee State Insurance (ESI), and TDS deductions.'
      },
      {
        heading: 'Confidential & Secure',
        text: 'We ensure complete confidentiality and security of your employee and payroll data, providing a reliable and trustworthy outsourcing solution.'
      }
    ]
  },
   {
    icon: BarChart,
    title: 'Management Reporting',
    slug: 'management-reporting',
    category: 'Accounting & Advisory',
    description: 'Gain critical insights into your business performance with customized Management Information System (MIS) reports.',
    details: [
        {
            heading: 'Customized Dashboards',
            text: 'We create tailored dashboards and reports that track key performance indicators (KPIs) relevant to your industry and business goals.'
        },
        {
            heading: 'Financial Analysis',
            text: 'Our reports provide in-depth analysis of your revenue, expenses, profitability, and cash flow, helping you make informed, data-driven decisions.'
        },
        {
            heading: 'Strategic Insights',
            text: 'Beyond numbers, we provide strategic insights and recommendations based on financial trends, helping you identify opportunities for growth and cost optimization.'
        }
    ]
  },
  {
    icon: Gavel,
    title: 'Advance Ruling Representational Services',
    slug: 'advance-ruling-services',
    category: 'Accounting & Advisory',
    description: 'Obtain clarity on ambiguous tax provisions by seeking an advance ruling from tax authorities with our expert representation.',
    details: [
      {
        heading: 'Clarity on Tax Positions',
        text: 'An advance ruling provides certainty on the tax implications of a proposed transaction, helping you make informed business decisions and avoid future litigation.'
      },
      {
        heading: 'Application & Documentation',
        text: 'We prepare and file the application for advance ruling, ensuring that the question is framed correctly and all necessary facts and documentation are presented.'
      },
      {
        heading: 'Representation Before Authority',
        text: "Our tax experts represent your case before the Authority for Advance Rulings (AAR), arguing your position effectively to secure a favorable ruling."
      }
    ]
  },
  {
    icon: Banknote,
    title: 'Project Reports for Bank Approvals',
    slug: 'project-reports-for-banks',
    category: 'Accounting & Advisory',
    description: "Secure bank loans and funding with professionally prepared, data-driven project reports that showcase your venture's viability.",
    details: [
        {
            heading: 'Comprehensive Financial Projections',
            text: 'We create detailed financial projections, including projected profit and loss, balance sheets, and cash flow statements, that banks require for loan applications.'
        },
        {
            heading: 'Market & Viability Analysis',
            text: 'Our reports include a thorough analysis of your market, business model, and overall viability, presenting a strong case to lenders.'
        },
        {
            heading: 'CMA Data Preparation',
            text: 'We prepare Credit Monitoring Arrangement (CMA) data in the standard format required by banks, ensuring your loan application is processed smoothly.'
        }
    ]
  },
  {
    icon: TrendingUp,
    title: 'Cash Flow Planning',
    slug: 'cash-flow-planning',
    category: 'Accounting & Advisory',
    description: 'Optimize your working capital and ensure financial stability with our expert cash flow planning and forecasting services.',
    details: [
      {
        heading: 'Forecasting and Budgeting',
        text: 'We help you create detailed cash flow forecasts and budgets, allowing you to anticipate future fund requirements and manage your resources effectively.'
      },
      {
        heading: 'Working Capital Management',
        text: 'Our experts analyze your accounts receivable, accounts payable, and inventory cycles to suggest strategies for improving your working capital and liquidity.'
      },
      {
        heading: 'Financing & Investment Advice',
        text: 'Based on your cash flow position, we provide advice on securing financing for expansion or identifying opportunities for short-term investments to maximize returns on surplus funds.'
      }
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Valuation & Verification of Fixed Assets',
    slug: 'fixed-asset-valuation-verification',
    category: 'Accounting & Advisory',
    description: 'Get an accurate valuation and physical verification of your fixed assets for financial reporting, mergers, or insurance purposes.',
    details: [
      {
        heading: 'Physical Verification',
        text: 'Our team conducts a physical verification of all fixed assets, tagging them and reconciling the physical count with your fixed asset register.'
      },
      {
        heading: 'Accurate Valuation',
        text: 'We provide an independent valuation of your assets based on established methodologies, crucial for financial reporting, M&A, or disposal.'
      },
      {
        heading: 'FAR Maintenance',
        text: 'We help you maintain a clean and updated Fixed Asset Register (FAR), ensuring compliance with CARO reporting and internal control requirements.'
      }
    ]
  },
  // Audit & Assurance
  {
    icon: Landmark,
    title: 'Statutory Audit as per Companies Act.',
    slug: 'statutory-audit',
    category: 'Audit & Assurance',
    description: 'Ensure your financial statements present a true and fair view with our independent and rigorous statutory audit services.',
    details: [
        {
            heading: 'Compliance with Law',
            text: 'We conduct a thorough examination of your financial records to ensure they comply with the Companies Act, 2013 and applicable Accounting Standards.'
        },
        {
            heading: 'Independent Opinion',
            text: 'Our audit report provides an independent and credible opinion on your financial statements, enhancing trust among shareholders, investors, and lenders.'
        },
        {
            heading: 'Internal Control Review',
            text: 'As part of the audit, we review your internal control systems and provide valuable recommendations for strengthening them.'
        }
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Internal Audits.',
    slug: 'internal-audits',
    category: 'Audit & Assurance',
    description: 'Strengthen your corporate governance and operational efficiency with our risk-based internal audit services.',
    details: [
      {
        heading: 'Risk-Based Approach',
        text: 'Our internal audits focus on identifying and mitigating key operational and financial risks, helping you protect your assets and improve processes.'
      },
      {
        heading: 'Process Improvement',
        text: 'We go beyond compliance to provide actionable recommendations for improving efficiency, reducing costs, and strengthening internal controls.'
      },
      {
        heading: 'Objective Assurance',
        text: 'Our audits provide the board and senior management with an independent and objective assessment of the business operations and governance framework.'
      }
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Management Audits.',
    slug: 'management-audits',
    category: 'Audit & Assurance',
    description: 'Evaluate the effectiveness of your management policies and procedures to drive strategic improvements.',
    details: [
      {
        heading: 'Performance Evaluation',
        text: "Our management audits assess how effectively management is achieving the organization's objectives and utilizing its resources."
      },
      {
        heading: 'Strategic Review',
        text: "We review your business strategies, decision-making processes, and organizational structure to identify areas for strategic improvement."
      },
      {
        heading: 'Actionable Reporting',
        text: 'Our reports provide senior leadership with clear, actionable insights to enhance managerial effectiveness and overall business performance.'
      }
    ]
  },
  {
    icon: FileBadge,
    title: 'Limited Reviews.',
    slug: 'limited-reviews',
    category: 'Audit & Assurance',
    description: 'Fulfill quarterly regulatory requirements with our efficient limited review services for financial statements.',
    details: [
      {
        heading: 'For Listed Entities',
        text: 'We perform limited reviews of interim financial statements as required by SEBI regulations for listed companies.'
      },
      {
        heading: 'Moderate Assurance',
        text: 'A limited review consists primarily of inquiries and analytical procedures, providing a moderate level of assurance to stakeholders.'
      },
      {
        heading: 'Timely Reporting',
        text: 'We ensure timely completion and reporting to help you meet your stock exchange filing deadlines without hassle.'
      }
    ]
  },
  {
    icon: FileText,
    title: 'Tax Audit as per Income Tax Act.',
    slug: 'tax-audit',
    category: 'Audit & Assurance',
    description: 'Fulfill your obligations under the Income Tax Act with our meticulous tax audit services, ensuring accurate reporting and compliance.',
    details: [
      {
        heading: 'Mandatory Compliance',
        text: 'We conduct tax audits as required under Section 44AB of the Income Tax Act for businesses exceeding specified turnover limits.'
      },
      {
        heading: 'Accurate Reporting in Form 3CD',
        text: 'Our team ensures that all the particulars required in Form 3CD are correctly and completely reported, minimizing the risk of scrutiny from the tax department.'
      },
      {
        heading: 'Tax Planning Opportunities',
        text: 'During the audit, we identify potential tax planning opportunities and areas for tax savings, providing value beyond simple compliance.'
      }
    ]
  },
  {
    icon: Landmark,
    title: 'GST Audit.',
    slug: 'gst-audit',
    category: 'Audit & Assurance',
    description: 'Ensure GST compliance and identify potential tax savings with our comprehensive GST audit and reconciliation services.',
    details: [
      {
        heading: 'Turnover-Based Audit',
        text: 'We conduct GST audits for businesses whose turnover exceeds the prescribed limit, ensuring compliance with GST laws.'
      },
      {
        heading: 'Reconciliation and Reporting',
        text: 'Our audit involves a detailed reconciliation of your annual returns with your audited financial statements, reported in Form GSTR-9C.'
      },
      {
        heading: 'Compliance & ITC Optimization',
        text: 'We verify your compliance with GST provisions and help you identify any unclaimed Input Tax Credit (ITC) or excess tax payments.'
      }
    ]
  },
   {
    icon: FileBadge,
    title: 'VAT Audit.',
    slug: 'vat-audit',
    category: 'Audit & Assurance',
    description: 'Conduct VAT audits as required under state-level regulations to ensure compliance and accurate reporting.',
    details: [
      {
        heading: 'State-Level Compliance',
        text: "For businesses still under the VAT regime for certain goods (like petroleum), we conduct audits as per the respective state's VAT laws."
      },
      {
        heading: 'Accurate Reporting',
        text: 'Our audit ensures that your VAT returns are accurate and all required forms and declarations are in order.'
      },
      {
        heading: 'Representation Support',
        text: 'We provide support during assessments and inquiries from the state tax departments.'
      }
    ]
  },
  {
    icon: Warehouse,
    title: 'Stock Audit.',
    slug: 'stock-audit',
    category: 'Audit & Assurance',
    description: 'Verify and value your inventory accurately with our independent stock audit services, crucial for reporting and lender confidence.',
    details: [
        {
            heading: 'Physical Verification',
            text: 'Our team conducts a physical verification of your inventory to ensure the quantities match your book records, identifying any discrepancies.'
        },
        {
            heading: 'Valuation and Ageing Analysis',
            text: 'We verify the valuation of your stock according to accounting standards and provide an ageing analysis to identify slow-moving or obsolete items.'
        },
        {
            heading: 'Report for Lenders',
            text: 'Our independent stock audit report is a vital document for banks and financial institutions that have provided funding against inventory.'
        }
    ]
  },
   {
    icon: Scale,
    title: 'Transfer Pricing audit as per Section 92E of Income Tax Act.',
    slug: 'transfer-pricing-audit',
    category: 'Audit & Assurance',
    description: "Ensure your international and specified domestic transactions are at arm's length with our expert Transfer Pricing audit.",
    details: [
      {
        heading: 'Compliance with Section 92E',
        text: 'We conduct the mandatory transfer pricing audit and issue the report in Form 3CEB for companies with international or specified domestic transactions.'
      },
      {
        heading: 'Robust Documentation',
        text: "We help you prepare and maintain robust transfer pricing documentation that substantiates the arm's length nature of your transactions, serving as a key defense during assessments."
      },
      {
        heading: 'Advisory and Assistance',
        text: 'Our experts advise on structuring your inter-company transactions in a tax-efficient manner while remaining compliant with transfer pricing regulations.'
      }
    ]
  },
  {
    icon: Laptop,
    title: 'Information Systems Audit.',
    slug: 'is-audit',
    category: 'Audit & Assurance',
    description: 'Assess the controls, security, and efficiency of your IT infrastructure with our comprehensive Information Systems audit.',
    details: [
      {
        heading: 'IT Governance Review',
        text: 'We evaluate your IT governance framework to ensure it aligns with your business objectives and best practices.'
      },
      {
        heading: 'Security & Vulnerability Assessment',
        text: 'Our audit identifies vulnerabilities in your IT systems, data security protocols, and access controls, providing recommendations to mitigate risks.'
      },
      {
        heading: 'Data Integrity & System Efficiency',
        text: 'We assess the integrity of the data processed by your systems and evaluate the efficiency of your IT operations to ensure they support business needs effectively.'
      }
    ]
  },
  // Special Services
  {
    icon: Key,
    title: 'Digital Signature Certificate (DSC).',
    slug: 'dsc-services',
    category: 'Special Services',
    description: 'Obtain your secure Digital Signature Certificate (DSC) quickly for all your e-filing and online transaction needs.',
    details: [
      {
        heading: 'Essential for E-Filing',
        text: 'A DSC is mandatory for filing returns with the MCA and Income Tax department, as well as for participating in e-tenders and signing documents electronically.'
      },
      {
        heading: 'Fast & Secure Issuance',
        text: 'We offer a quick and secure process for obtaining Class 3 DSCs for individuals and organizations, with a validity of up to 3 years.'
      },
      {
        heading: 'Complete Support',
        text: 'Our team guides you through the entire process, from document submission and video verification to DSC installation and usage.'
      }
    ]
  },
  {
    icon: CreditCard,
    title: 'PAN CARD APPLICATION',
    slug: 'pan-card-application',
    category: 'Special Services',
    description: 'Apply for your new PAN card or request corrections with our hassle-free application and processing assistance.',
    details: [
      {
        heading: 'New PAN Application',
        text: 'We assist individuals and entities in applying for a new Permanent Account Number (PAN), a unique identifier essential for all financial transactions in India.'
      },
      {
        heading: 'Correction & Updates',
        text: 'Need to update your name, address, or other details on your PAN card? We manage the entire correction process for you.'
      },
      {
        heading: 'Lost or Damaged PAN',
        text: 'We help you apply for a duplicate PAN card in case the original is lost, stolen, or damaged, ensuring you have your essential document.'
      }
    ]
  },
  {
    icon: Factory,
    title: 'UDYAM REGISTRATION',
    slug: 'udyam-registration',
    category: 'Special Services',
    description: 'Register your enterprise as an MSME under the Udyam portal to access a wide range of government benefits and schemes.',
    details: [
      {
        heading: 'Gateway to MSME Benefits',
        text: 'Udyam Registration is the new process for registering as a Micro, Small, or Medium Enterprise (MSME), making you eligible for various government schemes.'
      },
      {
        heading: 'Priority Sector Lending',
        text: 'Registered MSMEs get easier access to credit and loans from banks under priority sector lending norms.'
      },
      {
        heading: 'Other Benefits',
        text: 'Benefits include protection against delayed payments, subsidies for patent registration, and eligibility for various government tenders and subsidies.'
      }
    ]
  },
  {
    icon: Building,
    title: 'RERA REGISTRATION',
    slug: 'rera-registration',
    category: 'Special Services',
    description: 'Ensure your real estate project is compliant with the Real Estate (Regulation and Development) Act with our expert registration services.',
    details: [
      {
        heading: 'Mandatory for Real Estate Projects',
        text: 'RERA registration is mandatory for all commercial and residential real estate projects, bringing transparency and protecting the interests of homebuyers.'
      },
      {
        heading: 'Project & Agent Registration',
        text: 'We assist real estate developers in registering their projects and also help real estate agents register themselves under RERA.'
      },
      {
        heading: 'Compliance & Documentation',
        text: 'Our team manages the extensive documentation and compliance requirements for RERA registration, ensuring your application is approved without delays.'
      }
    ]
  },
  {
    icon: Globe,
    title: 'Foreign Exchange Remittance Certifications such as Form 15CB / 15CA.',
    slug: 'form-15cb-15ca-certification',
    category: 'Special Services',
    description: 'Facilitate foreign remittances with the required certifications from a Chartered Accountant, ensuring tax compliance.',
    details: [
      {
        heading: 'Certification for Foreign Payments',
        text: 'Form 15CB is a certificate issued by a Chartered Accountant to ensure that taxes have been correctly deducted on payments made to non-residents.'
      },
      {
        heading: 'Determination of Tax Liability',
        text: 'We examine the remittance details in light of the Income Tax Act and applicable Double Taxation Avoidance Agreements (DTAA) to determine the correct tax liability.'
      },
      {
        heading: 'Filing of Form 15CA',
        text: 'Once Form 15CB is issued, we assist you in filing the corresponding Form 15CA with the Income Tax Department, a necessary step to complete the remittance process.'
      }
    ]
  },
  {
    icon: FileBadge,
    title: 'Special Purpose Audits & Certifications.',
    slug: 'special-audits-certifications',
    category: 'Special Services',
    description: 'We provide a wide range of special-purpose audits and certifications required for regulatory compliance or other specific needs.',
    details: [
      {
        heading: 'Net Worth Certificates',
        text: 'We issue Net Worth Certificates for individuals and companies, often required for visa applications, bank loans, or as part of franchise agreements.'
      },
      {
        heading: 'Turnover Certificates',
        text: 'We provide certified turnover figures for various purposes, including tender applications and regulatory submissions.'
      },
      {
        heading: 'Customized Assurance',
        text: 'Whatever your specific certification need, we provide tailored assurance services to meet your requirements with credibility and accuracy.'
      }
    ]
  },
  {
    icon: Info,
    title: 'Documentation and Audit Support.',
    slug: 'documentation-audit-support',
    category: 'Special Services',
    description: 'Get expert assistance in preparing documentation for audits and assessments, ensuring you are always prepared for scrutiny.',
    details: [
        {
            heading: 'Preparation for Scrutiny',
            text: 'We help you organize and prepare all necessary documents and information required by auditors or tax authorities for a smooth assessment process.'
        },
        {
            heading: 'Reconciliation & Support',
            text: 'Our team provides support in reconciling data, preparing schedules, and drafting responses to queries raised during an audit.'
        },
        {
            heading: 'Peace of Mind',
            text: 'With our expert support, you can face any audit or assessment with confidence, knowing that your documentation is in order.'
        }
    ]
  },
  {
    icon: FileQuestion,
    title: 'Advisory and Assistance relating to preparation and filing',
    slug: 'advisory-assistance-filing',
    category: 'Special Services',
    description: 'Receive expert guidance and hands-on assistance with the preparation and filing of various regulatory and business documents.',
    details: [
        {
            heading: 'Comprehensive Filing Support',
            text: 'We offer advisory and practical help for a wide range of filings beyond standard tax returns, including government grant applications, compliance reports, and more.'
        },
        {
            heading: 'Document Preparation',
            text: 'Our team assists in drafting and preparing complex documentation, ensuring accuracy and compliance with the relevant authorities\' requirements.'
        },
        {
            heading: 'Strategic Guidance',
            text: 'We provide strategic advice on the filing process, helping you understand the implications and choose the best course of action for your business.'
        }
    ]
  },
  {
    icon: CreditCard,
    title: 'Pan card',
    slug: 'pan-card',
    category: 'Special Services',
    description: 'Hassle-free application and processing assistance for your PAN card needs, including new applications and corrections.',
    details: [
      {
        heading: 'New PAN Card',
        text: 'We assist individuals, firms, and companies in applying for a new Permanent Account Number (PAN), which is essential for all financial transactions in India.'
      },
      {
        heading: 'Corrections and Updates',
        text: 'Need to update your details on your PAN card? We manage the entire process for you, ensuring your information is current.'
      }
    ]
  },
  {
    icon: Smartphone,
    title: 'Gadget',
    slug: 'gadget-service',
    category: 'Special Services',
    description: 'Specialized assistance related to gadget and electronics compliance and registration matters.',
    details: [
      {
        heading: 'Gadget Compliance',
        text: 'Navigating the regulatory landscape for electronic gadgets can be complex. We provide advisory services to ensure your products meet all necessary standards.'
      },
      {
        heading: 'Registration Support',
        text: 'We assist with any required registrations for electronic devices, helping you bring your products to market legally and efficiently.'
      }
    ]
  },
  {
    icon: Store,
    title: 'Gumasta License',
    slug: 'gumasta-license',
    category: 'Special Services',
    description: 'Obtain your Shop and Establishment Act license (Gumasta) to legally operate your business within municipal limits.',
    details: [
      {
        heading: 'Mandatory for Businesses',
        text: "A Gumasta license is required for all shops and commercial establishments to operate within their respective state. It serves as proof of your business's legal existence."
      },
      {
        heading: 'Simplified Application Process',
        text: 'We handle the entire application process, from document preparation to submission with the local municipal corporation, ensuring a smooth and quick registration.'
      }
    ]
  },
  {
    icon: Factory,
    title: 'Udyam',
    slug: 'udyam',
    category: 'Special Services',
    description: 'Register your business under the Udyam portal to be recognized as an MSME and unlock various government benefits.',
    details: [
      {
        heading: 'MSME Recognition',
        text: 'Udyam Registration provides your business with an official recognition certificate as a Micro, Small, or Medium Enterprise (MSME).'
      },
      {
        heading: 'Access Government Schemes',
        text: 'Registered MSMEs are eligible for numerous benefits, including priority sector lending, subsidies, and easier access to government tenders.'
      }
    ]
  },
  {
    icon: FileText,
    title: 'Income Certificate',
    slug: 'income-certificate',
    category: 'Special Services',
    description: 'Obtain an official Income Certificate from the relevant government authority for various personal and professional needs.',
    details: [
      {
        heading: 'Official Proof of Income',
        text: 'An Income Certificate is an official document that states your annual income. It is required for various purposes, including applying for loans, scholarships, and government schemes.'
      },
      {
        heading: 'Application Assistance',
        text: "We guide you through the application process, helping you prepare the necessary documents and file the application with the local authorities like the District Magistrate/Collector's office."
      }
    ]
  },
    {
    icon: Landmark,
    title: 'GST filing',
    slug: 'gst-filing-service',
    category: 'Compliance & Filing',
    description: 'Ensure timely and accurate GST return filings to maintain compliance and optimize your input tax credit with our expert services.',
    details: [
      {
        heading: 'Monthly & Quarterly Returns',
        text: 'We manage the timely filing of your GSTR-1 and GSTR-3B, ensuring you are always compliant and avoid penalties.'
      },
      {
        heading: 'ITC Reconciliation',
        text: 'Our team performs detailed reconciliation to ensure you claim the maximum eligible Input Tax Credit (ITC), optimizing your cash flow.'
      }
    ]
  },
  {
    icon: Calculator,
    title: 'Book keeping and accounting',
    slug: 'book-keeping-and-accounting',
    category: 'Accounting & Advisory',
    description: 'Maintain pristine financial records with our professional accounting and bookkeeping services, tailored for your business.',
    details: [
      {
        heading: 'Accurate Record Keeping',
        text: 'We use modern accounting software to manage your daily transactions, maintain ledgers, and ensure your books are always accurate and up-to-date.'
      },
      {
        heading: 'Financial Reporting',
        text: 'We prepare essential financial statements like the Profit & Loss Account and Balance Sheet, giving you a clear view of your financial health.'
      }
    ]
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Lock,
    title: 'Secure & Confidential',
    description:
      'We use bank-level encryption and strict data protocols to ensure your financial information is always protected.',
  },
  {
    icon: BadgeCheck,
    title: 'Guaranteed Reliability',
    description:
      'Our seasoned professionals deliver accurate, timely, and reliable services you can count on, every time.',
  },
  {
    icon: Users,
    title: 'Expert Advisors',
    description:
      'Access a dedicated team of chartered accountants and legal experts to guide you through complex financial landscapes.',
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    description:
      'Our technology-driven approach streamlines processes, ensuring quick turnaround times without compromising on quality.',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  review: string;
  imageId: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah L.',
    role: 'Founder, TechStart Inc.',
    review:
      'FN Tax Solution revolutionized how we handle compliance. Their expert team made the entire process seamless and stress-free. We can now focus on our core business with complete peace of mind.',
    imageId: 'testimonial-1',
  },
  {
    name: 'Michael B.',
    role: 'CEO, BuildRight Corp.',
    review:
      'The professionalism and speed of FN Tax Solution are unmatched. They handled our company registration flawlessly. Highly recommended for any business looking for reliable financial services.',
    imageId: 'testimonial-2',
  },
  {
    name: 'Emily C.',
    role: 'Freelance Designer',
    review:
      'As a freelancer, tax filing was always a nightmare. FN Tax Solution simplified everything. Their advisors are knowledgeable and incredibly patient. I finally feel in control of my finances.',
    imageId: 'testimonial-3',
  },
];
