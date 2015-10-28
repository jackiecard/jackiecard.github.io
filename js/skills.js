var pieData = [
				{
					value: 150,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "HTML & CSS"
				},
				{
					value: 120,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Java EE"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "AngularJS"
				},
				{
					value: 80,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "JQuery"
				}
                ,
				{
					value: 50,
					color: "#5eaed1",
					highlight: "#A8B3C5",
					label: "Google Search"
				}
			];

			window.onload = function(){
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myPie = new Chart(ctx).Pie(pieData);
			};