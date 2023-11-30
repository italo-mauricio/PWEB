"use client";
import React, { useEffect, useState } from "react";

export function ExtremeAPI() {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    getIpInfo();
  }, []);

  function getIpInfo() {
    var apiUrl = "https://extreme-ip-lookup.com/json/?key=demo2";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        displayInfo(data);
      })
      .catch((error) => {
        console.error(`Erro de rede: ${error.message}`);
      });
  }

  function displayInfo(data) {
    setIpInfo(data);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Informações de Localização</h1>
      <table className="border-collapse border w-full">
        <tbody>
          {ipInfo ? (
            <>
              <TableRow label="País" value={ipInfo.country} />
              <TableRow label="Cidade" value={ipInfo.city} />
              <TableRow label="Região" value={ipInfo.region} />
              <TableRow label="Continente" value={ipInfo.continent} />
              <TableRow label="Latitude" value={ipInfo.lat} />
              <TableRow label="Longitude" value={ipInfo.lon} />
            </>
          ) : (
            <tr>
              <td colSpan="2" className="border p-2">
                Carregando informações...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ label, value }) {
  return (
    <tr>
      <td className="border p-2 font-bold">{label}</td>
      <td className="border p-2">{value}</td>
    </tr>
  );
}
