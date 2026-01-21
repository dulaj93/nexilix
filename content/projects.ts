export type Project = {
  slug: string;
  title: string;
  category: string;
  topic: string;
  summary: string;
  description: string;
  services: string[];
  features: string[];
  results: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    slug: 'cold-chain-telemetry',
    title: 'Cold Chain Telemetry',
    category: 'IoT',
    topic: 'Pharma logistics monitoring',
    summary: 'Realtime temperature and shock monitoring across 120+ refrigerated shipments.',
    description:
      'We built a low-power sensor network with secure device onboarding, live dashboards, and alerting. The system integrates with existing logistics workflows and provides audit-ready reports.',
    services: ['iot', 'software-web'],
    features: [
      'Secure device provisioning and OTA updates',
      'MQTT data pipeline with alerting rules',
      'Operations dashboard with exportable reports',
      'Role-based access and audit logs'
    ],
    results: ['-28% spoilage incidents', 'Faster incident response'],
    images: ['/hero-bg.webp', '/robot-arm.png']
  },
  {
    slug: 'vision-inspection-line',
    title: 'Vision Inspection Line',
    category: 'Industrial',
    topic: 'Automated defect detection',
    summary: 'Machine vision QA with PLC integration for high-throughput production.',
    description:
      'We integrated a vision inspection cell with PLC/SCADA control and automated rejection. The system improved quality while maintaining throughput and traceability.',
    services: ['industrial', 'software-web'],
    features: [
      'PLC/SCADA integration and line interlocks',
      'Vision model tuning and calibration',
      'Defect classification dashboards',
      'Traceability and batch reporting'
    ],
    results: ['-32% defects', '+12% throughput'],
    images: ['/hero-bg.webp', '/og-image.png']
  },
  {
    slug: 'smart-energy-meter',
    title: 'Smart Energy Meter',
    category: 'Electronics',
    topic: 'Embedded metering device',
    summary: 'Custom PCB and firmware for secure energy metering with cloud sync.',
    description:
      'We designed a production-ready PCB with embedded firmware, EMC validation, and secure cloud sync. The device supports encrypted telemetry and remote diagnostics.',
    services: ['electronics', 'iot'],
    features: [
      'DFM-ready PCB and test points',
      'Secure firmware with diagnostics',
      'Cloud sync and offline buffering',
      'Manufacturing handover package'
    ],
    results: ['-20% unit cost', 'Faster time-to-market'],
    images: ['/hero-bg.webp', '/logo.svg']
  }
];
