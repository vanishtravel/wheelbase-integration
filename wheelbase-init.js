document.addEventListener("DOMContentLoaded", function () {
  var wheelbase = Wheelbase({
    accountId: 1969389,
    urlParams: true,
    currency: "USD",
  });

  wheelbase.addWidget(wheelbase.widgets.DateRange, "availability-calendar-container", {
    rentalId: 221183,
    embedded: true,
    numberOfMonths: 2, // optional
  });

  wheelbase.start();
});
