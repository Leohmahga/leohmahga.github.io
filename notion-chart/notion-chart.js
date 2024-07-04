/**
 * ------------------------------------- \\
 * Create objects for config and custom options
 * ------------------------------------- //
 ***/

let nuttChartCustomOpts = {};
let nuttChartConfig = {};
let nuttDecodedUrl = decodeURI(window.location.href);

// Decode # symbol
nuttDecodedUrl = nuttDecodedUrl.replace(/%23/g, "#");
nuttDecodedUrl = nuttDecodedUrl.replace(/%3A/g, ":");
nuttDecodedUrl = nuttDecodedUrl.replace(/%2C/g, ",");
nuttDecodedUrl = nuttDecodedUrl.replace(/%2F/g, "/");

let nuttRawParams = nuttDecodedUrl.match(/(?:option|config).+?=.+?(?=&|$)/g);

nuttRawParams.forEach((fullParam) => {

    let paramVal = fullParam.match(/=(.+?)$/)[1];
    let paramProps = [];
    let paramPropRegEx = /(.+?)(?:_|=)/g;
    let match = paramPropRegEx.exec(fullParam);
    while (match) {
        paramProps.push(match);
        match = paramPropRegEx.exec(fullParam);
    }

    nuttChartCat = paramProps[0][1];

    if (nuttChartCat == 'config') {
        nuttChartConfig[paramProps[1][1]] = paramVal;
    } else {

        // Convert colors to array
        if (paramProps[1][1] == 'colors') {
            paramVal = paramVal.replace(/\s/g, "");
            paramVal = paramVal.split(",");
        }

        // Get the length of the customizations, then create the nested object
        let nuttCustomOptsCount = Object.keys(nuttChartCustomOpts).length;
        nuttChartCustomOpts[nuttCustomOptsCount] = {};

        // Add customizations to the custom-options object
        nuttChartCustomOpts[nuttCustomOptsCount].value = paramVal;
        nuttChartCustomOpts[nuttCustomOptsCount].prop = paramProps[1][1];
        if (paramProps[2]) {
            nuttChartCustomOpts[nuttCustomOptsCount].childProp = paramProps[2][1];
            if (paramProps[3]) {
                nuttChartCustomOpts[nuttCustomOptsCount].grandchildProp = paramProps[3][1];
            }
        }

    }

});

/**
 * ------------------------------------- \\
 * Load Visualization API and packages
 * ------------------------------------- //
 ***/

google.charts.load('current', {
    'packages': ['corechart', 'geochart', 'table'],
    'mapsApiKey': nuttChartConfig.mapsApi
});

// Set callback to run with Visualization is loaded
google.charts.setOnLoadCallback(nuttQueryChartData);

/**
 * ------------------------------------- \\
 * Query chart data
 * ------------------------------------- //
 ***/

function nuttQueryChartData() {

    let nuttChartQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + nuttChartConfig.documentId + '/edit?usp=sharing?headers=1&sheet=' + nuttChartConfig.sheetName + '&range=' + nuttChartConfig.dataRange);

    nuttChartQuery.send(nuttDrawChart);

}

/**
 * ------------------------------------- \\
 * Prepare Chart Options
 * ------------------------------------- //
 ***/

// Option variables
let nuttFontColor = '#9F9E9C';
let nuttFontSize = 12;
let nuttBaselineColor = '#F2F2F2';
let nuttBackgroundAndGridlineColor = '#FFFFFF';
let nuttTooltipColor = '#37352f';

// Dark Mode
if (nuttChartConfig.theme == 'darkMode') {
    nuttBackgroundAndGridlineColor = '#191919';
    nuttBaselineColor = '#555';
    window.addEventListener('load', () => { document.body.style.background = nuttBackgroundAndGridlineColor; });
} else if (nuttChartConfig.theme == 'transMode') {
    nuttFontColor = '#FFFFFF';
    nuttBackgroundAndGridlineColor = 'transparent';
    nuttBaselineColor = '#FFFFFF';
    window.addEventListener('load', () => { document.body.style.background = nuttBackgroundAndGridlineColor; });
}



