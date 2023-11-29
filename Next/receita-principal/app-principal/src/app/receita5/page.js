
"use client";
import useSWR from "swr"
import { useState } from "react"
import { Button, Card, Spin, Row, Col } from "antd"
import Link from "next/link"

const { Meta } = Card

async function theFetcher(url) {
  if (url === null || url === "") return { Search: "" }
  const res = await fetch(url)
  const json = await res.json()
  return json
}

export function TheMovies({ data, show }) {
  if (!show) return null
  if (data.error) return <div>falha na requisição</div>
  if (data.Search === "") return null

  return (
    <div>
      {data.Search.map((m) => (
        <Link href={`onemovie/${m.imdbID}`}>
          <Card key={m.imdbID} style={{ width: 350, marginBottom: 16 }}>
            <img src={m.Poster} />
            <Meta title={m.Title} description={m.Year} />
          </Card>
        </Link>
      ))}
    </div>
  )
}

export function TheLink({ url, handler }) {
  return (
    <div>
      <Button type="primary" onClick={handler}>
        {url === "" ? "Mostrar" : "Ocultar"}
      </Button>
    </div>
  )
}

export default function Movies3() {
    const [url, setUrl] = useState("");
    const { data, error } = useSWR(url, theFetcher, {
      shouldRetryOnError: Boolean(url), // Evita a chamada inicial se a URL estiver vazia
    });
    const [isButtonInCorner, setIsButtonInCorner] = useState(false);
  
    const isLoading = !data && !error;
    const hasData = data && data.Search && data.Search.length > 0;
  
    return (
      <div style={{ textAlign: "center" }}>
        <Row justify="center" style={{ marginTop: 16 }}>
          <Col span={24}>
            <TheLink
              url={url}
              handler={() => {
                setUrl(
                  url === ""
                    ? "http://www.omdbapi.com/?i=tt3896198&apikey=2517b62d&s=bagdad"
                    : ""
                );
                setIsButtonInCorner(!isButtonInCorner);
              }}
            />
          </Col>
        </Row>
        <Row justify={isButtonInCorner ? "end" : "center"} style={{ marginTop: 16 }}>
          <Col span={16}>
            {isLoading && !data && <Spin tip="Carregando..." style={{ marginTop: 24 }} />}
            {hasData && <TheMovies data={data} show={url !== ""} />}
            {error && (
              <div style={{ marginTop: 20, color: "red" }}>Erro na pesquisa</div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
  
  