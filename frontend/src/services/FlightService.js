import axios from "axios";

const API_URL = "http://localhost:8080/flights";

class FlightService {

    getAllFlights() {
        return axios.get(API_URL);
    }

    saveFlight(flight) {
        return axios.post(API_URL, flight);
    }

    deleteFlight(code) {
        return axios.delete(`${API_URL}/${code}`);
    }

    searchByCarrier(carrier) {
        return axios.get(`${API_URL}/carrier/${carrier}`);
    }

    searchByRoute(source, destination) {
        return axios.get(
            `${API_URL}/route?source=${source}&destination=${destination}`
        );
    }

    searchByPrice(min, max) {
        return axios.get(
            `${API_URL}/price?min=${min}&max=${max}`
        );
    }
}

export default new FlightService();