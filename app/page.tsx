const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0),2000))
  return {data: [1,2,3,4]}
}

const HomePage =  async () => {
  const data =  await getData()

  return (
    <div>
      <h1>Home</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default HomePage