document.addEventListener("DOMContentLoaded", function() {
  const wheelbase = new Wheelbase({
    domain: "https://www.vanishtravel.com",
    apiKey: " dev_key", // Replace "your-api-key" with your actual API key
  });

  wheelbase.addWidget(wheelbase.widgets.DateRange, "availability-calendar-container", {
    rentalId: 221183,
    embedded: true,
    numberOfMonths: 2,
  });
});
