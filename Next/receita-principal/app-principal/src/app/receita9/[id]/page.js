export async function generateStaticParams() {
    return [
              {id: "tt0095801"},
  
              {id: "tt0033152"},
  
              {id: "tt0015400"},
  
              {id: "tt0041149"},
  
              {id: "tt0044388"},
  
              {id: "tt0098746"},
  
              {id: "tt0046322"},
  
              {id: "tt0046497"},
  
              {id: "tt0044389"},
          ]
  }
  
  export default async function TheMovie({ params }){
  
  
      const data = await fetcher(`https://www.omdbapi.com/?apikey=2517b62d&i=${params.id}`)
  
  
  
      if (!data) return <div>Carregando...</div>
  
  
  
      if (data.Error) <div>Erro</div>
  
  
  
      return (
  
          <div>
  
              <div>{data.Title} --- {data.Year}</div>
  
              <div>{data.Plot}</div>
  
              <div>
  
                  <img src={data.Poster} width="300" height="400"/>
  
              </div>
  
              
  
              
  
          </div>
  
                   
  
      )
  
  }
  
  async function fetcher(url) {
  
      const res = await fetch(url);
  
      const json = await res.json();
  
      return json;
  
  }