fetch("https://recruitment-mock-data.gjg-ads.io/data").then((res) =>
  res.json().then((data) => {
    let myData = data.data;
    console.log(myData);
    let dates = myData.map((element) => {
      return element.date;
    });
    let clicks = myData.map((element) => {
      return element.clicks;
    });
    let installs = myData.map((element) => {
      return element.installs;
    });
    let impressions = myData.map((element) => {
      return element.impressions;
    });
    console.log(dates);

    console.log("clicks:", clicks);
    console.log("installs:", installs);
    console.log("impressions:", impressions);

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Clicks",
            data: clicks,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
          {
            label: "Installs",
            data: installs,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
          {
            label: "Impressions",
            data: impressions,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
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

    if (data.data.length > 0) {
      let temp = "";

      data.data.forEach((element) => {
        temp += "<tr>";
        temp += "<td>" + element.date + "</td>";

        temp += "<td>" + element.clicks + "</td>";
        temp += "<td>" + element.impressions + "</td>";
        temp += "<td>" + element.installs + "</td>";
        temp += "<td>" + element.dau + "</td>";
        temp += "<td>" + element.app + "</td>";
        temp += "<td>" + element.platform + "</td></tr>";
      });

      document.getElementById("data").innerHTML = temp;
    }
  })
);

function changeGraph() {
  let myTable = document.getElementById("table");
  let myChart = document.getElementById("chart");

  console.log("clicked");
  if (myTable.style.display === "none") {
    myTable.style.display = "block";
    myTable.style.width = "auto";

    myChart.style.display = "none";
  } else {
    myTable.style.display = "none";

    myChart.style.display = "block";
  }
}
