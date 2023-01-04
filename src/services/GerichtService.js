import axios from 'axios'

const GERICHT_API_BASE_URL = 'http://localhost:8080/api/v1/gerichte'

class GerichtService {
  getGerichte () {
    return axios.get(GERICHT_API_BASE_URL)
  }
}

export default new GerichtService()
