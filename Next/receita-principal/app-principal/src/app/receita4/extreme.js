
"use client";

import React, { useEffect, useState } from "react"

export function Home () {
  const [ipInfo, setIpInfo] = useState(null)

  useEffect(() => {
    getIpInfo()
  }, [])

  function getIpInfo() {
    var apiUrl = "https://extreme-ip-lookup.com/json/?key=demo2"

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        displayInfo(data)
      })
      .catch((error) => {
        console.error(`Erro de rede: ${error.message}`)
      })
  }

  function displayInfo(data) {
    setIpInfo(data)
  }

  return (
    <div>
      <h1>Informações de Localização</h1>
      <div id="info-container">
        {ipInfo ? (
          <>
            <p>
              <strong>País:</strong> {ipInfo.country}
            </p>
            <p>
              <strong>Cidade:</strong> {ipInfo.city}
            </p>
            <p>
              <strong>Região:</strong> {ipInfo.region}
            </p>
            <p>
              <strong>Continente:</strong> {ipInfo.continent}
            </p>
            <p>
              <strong>Latitude:</strong> {ipInfo.lat}
            </p>
            <p>
              <strong>Longitude:</strong> {ipInfo.lon}
            </p>
          </>
        ) : (
          <p>Carregando informações...</p>
        )}
      </div>
    </div>
  )
}
