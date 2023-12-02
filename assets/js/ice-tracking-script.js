document.addEventListener("DOMContentLoaded", function () {
  /**
   * Function to hide or show the postcode and postcode-label elements based on the selected courier company.
   */
  function hide() {
    const courierCompany = document.getElementById("courier-company");
    const postcode = document.getElementById("dpd-postcode");

    if (courierCompany.value === "dpd") {
      postcode.style.display = "block";
    } else {
      postcode.style.display = "none";
    }
  }

  // Show/hide the postcode and postcode-label elements when the courier company selection changes
  document.getElementById("courier-company").addEventListener("change", hide);

  // Call the hide() function when the page loads
  hide();
});

// Function to open the tracking page
function track() {
  // Variables
  const tracking_number_element = document.getElementById("TrackingNumber");
  const tracking_number = tracking_number_element.value;
  const service = document.getElementById("courier-company");
  const postcode = document.getElementById("dpd-postcode");
  var selectedValue = service.options[service.selectedIndex].value;
  var redirectionURL = "";

  // Logging
  console.log("Courier company: " + selectedValue);
  console.log("Postcode: " + postcode.value);
  console.log("Tracking number: " + tracking_number);
  console.log("Tracking element: " + tracking_number_element);
  console.log("Selected value: " + selectedValue);

  // Hiding and Showing of elements
  if (selectedValue === "dpd") {
    // Show the postcode element and its label
    postcode.style.display = "block";

  } else {
    // Hide the postcode element and its label
    postcode.style.display = "none";

  }

  // Redirection
  switch (selectedValue) {
    case "ups":
      redirectionURL = `https://www.ups.com/track?track=yes&trackNums=${tracking_number}`;
      break;
    case "dhl":
      redirectionURL = `https://www.dhl.com/pk-en/home/tracking.html?tracking-id=${tracking_number}`;
      break;
    case "fedex":
      redirectionURL = `https://www.fedex.com/fedextrack/?trknbr=${tracking_number}`;
      break;
    case "tcs":
      redirectionURL = `https://www.tcsexpress.com/track/${tracking_number}`;
      break;
    case "dpd":
      redirectionURL = `https://track.dpd.co.uk/parcels/${tracking_number}*${postcode.value}`;
      break;
    case "ffc":
      redirectionURL = `https://firstflightcourier.com.pk/shipment-track.php?FFCODE=${tracking_number}&find.x=59&find.y=11`;
      break;
    case "not-selected":
      alert("Please select a valid courier company.");
      return;
  }

  window.open(redirectionURL, "_blank");
}
