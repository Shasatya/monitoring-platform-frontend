import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export const useServers = () => {
  return useQuery({
    queryKey: ["servers"],
    queryFn: async () => {
      const res = await api.get("/servers/getAllServers");
      return res.data;
    },
  });
};
