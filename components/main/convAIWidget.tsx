"use client";

import { useEffect, useRef } from "react";

interface ConvAIWidgetProps {
  agentId: string;
  bottom?: number;
  right?: number;
}

export default function ConvAIWidget({ agentId, bottom = 20, right = 20 }: ConvAIWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    // Crear la etiqueta del widget
    const widgetEl = document.createElement("elevenlabs-convai");
    widgetEl.setAttribute("agent-id", agentId);

    // Crear el script
    const scriptEl = document.createElement("script");
    scriptEl.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    scriptEl.async = true;
    scriptEl.type = "text/javascript";

    widgetRef.current.appendChild(widgetEl);
    widgetRef.current.appendChild(scriptEl);

    return () => {
      widgetRef.current?.removeChild(widgetEl);
      widgetRef.current?.removeChild(scriptEl);
    };
  }, [agentId]);

  return (
    <div
      ref={widgetRef}
      style={{ position: "fixed", bottom, right, zIndex: 9999 }}
    />
  );
}
