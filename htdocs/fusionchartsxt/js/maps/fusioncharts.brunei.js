(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=428)})({428:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(429);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},429:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Brunei.20.10-30-2012 06:07:30
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Brunei",revision:20,standaloneInit:true,baseWidth:520,baseHeight:440,baseScaleFactor:10,entities:{"BN.BE":{outlines:[[M,1925,1546,Q,1915,1536,1904,1532,1901,1531,1897,1530,1894,1531,1891,1532,1890,1533,1889,1534,1883,1539,1872,1539,1870,1549,1866,1549,1863,1549,1860,1547,L,1860,1557,1847,1557,Q,1850,1562,1850,1564,1844,1562,1840,1567,1835,1571,1837,1577,L,1815,1577,Q,1818,1587,1807,1589,1805,1589,1785,1589,1785,1592,1790,1597,1780,1597,1772,1603,1764,1609,1752,1607,L,1752,1618,Q,1744,1619,1732,1619,1732,1627,1729,1628,1725,1629,1725,1637,1714,1637,1709,1642,1703,1647,1692,1647,L,1692,1652,1695,1654,Q,1690,1657,1677,1667,1664,1675,1652,1672,1651,1680,1639,1685,1626,1691,1615,1687,1596,1718,1550,1714,1554,1729,1542,1729,1536,1730,1525,1727,1525,1735,1506,1734,1488,1733,1492,1747,L,1480,1747,1480,1752,1482,1754,Q,1470,1750,1466,1755,1463,1758,1457,1767,L,1462,1769,Q,1451,1769,1448,1773,1445,1776,1439,1777,1437,1778,1435,1778,1428,1778,1420,1777,1418,1785,1389,1783,1362,1780,1360,1797,1345,1797,1322,1794,1317,1809,1317,1817,1306,1817,1303,1821,1299,1824,1290,1824,L,1290,1834,Q,1286,1834,1265,1831,1246,1831,1245,1847,L,1195,1847,Q,1196,1855,1184,1855,L,1165,1854,1165,1862,1127,1862,1127,1874,1087,1874,Q,1074,1875,1072,1881,1071,1888,1065,1889,L,992,1889,Q,976,1890,945,1903,916,1916,897,1914,L,897,1921,Q,899,1922,900,1922,L,897,1922,897,1921,Q,878,1921,844,1928,842,1928,840,1929,836,1931,835,1934,L,785,1934,785,1949,Q,721,1947,697,1957,L,697,1992,Q,710,1992,733,2008,755,2024,755,2033,752,2054,752,2062,L,750,2062,Q,731,2042,732,2032,L,722,2032,722,2019,707,2019,707,2007,Q,697,2009,690,2e3,689,1997,687,1995,685,1990,685,1984,677,1987,673,1979,668,1969,657,1969,651,1969,642,1974,637,1974,633,1968,628,1962,617,1962,606,1962,600,1967,L,550,1967,550,1952,497,1952,497,1964,465,1964,Q,465,1977,464,1978,463,1979,455,1979,454,1979,436,1976,417,1972,377,1972,L,377,1959,287,1959,Q,287,1968,289,1971,289,1971,290,1972,L,297,1972,297,1992,310,1992,310,2009,Q,335,2007,351,2007,379,2008,382,2022,L,402,2022,Q,407,2012,430,2012,442,2012,462,2022,482,2032,501,2032,509,2032,526,2023,544,2014,547,2014,594,2014,638,2048,672,2074,682,2097,683,2099,707,2114,716,2140,720,2144,736,2150,745,2159,L,767,2182,Q,768,2182,769,2182,787,2166,790,2164,L,785,2164,785,2157,800,2157,Q,807,2171,807,2174,813,2174,817,2169,L,822,2169,Q,820,2179,826,2185,827,2186,827,2187,L,842,2187,842,2199,Q,862,2202,868,2211,879,2227,890,2234,910,2242,919,2246,935,2253,935,2269,952,2269,968,2294,984,2319,990,2319,988,2327,991,2337,L,992,2344,998,2344,Q,999,2348,999,2357,1e3,2364,1004,2365,1010,2366,1010,2377,1010,2386,1018,2384,1018,2390,1024,2406,1029,2406,1031,2414,1032,2419,1033,2428,L,1038,2429,Q,1039,2432,1040,2444,1042,2455,1049,2452,1050,2455,1049,2464,1050,2473,1056,2477,1059,2478,1064,2492,L,1064,2510,1070,2510,1070,2524,Q,1071,2529,1079,2529,1080,2539,1081,2541,1081,2543,1086,2544,1088,2545,1086,2550,1092,2552,1094,2552,1092,2559,1101,2564,1102,2576,1107,2574,1107,2577,1108,2582,L,1118,2582,1118,2588,Q,1118,2590,1122,2603,1132,2606,1132,2612,1136,2632,1136,2638,L,1143,2639,1144,2654,1145,2654,1145,2692,Q,1144,2693,1141,2695,1140,2714,1145,2723,L,1145,2744,1130,2744,1130,2762,1137,2762,Q,1137,2769,1142,2794,1169,2785,1191,2817,1210,2845,1210,2875,1210,2876,1200,2903,1190,2933,1190,2947,L,1180,2947,Q,1184,2956,1177,2968,1167,2982,1167,2985,1167,2992,1170,3027,L,1170,3134,1180,3134,Q,1180,3135,1180,3135,1180,3140,1177,3152,1185,3157,1212,3157,1241,3157,1252,3157,L,1272,3157,Q,1272,3162,1275,3174,L,1275,3177,Q,1288,3170,1295,3169,L,1295,3162,Q,1321,3166,1340,3157,L,1337,3154,1337,3144,Q,1348,3144,1364,3136,1381,3127,1390,3127,1410,3127,1417,3132,1427,3139,1452,3142,L,1452,3154,1487,3154,Q,1485,3161,1491,3167,1497,3174,1497,3185,1512,3186,1523,3186,1548,3186,1545,3174,L,1555,3174,Q,1555,3174,1555,3173,1560,3162,1562,3155,1566,3144,1565,3134,1563,3124,1569,3116,1575,3107,1585,3112,1582,3101,1589,3097,1599,3095,1602,3092,L,1637,3092,Q,1637,3094,1640,3109,L,1655,3109,Q,1655,3132,1657,3184,1665,3187,1670,3187,L,1670,3272,1672,3274,1680,3274,Q,1678,3288,1683,3301,1685,3304,1686,3307,L,1690,3307,1690,3310,1690,3319,1693,3319,Q,1696,3321,1695,3324,L,1699,3325,Q,1699,3328,1701,3338,1701,3343,1705,3344,1709,3346,1710,3349,1711,3355,1715,3361,1718,3365,1717,3372,L,1720,3373,Q,1720,3376,1722,3386,L,1729,3386,Q,1731,3392,1732,3406,1733,3414,1737,3415,L,1737,3420,Q,1735,3421,1735,3422,1735,3424,1736,3425,1736,3425,1736,3426,1737,3428,1738,3429,L,1745,3432,1745,3447,Q,1757,3447,1774,3476,1790,3503,1790,3517,L,1800,3517,Q,1822,3573,1882,3572,L,1882,3582,Q,1897,3591,1901,3593,1907,3596,1922,3597,1931,3597,1935,3606,1940,3615,1947,3614,L,1947,3622,Q,1965,3624,1972,3624,1968,3641,1978,3654,1994,3674,1995,3677,1996,3680,1995,3707,1994,3726,2007,3724,2007,3737,2005,3739,L,2005,3759,2007,3759,2007,3774,2017,3774,2017,3792,Q,2030,3794,2037,3795,2048,3797,2045,3809,L,2070,3809,Q,2070,3818,2075,3824,2081,3830,2087,3827,2086,3872,2107,3867,L,2107,3879,Q,2106,3875,2103,3887,2103,3887,2103,3887,L,2109,3890,Q,2112,3892,2114,3896,2117,3901,2120,3907,2175,3907,2197,3909,2217,3911,2248,3943,2277,3974,2277,3989,2277,4006,2259,4014,2259,4015,2258,4015,2252,4020,2242,4024,2228,4031,2227,4039,2226,4050,2217,4059,2224,4065,2226,4069,2227,4069,2236,4069,2266,4057,2279,4057,2293,4057,2302,4064,2306,4068,2316,4080,L,2347,4079,Q,2362,4080,2367,4064,2381,4053,2382,4032,2393,4037,2396,4029,2400,4018,2417,4017,2449,4014,2465,4014,2479,4014,2501,3999,2530,3980,2537,3977,2549,3972,2557,3963,2564,3953,2567,3949,2596,3930,2597,3922,2600,3910,2624,3895,2652,3876,2657,3869,2679,3845,2687,3833,2702,3814,2702,3797,2711,3772,2717,3759,2721,3750,2729,3744,2732,3744,2732,3737,2734,3737,2742,3738,2750,3738,2752,3729,2772,3739,2785,3720,2785,3720,2800,3687,2807,3670,2834,3659,2855,3651,2852,3637,2875,3626,2889,3604,2891,3601,2912,3557,L,2927,3557,Q,2940,3534,2940,3520,2940,3508,2917,3508,2894,3509,2890,3504,2887,3500,2888,3500,L,2888,3494,Q,2893,3460,2900,3443,2909,3423,2930,3407,2948,3392,2982,3327,L,2997,3327,Q,3e3,3303,3e3,3294,3021,3290,3043,3251,3063,3215,3070,3203,3072,3201,3072,3200,3073,3198,3073,3196,3074,3182,3075,3174,3075,3166,3083,3164,3093,3163,3095,3157,3105,3117,3120,3109,L,3110,3109,3110,3089,Q,3105,3089,3102,3087,L,3090,3087,Q,3083,3100,3056,3122,3031,3141,3022,3167,3013,3166,3001,3170,2988,3174,2980,3174,L,2980,3177,Q,2982,3179,2987,3182,2985,3184,2980,3184,L,2977,3190,Q,2977,3197,2982,3199,L,2980,3199,Q,2975,3197,2972,3197,L,2972,3182,2960,3182,2960,3167,2952,3167,Q,2952,3166,2952,3165,2965,3137,2965,3129,2972,3132,2979,3127,2986,3122,2982,3117,2981,3116,2981,3115,2980,3113,2980,3110,2980,3097,2997,3094,2995,3087,2995,3082,3017,3059,3053,3009,2906,2969,2875,2950,2823,2917,2803,2839,L,2805,2829,2805,2829,2805,2829,Q,2795,2814,2792,2757,2791,2746,2781,2722,2773,2701,2775,2682,2743,2669,2724,2620,2706,2572,2680,2564,2680,2550,2667,2537,2652,2517,2629,2499,2594,2472,2585,2462,2563,2438,2545,2417,2532,2387,2526,2372,2525,2368,2524,2365,2514,2353,2501,2337,2478,2310,2470,2294,L,2450,2294,2450,2272,Q,2444,2272,2422,2263,2401,2255,2390,2257,L,2390,2244,2385,2244,2385,2244,Q,2385,2241,2385,2239,2376,2241,2375,2223,2373,2205,2352,2212,2352,2207,2350,2197,2303,2204,2310,2172,2305,2172,2297,2169,L,2297,2107,Q,2299,2093,2306,2080,2312,2069,2312,2059,2312,2049,2309,2046,2298,2033,2295,2032,2295,2026,2300,1993,2300,1968,2262,1927,2225,1887,2204,1887,2187,1901,2187,1903,2190,1907,2190,1909,L,2142,1909,Q,2121,1890,2090,1839,2089,1838,2077,1818,2069,1803,2062,1799,2033,1782,2030,1767,2016,1770,2005,1759,1994,1749,1997,1732,1985,1737,1985,1716,1985,1709,1990,1705,1995,1700,1995,1692,1995,1682,1985,1649,L,1972,1649,Q,1977,1618,1947,1577,Q,1925,1547,1925,1546,Z]],label:"Belait",shortLabel:"BE",labelPosition:[191.3,261.5],labelAlignment:[CEN,MID]},"BN.BM":{outlines:[[M,3790,849,L,3757,849,Q,3752,860,3744,864,L,3730,872,3735,874,Q,3725,874,3722,877,3723,884,3705,897,3739,916,3740,916,3758,919,3760,877,3781,877,3790,872,Z],[M,3760,706,Q,3760,694,3752,689,3746,685,3745,680,L,3745,694,Q,3728,715,3727,717,3729,717,3733,715,3737,715,3740,724,L,3755,724,Q,3760,715,3760,706,Z],[M,3931,447,Q,3914,449,3910,449,L,3910,449,Q,3899,449,3890,459,3882,468,3882,471,3882,479,3900,491,3917,504,3917,519,L,3942,519,3942,534,4082,534,Q,4080,524,4080,502,4065,504,4053,491,4040,477,4035,477,L,3960,477,3960,462,3942,462,Q,3945,448,3931,447,Z],[M,3655,412,Q,3640,414,3611,425,3585,434,3570,434,3562,434,3532,452,3521,459,3505,461,3490,462,3485,467,3473,476,3453,484,3433,491,3420,502,3391,526,3340,532,L,3340,542,3339,542,Q,3320,535,3298,553,3275,572,3265,569,L,3265,579,3222,579,Q,3220,577,3220,564,L,3205,564,3205,577,3187,577,3187,584,Q,3192,589,3195,589,3187,595,3183,600,3183,601,3182,602,3177,602,3171,605,3164,609,3154,613,3147,618,3141,624,3136,629,3116,629,3085,622,3085,622,3072,624,3067,624,3067,632,3060,643,3052,653,3052,664,3027,661,3004,678,2984,696,2971,703,2970,703,2969,704,2965,718,2938,735,2902,757,2897,764,2896,766,2895,767,2914,801,2931,801,2942,802,2942,817,2942,853,2934,858,2925,863,2925,899,2915,910,2917,927,2907,929,2902,929,2897,965,2897,1008,2892,1046,2902,1056,2879,1090,2877,1119,2875,1130,2861,1150,2846,1171,2845,1177,2822,1260,2822,1332,L,2807,1332,Q,2805,1378,2805,1384,2805,1407,2815,1434,2825,1457,2827,1466,2832,1464,2841,1464,2841,1464,2879,1448,2919,1432,2935,1432,2935,1427,2937,1417,L,2965,1417,2965,1407,Q,2990,1408,3005,1391,3018,1375,3017,1357,L,3032,1357,Q,3027,1352,3025,1352,3039,1331,3060,1292,3090,1253,3107,1247,3121,1226,3159,1210,3207,1190,3215,1184,3258,1187,3257,1164,L,3300,1164,Q,3309,1177,3310,1179,3319,1176,3329,1181,3340,1187,3340,1202,L,3362,1202,Q,3363,1174,3396,1184,3430,1184,3430,1197,L,3485,1197,Q,3486,1188,3493,1187,3506,1185,3515,1177,3523,1170,3523,1159,3524,1153,3525,1137,3551,1145,3552,1125,3553,1118,3553,1104,3554,1096,3554,1086,3553,1075,3552,1059,3567,1059,3580,1047,L,3580,1022,3567,1022,3567,977,Q,3582,957,3628,922,3663,894,3675,859,3685,860,3730,854,3719,822,3770,814,L,3770,802,Q,3785,802,3792,796,3800,789,3812,789,L,3812,784,Q,3805,779,3794,780,3781,782,3775,782,3772,769,3747,769,L,3747,777,Q,3750,779,3757,779,3761,792,3757,796,3749,801,3742,807,3734,807,3722,814,3718,828,3715,832,L,3695,832,Q,3694,823,3694,813,3693,807,3681,807,3678,807,3659,830,3640,853,3640,857,3637,874,3621,879,3598,886,3590,894,3558,927,3545,929,3535,931,3533,937,3532,944,3522,947,3498,955,3502,969,L,3487,969,Q,3488,975,3471,995,3454,1014,3446,1014,3436,1014,3433,1009,3428,1004,3412,1002,L,3412,974,Q,3416,973,3422,971,3427,969,3427,963,3427,960,3422,947,L,3390,947,Q,3388,959,3360,959,3360,967,3356,973,3352,979,3352,987,3342,986,3341,988,3340,988,3340,997,3340,1004,3342,1007,L,3320,1007,Q,3322,1012,3322,1014,3317,1017,3307,1016,3308,1011,3311,1004,3311,1003,3312,1002,3317,991,3327,979,3331,975,3334,961,3338,950,3355,949,3355,944,3345,937,3349,930,3375,918,3390,912,3402,908,3405,907,3408,907,L,3432,907,Q,3430,920,3434,936,3441,953,3442,962,L,3482,962,Q,3483,959,3483,946,3485,937,3497,942,3496,933,3507,928,3513,925,3525,922,3529,920,3555,897,3561,897,3580,873,3596,853,3620,864,3635,838,3666,786,3666,785,3667,784,3667,782,3666,780,3666,777,3664,772,3664,763,3677,762,3672,757,3672,751,3672,745,3690,731,3707,717,3707,702,3716,706,3723,693,3731,680,3740,682,L,3735,679,3745,679,Q,3745,679,3745,678,3745,675,3755,660,3768,643,3780,642,L,3780,612,Q,3770,607,3761,593,3753,581,3745,579,L,3742,577,3767,577,3767,557,Q,3765,556,3742,532,L,3742,512,Q,3757,512,3765,507,3778,503,3797,502,3799,515,3810,524,L,3845,524,Q,3841,515,3848,513,3852,512,3860,512,3861,500,3859,470,3859,445,3870,439,L,3870,434,Q,3866,433,3865,429,3870,429,3875,424,3879,419,3886,419,3902,419,3906,425,3908,429,3910,444,L,3910,422,Q,3917,413,3955,417,L,3955,402,3975,402,Q,3983,392,4035,392,L,4035,389,Q,4031,388,4030,384,4042,384,4042,371,4042,361,4032,359,4031,359,4007,359,3973,359,3970,369,L,3957,369,3957,374,3962,377,3949,377,Q,3946,377,3945,377,3946,386,3934,386,3920,384,3917,384,L,3917,397,3920,399,3865,399,Q,3861,389,3832,389,L,3840,377,Q,3816,376,3792,362,L,3775,362,Q,3778,386,3746,389,3709,387,3700,387,3702,392,3702,399,L,3655,399,Z]],label:"Brunei and Muara",shortLabel:"BM",labelPosition:[325.3,78.2],labelAlignment:[CEN,MID]},"BN.TU":{outlines:[[M,2760,864,L,2760,879,2745,879,2745,892,2725,892,2725,902,2697,902,2697,912,2675,912,2675,929,2645,929,2645,942,Q,2628,937,2619,951,2612,969,2607,974,L,2585,974,2585,984,Q,2576,982,2565,991,2555,1e3,2545,1001,2544,1001,2544,1001,2543,1001,2543,1001,L,2543,1002,2543,1002,2543,1002,2544,1002,Q,2544,1003,2544,1003,L,2544,1003,2544,1003,2544,1003,Q,2481,1036,2447,1074,L,2435,1074,Q,2435,1091,2414,1091,2413,1091,2412,1091,2410,1093,2408,1095,2390,1119,2380,1132,2363,1137,2357,1142,2353,1158,2347,1162,2338,1171,2331,1176,2317,1187,2305,1187,2306,1192,2290,1197,2275,1200,2279,1212,2239,1233,2232,1239,2237,1249,2237,1259,L,2250,1259,Q,2258,1256,2287,1228,2309,1207,2330,1207,2357,1207,2357,1216,2330,1232,2302,1259,2293,1269,2270,1271,2247,1273,2239,1275,2236,1276,2236,1277,2230,1280,2227,1287,2235,1289,2235,1292,2227,1294,2217,1297,2203,1329,2180,1319,2180,1330,2162,1354,2156,1361,2151,1367,2151,1368,2151,1368,2146,1375,2143,1381,2142,1380,2141,1379,L,2142,1364,2147,1364,Q,2142,1361,2142,1353,2142,1347,2147,1324,L,2140,1324,Q,2135,1336,2111,1353,2089,1369,2082,1386,2082,1386,2082,1387,L,2075,1387,Q,2076,1390,2082,1394,L,2067,1394,2066,1399,Q,2064,1404,2067,1409,L,2052,1409,2052,1424,Q,2042,1424,2032,1434,2022,1445,2012,1447,2015,1456,2006,1460,1998,1464,1987,1462,1992,1487,1945,1487,1933,1512,1912,1507,1915,1512,1915,1514,L,1902,1514,Q,1905,1522,1905,1529,L,1898,1529,Q,1914,1536,1919,1541,1925,1547,1947,1577,1977,1618,1972,1649,L,1985,1649,Q,1995,1682,1995,1692,1995,1700,1990,1705,1985,1709,1985,1716,1985,1737,1997,1732,1994,1749,2005,1759,2016,1770,2030,1767,2033,1782,2062,1799,2069,1803,2077,1818,2089,1838,2090,1839,2121,1890,2142,1909,L,2190,1909,Q,2190,1907,2187,1903,2187,1901,2204,1887,2225,1887,2262,1927,2300,1968,2300,1993,2295,2026,2295,2032,2298,2033,2309,2046,2312,2049,2312,2059,2312,2069,2306,2080,2299,2093,2297,2107,L,2297,2169,Q,2305,2172,2310,2172,2303,2204,2350,2197,2352,2207,2352,2212,2373,2205,2375,2223,2376,2241,2385,2239,2385,2241,2385,2244,L,2385,2244,2390,2244,2390,2257,Q,2401,2255,2422,2263,2444,2272,2450,2272,L,2450,2294,2470,2294,Q,2478,2310,2501,2337,2514,2353,2524,2365,2525,2368,2526,2372,2532,2387,2545,2417,2563,2438,2585,2462,2594,2472,2629,2499,2652,2517,2667,2537,2680,2550,2680,2564,2706,2572,2724,2620,2743,2669,2775,2682,2773,2701,2781,2722,2791,2746,2792,2757,2795,2814,2805,2829,L,2805,2829,Q,2806,2831,2804,2831,L,2803,2839,Q,2823,2917,2875,2950,2906,2969,3053,3009,3091,2957,3145,2874,3145,2873,3167,2807,3179,2708,3182,2669,3182,2665,3182,2662,L,3182,2644,3200,2644,Q,3200,2609,3212,2604,L,3212,2582,Q,3184,2575,3195,2552,L,3165,2552,3160,2542,Q,3151,2548,3147,2554,L,3150,2557,Q,3140,2557,3137,2559,3137,2564,3140,2572,L,3045,2572,Q,3046,2559,3036,2556,3021,2553,3020,2552,3014,2513,3015,2509,L,2995,2509,Q,2995,2477,2997,2464,2988,2462,2988,2447,2989,2439,2989,2434,2988,2432,2987,2431,2984,2425,2980,2422,2981,2357,2977,2339,2977,2336,2972,2252,L,2960,2252,Q,2960,2183,2955,2167,L,2955,2109,Q,2974,2106,2967,2074,2967,2068,2965,2022,L,2950,2022,2950,1979,Q,2934,1982,2932,1971,2931,1965,2930,1947,2924,1928,2920,1921,2920,1919,2920,1899,2920,1894,2922,1866,2922,1863,2922,1859,L,2925,1859,Q,2925,1844,2925,1824,L,2905,1824,2905,1792,Q,2907,1787,2910,1779,L,2910,1652,2852,1652,2852,1639,Q,2837,1642,2837,1631,2837,1624,2840,1619,L,2830,1619,2830,1617,Q,2831,1585,2835,1554,L,2842,1554,Q,2844,1550,2845,1546,2845,1530,2831,1508,2817,1485,2817,1476,2817,1468,2827,1466,2825,1457,2815,1434,2805,1407,2805,1384,2805,1378,2807,1332,L,2822,1332,Q,2822,1260,2845,1177,2846,1171,2861,1150,2875,1130,2877,1119,2879,1090,2902,1056,2892,1046,2897,1008,2897,965,2902,929,2907,929,2917,927,2915,910,2925,899,2925,863,2934,858,2942,853,2942,817,2942,802,2931,801,2914,801,2895,767,2886,777,2856,796,2828,813,2827,834,L,2830,834,Q,2829,834,2827,834,L,2827,834,Q,2812,837,2795,848,Q,2774,861,2760,864,Z]],label:"Tutong",shortLabel:"TU",labelPosition:[260.7,188.8],labelAlignment:[CEN,MID]},"BN.TE":{outlines:[[M,4223,967,Q,4196,977,4191,977,4165,977,4165,953,4165,940,4166,939,4168,936,4185,934,L,4185,929,Q,4177,923,4177,919,4177,914,4187,891,4187,860,4180,829,L,4145,829,Q,4144,830,4127,842,4140,855,4140,879,4137,897,4137,907,L,4127,907,4127,892,Q,4127,892,4110,875,4094,859,4077,859,4075,852,4067,852,4054,852,4038,860,4020,869,4020,877,4002,877,3985,896,3970,913,3970,923,3970,938,4e3,974,4016,993,4039,1019,L,4040,1019,4040,1019,Q,4040,1017,4042,1017,4034,996,4050,991,4055,989,4081,989,4107,989,4132,1007,L,4087,1007,4087,1012,Q,4090,1012,4090,1014,4068,1016,4070,1029,L,4044,1029,Q,4026,1037,4025,1049,4005,1049,3997,1053,3988,1057,3977,1057,L,3975,1077,3975,1082,Q,3984,1104,4e3,1120,4026,1147,4028,1155,4022,1153,4007,1146,3997,1142,3980,1142,3969,1113,3956,1097,3945,1082,3932,1077,3925,1074,3918,1074,3854,1094,3842,1117,3827,1141,3821,1152,3810,1171,3807,1199,3809,1209,3835,1232,3841,1238,3849,1251,3853,1258,3860,1259,3860,1261,3860,1264,3860,1277,3878,1280,3902,1284,3907,1289,L,3907,1304,3865,1304,Q,3850,1292,3844,1287,3835,1279,3825,1262,3817,1249,3799,1237,3784,1226,3780,1214,3790,1204,3802,1204,3802,1202,3801,1200,3795,1167,3772,1172,3772,1167,3770,1157,3761,1157,3752,1168,3742,1177,3742,1184,3742,1195,3752,1205,3763,1214,3765,1221,L,3764,1221,Q,3752,1222,3748,1242,3749,1243,3749,1243,3758,1248,3788,1252,3810,1254,3810,1282,3810,1294,3776,1310,3741,1328,3740,1334,3736,1347,3726,1357,3717,1366,3717,1372,L,3720,1434,Q,3724,1444,3738,1454,3749,1463,3755,1464,3770,1468,3777,1492,3775,1496,3764,1498,3754,1501,3752,1504,3757,1504,3765,1507,3761,1516,3777,1529,3777,1531,3777,1534,L,3775,1539,Q,3756,1535,3743,1549,3732,1560,3732,1574,3732,1581,3751,1600,3766,1617,3757,1634,3757,1649,3776,1669,3785,1679,3795,1686,3795,1692,3785,1697,3777,1701,3780,1712,L,3760,1712,Q,3770,1727,3785,1751,3796,1766,3811,1769,3811,1769,3812,1769,L,3810,1772,Q,3777,1790,3769,1801,3762,1810,3762,1833,3762,1847,3765,1852,L,3767,1852,3780,1849,3780,1882,3790,1882,Q,3793,1916,3838,1959,3878,1997,3870,2039,L,3880,2039,Q,3880,2047,3882,2052,L,3882,2092,3867,2092,Q,3870,2101,3879,2103,3886,2105,3887,2112,3889,2134,3892,2139,3895,2145,3908,2147,3919,2150,3920,2159,L,3920,2192,3932,2192,3932,2204,Q,3917,2202,3917,2212,L,3917,2214,Q,3917,2215,3916,2215,L,3916,2216,Q,3912,2220,3910,2224,3902,2240,3902,2244,3902,2262,3909,2270,3912,2273,3925,2280,3947,2292,3947,2342,3947,2347,3964,2385,3980,2424,3980,2434,3980,2459,3978,2461,3970,2466,3957,2479,3955,2500,3967,2499,3967,2504,3970,2514,3948,2516,3950,2532,3964,2535,3976,2556,3997,2594,3997,2594,L,3997,2629,Q,3982,2629,3966,2649,3952,2666,3952,2674,3952,2700,3960,2707,3988,2707,3995,2722,4e3,2733,4008,2751,4015,2764,4030,2769,L,4042,2769,Q,4047,2758,4068,2758,4076,2759,4092,2759,L,4097,2759,4097,2749,4120,2749,Q,4118,2739,4126,2737,4127,2737,4145,2737,4157,2737,4173,2724,4195,2724,4202,2744,4203,2747,4218,2753,4229,2758,4225,2769,L,4317,2769,4317,2782,Q,4339,2786,4355,2794,4367,2799,4381,2799,4387,2799,4407,2797,L,4407,2787,Q,4415,2787,4425,2777,L,4475,2777,Q,4480,2792,4492,2849,4494,2857,4511,2866,4530,2875,4537,2887,4544,2882,4564,2861,4575,2849,4585,2849,4592,2849,4602,2858,4611,2867,4630,2867,4632,2881,4643,2880,4649,2880,4663,2877,4672,2877,4675,2938,4675,2944,4670,2945,4670,2961,4682,2974,4727,2979,4747,2979,4746,2990,4758,3003,4768,3014,4762,3029,L,4787,3029,Q,4784,3015,4791,3011,4796,3009,4815,3004,4825,3e3,4837,2977,4851,2981,4871,2958,4891,2936,4895,2917,L,4902,2917,Q,4900,2861,4900,2837,4870,2825,4865,2792,L,4847,2792,4847,2764,Q,4835,2764,4830,2762,4833,2740,4833,2727,4832,2703,4812,2714,L,4812,2702,Q,4802,2702,4797,2704,4794,2698,4788,2695,4784,2693,4782,2694,L,4782,2679,Q,4758,2681,4747,2681,4727,2679,4727,2664,L,4722,2665,Q,4715,2660,4709,2648,4701,2631,4695,2627,4674,2601,4665,2589,4660,2583,4641,2547,4629,2524,4610,2517,L,4610,2492,Q,4608,2484,4607,2474,L,4595,2474,4594,2464,4594,2464,Q,4595,2456,4595,2447,4595,2446,4595,2444,4595,2443,4595,2442,4595,2442,4595,2442,4607,2445,4607,2434,4605,2422,4605,2417,L,4620,2417,4620,2399,Q,4607,2393,4607,2349,4594,2341,4593,2338,4592,2336,4592,2317,L,4592,2302,Q,4594,2295,4605,2294,4605,2277,4607,2272,4597,2277,4590,2268,4580,2254,4580,2254,4585,2249,4585,2242,4579,2239,4570,2227,4572,2222,4578,2213,4578,2212,4579,2211,4575,2193,4575,2181,4575,2154,4597,2096,4617,2043,4635,2027,4639,2023,4642,2022,L,4642,2002,Q,4630,1998,4628,1994,4627,1991,4627,1976,4627,1969,4642,1882,4642,1876,4633,1864,4625,1852,4627,1837,4632,1801,4607,1799,4598,1799,4570,1767,4547,1742,4547,1723,4547,1705,4549,1705,4551,1704,4570,1702,4565,1697,4565,1691,4565,1677,4580,1672,4572,1639,4566,1631,4555,1613,4527,1619,4528,1612,4517,1602,4507,1593,4512,1582,4510,1584,4497,1584,L,4497,1559,4512,1559,4512,1534,Q,4524,1533,4530,1527,L,4530,1482,Q,4520,1480,4520,1473,4520,1470,4522,1464,L,4510,1464,4510,1444,4497,1444,Q,4501,1433,4489,1429,4480,1425,4470,1427,L,4470,1387,Q,4467,1386,4460,1382,L,4460,1374,Q,4457,1332,4460,1263,4460,1261,4460,1259,L,4460,1219,4447,1219,4447,1204,Q,4440,1204,4434,1198,4428,1192,4417,1192,4420,1180,4410,1180,4399,1182,4397,1182,L,4397,1159,4389,1159,Q,4368,1108,4285,1084,L,4285,1042,Q,4290,1027,4290,1023,4290,1004,4276,991,4263,979,4247,979,Q,4243,967,4223,967,Z]],label:"Temburong",shortLabel:"TE",labelPosition:[422,192.9],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"brunei",type:"maps"}}})});