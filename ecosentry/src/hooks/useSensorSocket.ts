import { useEffect, useRef } from "react";
import { io, type Socket } from "socket.io-client";
import { useSensorStore } from "./useSensorStore";
import type { SensorReading, Alert, AgentMessage, SensorNode } from "../lib/types";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ?? "http://localhost:3001";

/**
 * Connects to the backend WebSocket and dispatches incoming sensor data,
 * alerts, and agent messages to the store.
 */
export function useSensorSocket() {
  const socketRef = useRef<Socket | null>(null);
  const { addReading, addAlert, addAgentMessage, setNodes } = useSensorStore();

  useEffect(() => {
    const socket = io(SOCKET_URL, { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[EcoSentry] Connected to sensor gateway");
    });

    socket.on("nodes", (nodes: SensorNode[]) => {
      setNodes(nodes);
    });

    socket.on("reading", (data: SensorReading) => {
      addReading(data);
    });

    socket.on("alert", (alert: Alert) => {
      addAlert(alert);
    });

    socket.on("agent-message", (msg: AgentMessage) => {
      addAgentMessage(msg);
    });

    return () => {
      socket.disconnect();
    };
  }, [addReading, addAlert, addAgentMessage, setNodes]);

  return socketRef;
}
