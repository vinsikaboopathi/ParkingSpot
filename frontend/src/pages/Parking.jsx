function Parking({ goToBooking }) {
  const parkingAreas = [
    {
      name: "City Center Parking",
      location: "Salem Main Road",
      available: 12,
      total: 30,
      price: 30,
    },
    {
      name: "Mall Parking",
      location: "Near Bus Stand",
      available: 8,
      total: 25,
      price: 40,
    },
    {
      name: "Railway Parking",
      location: "Railway Station Road",
      available: 18,
      total: 40,
      price: 25,
    },
  ];

  return (
    <div className="parking-page">

      {/* Header */}
      <div className="parking-header">

        <p className="tagline">
          PARKINGSPOT
        </p>

        <h1>
          Find Your Parking Spot
        </h1>

        <p>
          Search available parking spaces
          and reserve your slot easily.
        </p>

      </div>


      {/* Search */}
      <div className="parking-search">

        <input
          type="text"
          placeholder="Enter location or parking area"
        />

        <button>
          🔍 Search
        </button>

      </div>


      {/* Parking List */}
      <div className="parking-list">

        {parkingAreas.map((parking, index) => (

          <div
            className="parking-item"
            key={index}
          >

            {/* Top Section */}
            <div className="parking-item-top">

              <div>

                <h2>
                  {parking.name}
                </h2>

                <p>
                  📍 {parking.location}
                </p>

              </div>

              <div className="available">
                {parking.available} Available
              </div>

            </div>


            {/* Parking Details */}
            <div className="parking-details">

              <div>
                <span>
                  Total Slots
                </span>

                <strong>
                  {parking.total}
                </strong>
              </div>


              <div>
                <span>
                  Available
                </span>

                <strong>
                  {parking.available}
                </strong>
              </div>


              <div>
                <span>
                  Price / Hour
                </span>

                <strong>
                  ₹{parking.price}
                </strong>
              </div>

            </div>


            {/* Reserve Button */}
            <button
              className="reserve-btn"
              onClick={() => goToBooking(parking)}
            >
              Reserve Slot
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Parking;