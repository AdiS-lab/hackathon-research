export interface SensorReading {
  sensorId: string;
  timestamp: number;
  temperature: number; // Celsius
  humidity: number; // %
  pressure: number; // hPa
  co2: number; // ppm
  voc: number; // ppb (volatile organic compounds)
  noise: number; // dB
  pm25: number; // ug/m3
}

export interface SensorNode {
  id: string;
  name: string;
  location: string;
  status: "online" | "offline" | "warning";
  lastReading: SensorReading | null;
}

export interface Alert {
  id: string;
  sensorId: string;
  type: "anomaly" | "threshold" | "prediction";
  severity: "info" | "warning" | "critical";
  metric: string;
  message: string;
  timestamp: number;
  acknowledged: boolean;
}

export interface AgentMessage {
  agentName: "anomaly-detector" | "trend-predictor" | "advisor";
  content: string;
  timestamp: number;
  relatedSensorId?: string;
  relatedMetric?: string;
}

export interface Threshold {
  metric: keyof Omit<SensorReading, "sensorId" | "timestamp">;
  label: string;
  unit: string;
  min: number;
  max: number;
  warningMin: number;
  warningMax: number;
}

export const THRESHOLDS: Threshold[] = [
  {
    metric: "temperature",
    label: "Temperature",
    unit: "°C",
    min: 15,
    max: 30,
    warningMin: 18,
    warningMax: 27,
  },
  {
    metric: "humidity",
    label: "Humidity",
    unit: "%",
    min: 20,
    max: 80,
    warningMin: 30,
    warningMax: 60,
  },
  {
    metric: "co2",
    label: "CO2",
    unit: "ppm",
    min: 0,
    max: 2000,
    warningMin: 0,
    warningMax: 1000,
  },
  {
    metric: "pm25",
    label: "PM2.5",
    unit: "ug/m3",
    min: 0,
    max: 150,
    warningMin: 0,
    warningMax: 35,
  },
  {
    metric: "noise",
    label: "Noise",
    unit: "dB",
    min: 0,
    max: 120,
    warningMin: 0,
    warningMax: 70,
  },
];
