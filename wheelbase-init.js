document.addEventListener('DOMContentLoaded', function() {
  new Wheelbase({ accountId: 1969389 });

  wheelbase.addWidget(wheelbase.widgets.DateRange, "availability-calendar-container", {
    rentalId: 221183,
    embedded: true,
    numberOfMonths: 2,
  });
});
