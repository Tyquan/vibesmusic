$.get('/api/v1/videos', function(data){

	var count = 0;

	var div = $(`<div>`);
	div.addClass("row");
	
	data.forEach(function (d) {
		count += d.views;
	});

	var average = count / data.length;


	//console.log(mean(data));

	var countHtml = `<h3>Total Lifetime Views: ${count}</h3>`;
	var averageHtml = `<h3>Average Views per Video: ${average.toFixed(2)}</h3>`;
	var medianHtml = `<h3>Median: ${median(data)}</h3>`;
	var varianceHtml = `<h3>Variance: ${variance(data).toFixed(2)}</h3>`;
	var stdHtml = `<h3>Standard Deviation: ${standardDeviation(data).toFixed(2)}</h3>`;
	var magnitudeHtml = `<h3>Magnitude: ${magnitude(data).toFixed(2)}</h3>`;

	var finalHtml = `<div id="col-sm-12">
		${countHtml} 
		${averageHtml} 
		${medianHtml}
		${varianceHtml}
		${stdHtml}
	</div>`;

	div.append(finalHtml);

	$("#averageView").append(div);

});

// Stats functions based on pan-node

function mean(a) {
  /* find the average number in an array */
  //console.log(a.length);
  if (a.length == 0){
    return 0;
  } 
  else if(a.length == 1) {
    return a.views;
  } 
  else {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i].views;
    }
    console.log(`Sum ${sum}`);
    sum = sum / a.length;
    return sum;
  }
}

function median(array) {
  /* median average of a population or sample
  The middle number in an array */
  let sortedArray = array.sort();
  if (sortedArray.length % 2 == 0) {
      return array.length;
  } else {
      var middle = Math.round(sortedArray.length / 2);
      return middle;
  }
}

function variance (array) {
  // variance of a population
  let temp = [];
  let reason = 0;
  let result;
  let mew = mean(array);
  for (let i = 0; i < array.length; i++) {
    temp.push(Math.pow(array[i].views - mew, 2));
  }
  for (let j = 0; j < temp.length; j++) {
    reason += temp[j];
  }
  result = reason / array.length;
  return result;
}

function standardDeviation (array) {
    /* get the Standard Deviation odf an array
    the square root of a variance */
   return Math.sqrt(variance(array));
}