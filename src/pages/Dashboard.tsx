import { useEffect } from "react";
import { io } from "socket.io-client";
import { useServers } from "../hooks/useServer";
export const socket = io(import.meta.env.VITE_APP_URL);

type Server = {
  _id: string;
  name: string;
};

function Dashboard() {
  const { data, isLoading } = useServers() as {
    data: Server[];
    isLoading: boolean;
  };

  useEffect(() => {
    socket.on("metrics-update", (data) => {
      console.log("Live metrics:", data);
    });

    return () => {
      socket.off("metrics-update");
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Servers</h2>
      {data.map((server) => (
        <div key={server._id}>
          <h4>{server.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
