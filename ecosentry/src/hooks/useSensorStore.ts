import { create } from "zustand";
import type { SensorNode, SensorReading, Alert, AgentMessage } from "../lib/types";

interface SensorState {
  nodes: SensorNode[];
  readings: Map<string, SensorReading[]>; // sensorId -> history
  alerts: Alert[];
  agentMessages: AgentMessage[];
  addReading: (reading: SensorReading) => void;
  addAlert: (alert: Alert) => void;
  addAgentMessage: (msg: AgentMessage) => void;
  acknowledgeAlert: (alertId: string) => void;
  setNodes: (nodes: SensorNode[]) => void;
}

const MAX_HISTORY = 100; // readings per sensor

export const useSensorStore = create<SensorState>((set) => ({
  nodes: [],
  readings: new Map(),
  alerts: [],
  agentMessages: [],

  addReading: (reading: SensorReading) =>
    set((s) => {
      const newReadings = new Map(s.readings);
      const history = newReadings.get(reading.sensorId) ?? [];
      const updated = [...history, reading].slice(-MAX_HISTORY);
      newReadings.set(reading.sensorId, updated);

      const newNodes = s.nodes.map((n) =>
        n.id === reading.sensorId
          ? { ...n, lastReading: reading, status: "online" as const }
          : n
      );

      return { readings: newReadings, nodes: newNodes };
    }),

  addAlert: (alert: Alert) =>
    set((s) => ({ alerts: [alert, ...s.alerts].slice(0, 50) })),

  addAgentMessage: (msg: AgentMessage) =>
    set((s) => ({
      agentMessages: [msg, ...s.agentMessages].slice(0, 30),
    })),

  acknowledgeAlert: (alertId: string) =>
    set((s) => ({
      alerts: s.alerts.map((a) =>
        a.id === alertId ? { ...a, acknowledged: true } : a
      ),
    })),

  setNodes: (nodes: SensorNode[]) => set({ nodes }),
}));
