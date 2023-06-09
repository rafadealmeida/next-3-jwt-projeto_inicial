export async function HttpClient(fetchUrl, fetchOptions) {
  const options = {
    ...fetchOptions,
    headers: {
      'Content-Type':'application/json',
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  }
  return fetch(fetchUrl, options).then(async (response) =>{
    console.log(response)
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      body: await response.json()
    }
  })
}
