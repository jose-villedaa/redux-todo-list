import type { TodoStatus } from "../types";

export const mappedStatusColor: Record<TodoStatus, string> = {
  pending: "bg-gray-100 text-gray-800",
  "in-progress": "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
  completed: "bg-green-100 text-green-800",
};

export const mappedStatusText: Record<TodoStatus, string> = {
  pending: "Pendiente",
  "in-progress": "En progreso",
  cancelled: "Cancelado",
  completed: "Completado",
};
