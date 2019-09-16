document.getElementById("a").addEventListener('keyup', function(e){
        if(e.which === 13) {
          doDaMaths();
        };
    });

document.getElementById("b").addEventListener('keyup', function(e){      
        if(e.which === 13) {
          doDaMaths();
        };
    });

document.getElementById("c").addEventListener('keyup', function(e){      
        if(e.which === 13) {
          doDaMaths();
        };
    });

// This is the main function below: 
   function doDaMaths() {
    var a = document.getElementById('a').value.replace(/,/g ,"").replace(/ /g , "");
    var b = document.getElementById('b').value.replace(/,/g ,"").replace(/ /g , "");
    var c = document.getElementById('c').value.replace(/,/g ,"").replace(/ /g , "");

    if ((a != "") && (b != "") && (c != "")) {
    var depValueRaw = (a - b)/ c;    
    var depValue = parseFloat(depValueRaw.toFixed(2));
    document.getElementById("perYear").innerHTML = "$" + depValue.toLocaleString('en-US');
    var totalYears = c;
    var arrayYears = new Array(totalYears);
    for (var i = 0; i < totalYears; i++) {
    arrayYears[i] = (i + 1);
    };
    addZero = arrayYears.push(0);
    sortedArray = arrayYears.sort(function(a, b){return a - b});

    var yValue = new Array(a);
    for (var i = 0; i < sortedArray.length; i++) {
    yValue[i] = 11000 - (depValue * [i]);
    };

    var yValue2 = new Array(a);
    for (var i = 0; i < sortedArray.length; i++) {
    yValue2[i] =  0 + (depValue * [i]);
    };


var html = "<th style='width: 15%;  text-align: left'>Year</th> <th style='width: 42%;  text-align: center'>Asset Value </th> <th style='width: 42%;  text-align: center'>Accumulated Depreciation</th>";
for (var i = 0; i < sortedArray.length; i++) {
    html+="<tr>";
    html+="<td>"+"Year " + sortedArray[i]+"</td>";
    html+="<td>"+yValue[i].toLocaleString('en-US')+"</td>";
    html+="<td>"+yValue2[i].toLocaleString('en-US')+"</td>";
    html+="</tr>";
};
document.getElementById("tableBox").innerHTML = html;


    var trace1 = {
    x: arrayYears,
    y: yValue,
    name: 'Asset value',
    type: 'bar',
    marker: {
        color: 'rgb(0, 102, 204)',
    },
    hovertemplate: 'Asset Value: %{y}<extra></extra>',
    };

    var trace2 = {
    x: arrayYears,
    y: yValue2,
    name: 'Accumulated Depreciation',
    type: 'bar',
    marker: {
        color: 'rgb(128,128,128)',
    },
    hovertemplate: 'Accumulated Depreciation: %{y}<extra></extra>',
    };
    var data = [trace1, trace2];
    var layout = {      
        showlegend: true,
        hovermode: "closest",
        legend: {
            "orientation": "h",
            tickfont: {
            family: 'Arial, sans-serif',
            size: 18,
            },
        },
        xaxis: {
            fixedrange: true,
    // Fixing the range turns off the "zoom" function. 
    // As a side effect, it will also change the cursor to a hand pointer
            showtickprefix: 'all',
            tickprefix: 'Year  ',
            tickfont: {
            family: 'Arial, sans-serif',
            size: 14,
            // color: 'grey'
            },
        },
        yaxis: {
            fixedrange: true,
    // Fixing the range turns off the "zoom" function. 
    // As a side effect, it will also change the cursor to a hand pointer
            tickfont: {
            family: 'Arial, sans-serif',
            size: 14,
            },
            tickprefix: '$',
            tickformat: ',d',

        },
          hoverlabel: { 
            fontfamily: 'Arial, sans-serif',
            bgcolor: "#FFF",
            },
        
        barmode: 'group',

// ###Annotations - text annotations
    annotations: [{
    xref: 'paper',
    yref: 'paper',
    x: 0,
    xanchor: 'left',
    y: 1.1,
    yanchor: 'bottom',
    text: '<b>Straight line depreciation chart</b>',
    showarrow: false,
    font: {
        family: 'Arial, sans-serif',
        size: 16,
        color: 'grey',
      },
  },   
  ]
    };
    // ### END OF layout

    var config = {
    displayModeBar: false,
    // showSendToCloud:true,
    responsive: true,
    };

    Plotly.newPlot('myDivChart', data, layout, config);

    } else { 
        document.getElementById("error-msg").innerHTML = "** Enter all three values to begin. **";
    };
  }