// Chart default options
let nuttChartOptions = {
    'interpolateNulls': true,
    'backgroundColor': {
        'fill': nuttBackgroundAndGridlineColor
    },
    'curveType': 'function',
    'chartArea': {
        'top': 30,
        'right': 20,
        'bottom': 20,
        'left': 20
    },
    'hAxis': {
        'baselineColor': nuttBaselineColor,
        'gridlines': {
            'color': 'none'
        },
        'minorGridlines': {
            'count': 0
        },
        'textStyle': {
            'color': nuttFontColor,
            'fontSize': nuttFontSize,
        }
    },
    'height': window.innerHeight - 5,
    'legend': {
        'position': 'none',
        'textStyle': {
            'color': nuttFontColor,
            'fontSize': nuttFontSize,
        }
    },
    'pieHole': 0.5,
    'pieSliceBorderColor': nuttBackgroundAndGridlineColor,
    'pieSliceTextStyle': {
        'fontSize': nuttFontSize
    },
    'tooltip': {
        'textStyle': {
            'color': nuttTooltipColor,
            'fontSize': nuttFontSize
        }
    },
    'vAxis': {
        'baselineColor': nuttBaselineColor,
        'gridlines': {
            'color': 'none'
        },
        'minorGridlines': {
            'count': 0
        },
        'textStyle': {
            'color': nuttFontColor,
            'fontSize': nuttFontSize
        }
    }
}

// Add custom options
for (let i = 0; i < Object.keys(nuttChartCustomOpts).length; i++) {

    let newProp = nuttChartCustomOpts[i]['prop'];
    let newChildProp = nuttChartCustomOpts[i]['childProp'];
    let newGrandchildProp = nuttChartCustomOpts[i]['grandchildProp'];
    let newVal = nuttChartCustomOpts[i]['value'];

    if (newGrandchildProp != undefined) {
        nuttChartOptions[newProp][newChildProp][newGrandchildProp] = newVal;
    } else if (newChildProp != undefined) {
        nuttChartOptions[newProp][newChildProp] = newVal;
    } else {
        nuttChartOptions[newProp] = newVal;
    }
}

// Adjust chart areas
if (nuttChartConfig.chartType == 'column' || nuttChartConfig.chartType == 'line' || nuttChartConfig.chartType == 'bar') {
    nuttChartOptions.chartArea.right = 40;
    if (nuttChartOptions.legend.position == 'right') {
        nuttChartOptions.chartArea.right = 40;
    } else if (nuttChartOptions.legend.position == 'bottom') {
        nuttChartOptions.chartArea.bottom = 80;
    }
}
if (nuttChartConfig.chartType == 'bar') {
    nuttChartOptions.chartArea.left = 80;
} else if (nuttChartConfig.chartType == 'column' || nuttChartConfig.chartType == 'line') {
    nuttChartOptions.chartArea.left = 80;
} else if (nuttChartConfig.chartType == 'pie' || nuttChartConfig.chartType == 'donut') {
    nuttChartOptions.chartArea.right = 0;
    if (nuttChartOptions.legend.position == 'bottom') {
        nuttChartOptions.chartArea.bottom = 66;
    }
}

// If pie chart, remove pie hole
if (nuttChartConfig.chartType == 'pie') {
    nuttChartOptions.pieHole = undefined;
}

// If geo chart, add white as first color
if (nuttChartConfig.chartType == 'geo') {
    let keptColor = nuttChartOptions.colors[0];
    nuttChartOptions.colors = ['#FFFFFF', keptColor];
}

/**
 * ------------------------------------- \\
 * Create the chart
 * ------------------------------------- //
 ***/

function nuttDrawChart(response) {

    // Get data table from response
    let nuttChartData = response.getDataTable();

    // Chart-drawing variables
    let nuttChartContainer = document.getElementById('nuttChartContainer');

    // Instantiate the chart according to type
    let nuttChart;
    switch (nuttChartConfig.chartType) {
        case 'line':
            nuttChart = new google.visualization.LineChart(nuttChartContainer);
            break;
        case 'column':
            nuttChart = new google.visualization.ColumnChart(nuttChartContainer);
            break;
        case 'bar':
            nuttChart = new google.visualization.BarChart(nuttChartContainer);
            break;
        case 'pie':
            nuttChart = new google.visualization.PieChart(nuttChartContainer);
            break;
        case 'donut':
            nuttChart = new google.visualization.PieChart(nuttChartContainer);
            break;
        case 'table':
            nuttChart = new google.visualization.Table(nuttChartContainer);
            break;
        case 'geo':
            nuttChart = new google.visualization.GeoChart(nuttChartContainer);
            break;
    }

    // Draw the chart
    nuttChart.draw(nuttChartData, nuttChartOptions);


    if (typeof nuttChartConfig.title != "undefined") {
        const node = document.createElement('div');

        if (nuttChartConfig.theme == 'transMode') {
            node.className = 'googleChartTitleDark';
        } else {
            node.className = 'googleChartTitle'
        }
        node.innerHTML = nuttChartConfig.title;
        nuttChartContainer.childNodes[0].childNodes[0].append(node);
    }



    // Redraw the chart on resize
    window.addEventListener('resize', () => {
        nuttChartOptions.height = window.innerHeight;
        nuttChart.draw(nuttChartData, nuttChartOptions);
    });

}