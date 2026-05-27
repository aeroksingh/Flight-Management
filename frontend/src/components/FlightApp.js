import { useEffect, useState } from "react";
import FlightService from "../services/FlightService";
import "./FlightApp.css";

function FlightApp() {

    const [flights, setFlights] = useState([]);

    const [flight, setFlight] = useState({
        code: "",
        carrier: "",
        source: "",
        destination: "",
        cost: ""
    });

    const [filterType, setFilterType] = useState("");

    const [carrier, setCarrier] = useState("");

    const [route, setRoute] = useState({
        source: "",
        destination: ""
    });

    const [price, setPrice] = useState({
        min: "",
        max: ""
    });

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = async () => {
        try {
            const response = await FlightService.getAllFlights();
            setFlights(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFlight({
            ...flight,
            [e.target.name]: e.target.value
        });
    };

    const saveFlight = async (e) => {
        e.preventDefault();
        try {
            await FlightService.saveFlight(flight);
            setFlight({
                code: "",
                carrier: "",
                source: "",
                destination: "",
                cost: ""
            });
            fetchFlights();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteFlight = async (code) => {
        try {
            await FlightService.deleteFlight(code);
            fetchFlights();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async () => {
        try {
            let response;

            if (filterType === "carrier") {
                response = await FlightService.searchByCarrier(carrier);
            } else if (filterType === "route") {
                response = await FlightService.searchByRoute(
                    route.source,
                    route.destination
                );
            } else if (filterType === "price") {
                response = await FlightService.searchByPrice(
                    price.min,
                    price.max
                );
            }

            if (response) {
                setFlights(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const resetData = () => {
        setFilterType("");
        setCarrier("");
        setRoute({ source: "", destination: "" });
        setPrice({ min: "", max: "" });
        fetchFlights();
    };

    return (
        <div className="container">

            <h1>Flight Management System</h1>

            {/* ── Add Flight Form ── */}
            <form onSubmit={saveFlight}>

                <input
                    type="text"
                    name="code"
                    placeholder="Flight Code"
                    value={flight.code}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="carrier"
                    placeholder="Carrier"
                    value={flight.carrier}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="source"
                    placeholder="Source"
                    value={flight.source}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="destination"
                    placeholder="Destination"
                    value={flight.destination}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="cost"
                    placeholder="Cost"
                    value={flight.cost}
                    onChange={handleChange}
                />

                <button type="submit">Save Flight</button>

            </form>

            <hr />

            {/* ── Search Flights ── */}
            <h2>Search Flights</h2>

            <div className="search-controls">

                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option value="">Select Filter</option>
                    <option value="carrier">Carrier</option>
                    <option value="route">Route</option>
                    <option value="price">Price Range</option>
                </select>

                {filterType === "carrier" && (
                    <input
                        type="text"
                        placeholder="Enter Carrier"
                        value={carrier}
                        onChange={(e) => setCarrier(e.target.value)}
                    />
                )}

                {filterType === "route" && (
                    <>
                        <input
                            type="text"
                            placeholder="Source"
                            value={route.source}
                            onChange={(e) =>
                                setRoute({ ...route, source: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Destination"
                            value={route.destination}
                            onChange={(e) =>
                                setRoute({ ...route, destination: e.target.value })
                            }
                        />
                    </>
                )}

                {filterType === "price" && (
                    <>
                        <input
                            type="number"
                            placeholder="Min Price"
                            value={price.min}
                            onChange={(e) =>
                                setPrice({ ...price, min: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            value={price.max}
                            onChange={(e) =>
                                setPrice({ ...price, max: e.target.value })
                            }
                        />
                    </>
                )}

                <button onClick={handleSearch}>Search</button>
                <button onClick={resetData}>Reset</button>

            </div>

            <hr />

            {/* ── Flights Table ── */}
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Carrier</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((f) => (
                        <tr key={f.code}>
                            <td>{f.code}</td>
                            <td>{f.carrier}</td>
                            <td>{f.source}</td>
                            <td>{f.destination}</td>
                            <td>{f.cost}</td>
                            <td>
                                <button onClick={() => deleteFlight(f.code)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default FlightApp;