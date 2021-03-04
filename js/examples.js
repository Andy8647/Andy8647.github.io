// data come from wiki: https://en.wikipedia.org/wiki/List_of_countries_by_largest_historical_GDP#cite_note-6
const GDPs = [
    {
        "legend": "1960",
        "data": [{
            "label": "China",
            "value": 61.378
        }, {
            "label": "USA",
            "value": 520.531
        }, {
            "label": "Japan",
            "value": 44.307
        }, {
            "label": "Canada",
            "value": 41.093
        }, {
            "label": "UK",
            "value": 72.328
        }]
    },
    {
        "legend": "1965",
        "data": [{
            "label": "China",
            "value": 69.709
        }, {
            "label": "USA",
            "value": 712.082
        }, {
            "label": "Japan",
            "value": 90.950
        }, {
            "label": "Canada",
            "value": 53.910
        }, {
            "label": "UK",
            "value": 100.596
        }]
    },
    {
        "legend": "1970",
        "data": [{
            "label": "China",
            "value": 91.273
        }, {
            "label": "USA",
            "value": 1075.900
        }, {
            "label": "Japan",
            "value": 209.071
        }, {
            "label": "Canada",
            "value": 87.734
        }, {
            "label": "UK",
            "value": 124.800
        }]
    },
    {
        "legend": "1975",
        "data": [{
            "label": "China",
            "value": 160.751
        }, {
            "label": "USA",
            "value": 1688.900
        }, {
            "label": "Japan",
            "value": 512.861
        }, {
            "label": "Canada",
            "value": 173.487
        }, {
            "label": "UK",
            "value": 236.414
        }]
    },
    {
        "legend": "1980",
        "data": [{
            "label": "China",
            "value": 226.003
        }, {
            "label": "USA",
            "value": 2862.492
        }, {
            "label": "Japan",
            "value": 1099.695
        }, {
            "label": "Canada",
            "value": 268.893
        }, {
            "label": "UK",
            "value": 536.369
        }]
    },
    {
        "legend": "1985",
        "data": [{
            "label": "China",
            "value": 312.616
        }, {
            "label": "USA",
            "value": 4346.717
        }, {
            "label": "Japan",
            "value": 1401.006
        }, {
            "label": "Canada",
            "value": 364.771
        }, {
            "label": "UK",
            "value": 534.244
        }]
    },
    {
        "legend": "1990",
        "data": [{
            "label": "China",
            "value": 318
        }, {
            "label": "USA",
            "value": 5979.592
        }, {
            "label": "Japan",
            "value": 3140.669
        }, {
            "label": "Canada",
            "value": 533.920
        }, {
            "label": "UK",
            "value": 1093.997
        }]
    },
    {
        "legend": "1995",
        "data": [{
            "label": "China",
            "value": 736.870
        }, {
            "label": "USA",
            "value": 7664.050
        }, {
            "label": "Japan",
            "value": 5450.805
        }, {
            "label": "Canada",
            "value": 604.034
        }, {
            "label": "UK",
            "value": 1320.618
        }]
    },
    {
        "legend": "2000",
        "data": [{
            "label": "China",
            "value": 1214.912
        }, {
            "label": "USA",
            "value": 10284.750
        }, {
            "label": "Japan",
            "value": 4887.301
        }, {
            "label": "Canada",
            "value": 742.319
        }, {
            "label": "UK",
            "value": 1442.316
        }]
    },
    {
        "legend": "2005",
        "data": [{
            "label": "China",
            "value": 2308.786
        }, {
            "label": "USA",
            "value": 13093.700
        }, {
            "label": "Japan",
            "value": 4755.980
        }, {
            "label": "Canada",
            "value": 1169.467
        }, {
            "label": "UK",
            "value": 2511.165
        }]
    },
    {
        "legend": "2010",
        "data": [{
            "label": "China",
            "value": 5812.464
        }, {
            "label": "USA",
            "value": 14964.400
        }, {
            "label": "Japan",
            "value": 5793.455
        }, {
            "label": "Canada",
            "value": 1360.467
        }, {
            "label": "UK",
            "value": 2246.079
        }]
    },
    {
        "legend": "2015",
        "data": [{
            "label": "China",
            "value": 11226.186
        }, {
            "label": "USA",
            "value": 18036.650
        }, {
            "label": "Japan",
            "value": 4382.420
        }, {
            "label": "Canada",
            "value": 1552.808
        }, {
            "label": "UK",
            "value": 2863.304
        }]
    },
]


