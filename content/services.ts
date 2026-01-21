export type Service = {
  slug: string;
  title: string;
  value: string;
  summary: string;
  bullets: string[];
  process: string[];
  deliverables: string[];
  tools: string[];
  kpis: string[];
};

export const services: Service[] = [
  {
    slug: 'iot',
    title: 'IoT Services',
    value: 'Connect devices securely, stream real-time data, and act on insights.',
    summary: 'End-to-end IoT: device provisioning, MQTT/REST, edge compute, dashboards, and alerting with security best practices.',
    bullets: [
      'Secure device onboarding and fleet management',
      'MQTT/REST data pipelines with reliability',
      'Edge processing for low latency responses',
      'Operational dashboards and alerting',
      'Scalable cloud or on-prem deployments',
      'Security reviews and hardening'
    ],
    process: ['Discover', 'Design', 'Implement', 'Validate', 'Support'],
    deliverables: ['Architecture diagram', 'Device configs', 'Dashboard URLs', 'SOPs & runbooks', 'Handover training'],
    tools: ['Raspberry Pi / ESP32', 'MQTT (Mosquitto/EMQX)', 'Node-RED', 'Docker', 'Grafana', 'Azure/AWS IoT'],
    kpis: ['-27% downtime', '+18% OEE']
  },
  {
    slug: 'electronics',
    title: 'Electronic Designs',
    value: 'PCB, firmware, and DFM-built for reliability.',
    summary: 'From schematic to production: PCB design, embedded firmware, EMC/EMI design, prototyping, and testing.',
    bullets: [
      'Schematic capture & layout (DFM/DFT)',
      'Firmware development and bootloaders',
      'EMC/EMI compliant designs',
      'Prototype bring-up and validation',
      'Design verification test (DVT) plans',
      'Manufacturing liaison and support'
    ],
    process: ['Discover', 'Design', 'Implement', 'Validate', 'Support'],
    deliverables: ['BOM & Gerbers', 'Firmware repo', 'Test reports', '3D models', 'Assembly guides'],
    tools: ['Altium/KiCad', 'J-Link', 'Oscilloscopes & analyzers', 'STM32/ESP32/AVR'],
    kpis: ['-20% unit cost', 'Faster time-to-market']
  },
  {
    slug: 'industrial',
    title: 'Industrial Automation',
    value: 'PLC/SCADA, robotics, and vision for measurable OEE gains.',
    summary: 'Design and deploy robust PLC/SCADA/HMI systems, robotics, and vision inspection to increase throughput and quality.',
    bullets: [
      'PLC/SCADA/HMI programming',
      'Robotics and cobots integration',
      'Vision systems for inspection',
      'OEE monitoring and dashboards',
      'Predictive maintenance setup',
      'Safety and compliance'
    ],
    process: ['Discover', 'Design', 'Implement', 'Validate', 'Support'],
    deliverables: ['PLC/HMI code', 'Wiring diagrams', 'SOPs and safety docs', 'Training and handover'],
    tools: ['Siemens/Allen-Bradley', 'Ignition/WinCC', 'Cognex/OpenCV', 'Modbus/OPC UA'],
    kpis: ['+15% throughput', '-30% defects']
  },
  {
    slug: 'software-web',
    title: 'Software & Web Development',
    value: 'Internal tools, dashboards, and integrations that fit your process.',
    summary: 'Build custom portals, data pipelines, APIs, and AI copilots to connect your operations end-to-end.',
    bullets: [
      'Internal tools and portals',
      'Data pipelines and ETL',
      'API design/integration',
      'Role-based access and audit',
      'AI copilots and workflow automation',
      'Testing, CI/CD, and monitoring'
    ],
    process: ['Discover', 'Design', 'Implement', 'Validate', 'Support'],
    deliverables: ['Source repo', 'API docs', 'Infra as code', 'Unit/E2E tests', 'Runbooks'],
    tools: ['Next.js/React', 'Python/Node.js', 'PostgreSQL/MongoDB', 'Docker/K8s'],
    kpis: ['-25% manual work', 'Fewer errors']
  }
];
