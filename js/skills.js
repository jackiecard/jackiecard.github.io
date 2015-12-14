var pieData = [
				{
					value: 30,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "HTML & CSS"
				}
                ,
				{
					value: 30,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Javascript, JQuery & AngularJS"
				}
                ,
				{
					value: 20,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Java EE"
				}
                ,
				{
					value: 20,
					color: "#cd88e2",
					highlight: "#A8B3C5",
					label: "Adobe Photoshop"
				}
			];

			window.onload = function(){
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myPie = new Chart(ctx).Pie(pieData);
			};