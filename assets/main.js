/* SHOW NAVBAR */
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);

  // Validate that all variables exist
  if (toggle && nav && bodypd && headerpd) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("bx-x");
      bodypd.classList.toggle("body-pd");
      headerpd.classList.toggle("body-pd");
    });
  }
};

showNavbar("header-toggle", "nav-bar", "body-pd", "header");

// Vitamin Chart
const chartData = {
  labels: ["Vitamin A", "Vitamin C", "Vitamin D"],
  data: [21, 28, 30],
  backgroundColor: ["#05a559", "#eb7852", "#113f97"], // Colors
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Vitamin",
        data: chartData.data,
        backgroundColor: chartData.backgroundColor, // Use the colors defined
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l} <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();

// waterBalanceChart
const water = document.getElementById("waterBalanceChart").getContext("2d");
const waterBalanceChart = new Chart(water, {
  type: "line",
  data: {
    labels: ["20 May", "21 May", "22 May", "23 May", "24 May"],
    datasets: [
      {
        label: "Water Balance",
        data: [12, 19, 3, 5, 2], // replace with your actual data
        borderColor: "#113f97",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