const COVID = [
    {
        "legend": "Jan",
        "data": [{
            "label": "China",
            "value": 6.81
        }, {
            "label": "Canada",
            "value": 0.11
        }, {
            "label": "UK",
            "value": 0.03
        }, {
            "label": "USA",
            "value": 0.02
        }, {
            "label": "India",
            "value": 0.01
        }]
    },
    {
        "legend": "Feb",
        "data": [{
            "label": "China",
            "value": 55.13
        }, {
            "label": "Canada",
            "value": 0.53
        }, {
            "label": "UK",
            "value": 0.9
        }, {
            "label": "USA",
            "value": 0.08
        }, {
            "label": "India",
            "value": 0.01
        }]
    },
    {
        "legend": "Mar",
        "data": [{
            "label": "China",
            "value": 57.17
        }, {
            "label": "Canada",
            "value": 225.93
        }, {
            "label": "UK",
            "value": 571.77
        }, {
            "label": "USA",
            "value": 580.59
        }, {
            "label": "India",
            "value": 1.01
        }]
    },
    {
        "legend": "Apr",
        "data": [{
            "label": "China",
            "value": 58.33
        }, {
            "label": "Canada",
            "value": 1442.87
        }, {
            "label": "UK",
            "value": 2633.40
        }, {
            "label": "USA",
            "value": 3251.41
        }, {
            "label": "India",
            "value": 25.26
        }]
    },
    {
        "legend": "May",
        "data": [{
            "label": "China",
            "value": 58.46
        }, {
            "label": "Canada",
            "value": 2450.28
        }, {
            "label": "UK",
            "value": 3793.70
        }, {
            "label": "USA",
            "value": 5421.30
        }, {
            "label": "India",
            "value": 138.12
        }]
    },
    {
        "legend": "Jun",
        "data": [{
            "label": "China",
            "value": 58.91
        }, {
            "label": "Canada",
            "value": 2811.10
        }, {
            "label": "UK",
            "value": 4201.40
        }, {
            "label": "USA",
            "value": 7943.86
        }, {
            "label": "India",
            "value": 424.26
        }]
    },
    {
        "legend": "Jul",
        "data": [{
            "label": "China",
            "value": 60.90
        }, {
            "label": "Canada",
            "value": 3133.92
        }, {
            "label": "UK",
            "value": 4489.78
        }, {
            "label": "USA",
            "value": 13756.20
        }, {
            "label": "India",
            "value": 1228.97
        }]
    },
    {
        "legend": "Aug",
        "data": [{
            "label": "China",
            "value": 62.47
        }, {
            "label": "Canada",
            "value": 3468.75
        }, {
            "label": "UK",
            "value": 4980.16
        }, {
            "label": "USA",
            "value": 18178.40
        }, {
            "label": "India",
            "value": 2674.75
        }]
    },
    {
        "legend": "Sep",
        "data": [{
            "label": "China",
            "value": 62.91
        }, {
            "label": "Canada",
            "value": 4268.62
        }, {
            "label": "UK",
            "value": 6714.87
        }, {
            "label": "USA",
            "value": 21812.49
        }, {
            "label": "India",
            "value": 4574.32
        }]
    },
    {
        "legend": "Oct",
        "data": [{
            "label": "China",
            "value": 63.48
        }, {
            "label": "Canada",
            "value": 6287.74
        }, {
            "label": "UK",
            "value": 14948.49
        }, {
            "label": "USA",
            "value": 27604.59
        }, {
            "label": "India",
            "value": 5930.48
        }]
    },
    {
        "legend": "Nov",
        "data": [{
            "label": "China",
            "value": 63.48
        }, {
            "label": "Canada",
            "value": 10109.57
        }, {
            "label": "UK",
            "value": 24065.83
        }, {
            "label": "USA",
            "value": 41085.76
        }, {
            "label": "India",
            "value": 6857.09
        }]
    },
    {
        "legend": "Dec",
        "data": [{
            "label": "China",
            "value": 65.88
        }, {
            "label": "Canada",
            "value": 13228.76
        }, {
            "label": "UK",
            "value": 29208.20
        }, {
            "label": "USA",
            "value": 52746.70
        }, {
            "label": "India",
            "value": 7249.69
        }]
    },
]



const cf1 = new ChartFactory(1)
const cf2 = new ChartFactory(0)
const cf3 = new ChartFactory(1)

function example() {
    cf1.loadData(GDPs)
    cf1.setColors([])
    cf1.createContainer("ddv1", 600, 400, "Ex1")
    cf1.drawChartSeq("ddv1")
    cf1.Play("ddv1", 2000)

    cf2.loadData(GDPs)
    cf2.setColors([])
    cf2.createContainer("ddv2", 800, 600, "Ex2")
    cf2.drawChartSeq("ddv2")
    cf2.defineButtons("ddv2")

    cf3.loadData(COVID)
    cf3.setColors(["f44336", "009688", "ff5722", "2196f3", "795548"])
    cf3.createContainer("ddv3", 1000, 800, "Ex3")
    cf3.drawChartSeq("ddv3")
    cf3.Play("ddv3", 2000)
}


example();