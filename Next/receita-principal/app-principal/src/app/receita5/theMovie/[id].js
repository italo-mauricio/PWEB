import { useRouter } from "next/router"
import useSWR from "swr"
import { Button, Descriptions, Spin } from "antd"

export default function MovieDetail() {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(
    id ? `http://www.omdbapi.com/?apikey=ca98445&i=${id}` : null,
    fetcher
  )

  const handleReturnClick = () => {
    router.push("/receita4/page.js")
  }

  const ButtonReturn = ({ onClick }) => {
    return <Button onClick={onClick}>Voltar</Button>
  }

  if (error) return <div>Falha na requisição...</div>
  if (!data) return <Spin tip="Carregando..." />

  return (
    <div style={{ padding: 20 }}>
      <ButtonReturn onClick={handleReturnClick} />
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <img src={data.Poster} alt={data.Title} style={{ maxWidth: "100%" }} />
      </div>
      <h1 style={{ textAlign: "center" }}>{data.Title}</h1>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Ano de Lançamento">
          {data.Year}
        </Descriptions.Item>
        <Descriptions.Item label="Tipo">{data.Type}</Descriptions.Item>
        <Descriptions.Item label="Duração">{data.Runtime}</Descriptions.Item>
        <Descriptions.Item label="Gênero">{data.Genre}</Descriptions.Item>
        <Descriptions.Item label="Enredo">{data.Plot}</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}