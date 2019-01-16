const baseUrl = 'https://api.punkapi.com/v2/beers'

const composeQueryString = (parameters) =>
  Object.keys(parameters).map(key => `${key}=${parameters[key]}`).join('&')

const checkResponseStatus = (response) => {
  if (response.ok) return response
  throw new Error()
}

export const fetchListOfBeers = (page = 1, perPage = 20) =>
  fetch(`${baseUrl}?page=${page}&per_page=${perPage}`)
    .then(checkResponseStatus)
    .then(response => response.json())
    .catch(error => Promise.reject(error))

export const fetchSingleBeer = (id) =>
  fetch(`${baseUrl}/${id}`)
    .then(checkResponseStatus)
    .then(response => response.json())
    .catch(error => Promise.reject(error))

export const fetchSimilarBeers = (abv, ibu, ebc) => {
  const parameters = {}

  if (abv) {
    parameters.abv_gt = Math.round(abv * 0.5)
    parameters.abv_lt = Math.round(abv * 1.5)
  }

  if (ibu) {
    parameters.ibu_gt = Math.round(ibu * 0.5)
    parameters.ibu_lt = Math.round(ibu * 1.5)
  }

  if (ebc) {
    parameters.ebc_gt = Math.round(ebc * 0.5)
    parameters.ebc_lt = Math.round(ebc * 1.5)
  }

  return fetch(`${baseUrl}?${composeQueryString(parameters)}`)
    .then(checkResponseStatus)
    .then(response => response.json())
    .catch(error => Promise.reject(error))
}
