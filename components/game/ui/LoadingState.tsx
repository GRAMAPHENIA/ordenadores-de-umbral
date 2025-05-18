"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function LoadingState() {
  return (
    <Card className="w-full max-w-3xl terminal-container">
      <CardContent className="p-6">
        <p className="terminal-text">Cargando...</p>
      </CardContent>
    </Card>
  );
}
