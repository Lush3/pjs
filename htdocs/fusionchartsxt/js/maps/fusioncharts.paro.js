(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=16)})({16:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(17);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},17:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Paro.1.06-18-2019 09:36:33
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Paro",revision:1,creditLabel:false,standaloneInit:false,baseWidth:390,baseHeight:600,baseScaleFactor:10,firstEntity:"BT.PR.DG",entities:{"BT.PR.DG":{outlines:[[M,3839,4413,Q,3838,4397,3827,4376,3791,4356,3775,4346,3693,4298,3669,4269,3661,4258,3640,4250,3614,4239,3606,4234,3583,4218,3565,4201,3561,4203,3555,4210,3547,4217,3542,4216,3523,4214,3518,4230,L,3513,4245,Q,3513,4260,3513,4263,3508,4274,3503,4283,3501,4289,3501,4297,3501,4303,3505,4314,3508,4322,3508,4328,L,3508,4367,Q,3506,4376,3501,4382,3491,4395,3488,4399,3472,4416,3465,4425,3454,4440,3454,4462,L,3456,4495,Q,3456,4498,3448,4532,3440,4572,3440,4602,3440,4633,3441,4641,3442,4645,3450,4652,3457,4659,3457,4668,3457,4682,3437,4682,3414,4681,3406,4681,3379,4679,3374,4685,3368,4690,3349,4690,3326,4688,3317,4688,3303,4688,3292,4694,3271,4705,3237,4732,3221,4743,3208,4754,3201,4759,3187,4786,3178,4799,3163,4810,3144,4823,3125,4822,3118,4820,3106,4821,3095,4822,3089,4824,3082,4827,3076,4834,3067,4844,3062,4848,3052,4854,3025,4863,3020,4865,3014,4874,3006,4885,2999,4889,2993,4891,2980,4894,2974,4895,2969,4898,2962,4903,2960,4904,2953,4906,2937,4910,2927,4913,2921,4918,2906,4930,2881,4938,2854,4944,2842,4948,2805,4961,2697,5006,2701,5010,2704,5014,2714,5033,2729,5041,2759,5056,2769,5065,2784,5079,2784,5098,2784,5106,2781,5125,2801,5164,2805,5171,2821,5198,2837,5210,2854,5224,2882,5234,2884,5234,2891,5234,2897,5234,2899,5235,L,2909,5246,Q,2926,5263,2931,5264,2963,5275,2975,5288,2983,5297,2999,5311,3014,5324,3019,5335,3022,5341,3038,5357,L,3059,5379,Q,3062,5384,3062,5394,3061,5404,3065,5409,3075,5422,3075,5423,3076,5424,3076,5436,3076,5447,3075,5450,3072,5456,3062,5455,L,3062,5481,Q,3063,5482,3087,5490,3102,5494,3104,5508,L,3106,5544,Q,3106,5557,3100,5564,3092,5571,3092,5574,L,3096,5597,Q,3097,5603,3103,5606,3109,5609,3109,5614,L,3107,5624,Q,3107,5631,3127,5633,3133,5634,3139,5639,3145,5644,3149,5645,3154,5646,3178,5646,3193,5647,3200,5651,3208,5656,3223,5666,3236,5674,3246,5675,3253,5675,3266,5687,3278,5698,3291,5696,3308,5694,3335,5719,3339,5723,3347,5725,3354,5727,3357,5730,3366,5741,3382,5741,L,3498,5745,Q,3496,5738,3490,5686,3486,5654,3486,5590,3486,5588,3487,5586,3498,5539,3548,5453,3595,5374,3593,5328,3607,5311,3606,5267,3605,5224,3620,5206,3646,5174,3670,5156,3689,5141,3697,5133,3709,5120,3716,5105,3716,5104,3717,5104,3726,5081,3728,5075,3731,5067,3731,5056,3731,5028,3729,5012,3726,4996,3721,4985,3717,4977,3717,4967,3717,4958,3726,4947,3735,4933,3737,4918,3737,4896,3738,4888,3740,4875,3751,4861,3761,4844,3763,4813,3765,4771,3766,4762,3782,4694,3819,4663,3833,4651,3838,4640,3839,4635,3842,4616,3843,4603,3843,4582,L,3840,4543,Q,3841,4428,3839,4413,Z]],label:"Doga Gewog",shortLabel:"DG",labelPosition:[327,512.3],labelAlignment:[CEN,MID],nextId:"BT.PR.SR"},"BT.PR.SR":{outlines:[[M,3284,3153,Q,3227,3172,3205,3189,3185,3203,3164,3207,3155,3208,3119,3208,3096,3209,3077,3225,3068,3233,3050,3259,3040,3271,3023,3273,3004,3272,2997,3274,2987,3276,2975,3283,2965,3289,2960,3289,2956,3289,2922,3278,2888,3266,2875,3261,2865,3256,2836,3247,2804,3237,2794,3237,L,2673,3242,Q,2657,3242,2625,3211,2598,3186,2587,3167,2566,3134,2548,3125,2537,3118,2529,3112,L,2500,3082,2503,3088,Q,2503,3089,2504,3090,L,2496,3092,Q,2494,3096,2488,3101,2482,3106,2482,3111,2482,3115,2481,3116,2480,3118,2480,3129,2480,3140,2483,3155,2483,3163,2495,3175,2510,3189,2510,3201,2509,3213,2509,3215,2510,3219,2515,3226,2519,3230,2536,3246,2548,3256,2552,3268,2553,3273,2565,3292,2573,3305,2574,3313,2574,3314,2574,3315,2575,3334,2587,3354,2595,3365,2616,3389,2641,3419,2656,3430,2660,3432,2660,3465,2660,3492,2660,3494,2658,3504,2648,3521,2641,3539,2636,3543,2621,3554,2620,3554,2619,3556,2619,3566,2619,3567,2619,3569,2620,3573,2621,3574,2622,3576,2631,3584,2637,3590,2644,3596,2648,3600,2651,3606,2661,3630,2685,3639,L,2712,3650,Q,2771,3637,2779,3637,2827,3637,2842,3645,2857,3654,2938,3655,2941,3655,2953,3663,2965,3671,2970,3671,2977,3671,2990,3670,3001,3670,3006,3673,3018,3679,3064,3709,3077,3709,3125,3690,3174,3671,3177,3661,3182,3644,3198,3639,3218,3634,3222,3630,3229,3622,3244,3623,3276,3623,3277,3623,L,3277,3571,Q,3279,3568,3280,3563,3280,3562,3285,3560,3288,3558,3295,3547,3285,3538,3285,3522,3285,3511,3278,3492,3271,3474,3272,3454,3273,3442,3273,3420,3273,3397,3264,3374,3255,3352,3255,3336,3252,3296,3251,3281,3250,3253,3260,3232,3267,3215,3269,3189,3269,3184,3276,3169,Q,3281,3158,3284,3153,Z]],label:"Dopshari Gewog",shortLabel:"SR",labelPosition:[296.2,345.8],labelAlignment:[CEN,MID],nextId:"BT.PR.DT"},"BT.PR.DT":{outlines:[[M,2859,1507,L,2708,1397,Q,2701,1392,2702,1381,2703,1366,2701,1363,2695,1351,2695,1329,2695,1305,2694,1294,L,2611,1294,2575,1316,2534,1334,Q,2520,1337,2515,1347,2510,1352,2498,1351,2498,1355,2498,1367,2498,1375,2492,1378,2482,1382,2464,1396,2454,1402,2439,1419,L,2423,1443,Q,2418,1468,2417,1512,2417,1536,2415,1579,2415,1583,2415,1587,2417,1605,2408,1617,2393,1633,2383,1647,2375,1657,2371,1662,2364,1671,2364,1681,2364,1689,2353,1702,2340,1718,2337,1723,L,2279,1802,Q,2277,1811,2260,1837,2244,1861,2244,1874,2244,1890,2242,1895,2238,1904,2234,1909,2233,1912,2233,1920,2233,1923,2244,1980,2244,1986,2255,2010,2267,2033,2265,2040,2262,2058,2267,2069,2268,2074,2269,2083,2271,2091,2277,2095,2291,2105,2295,2121,2296,2128,2296,2148,L,2296,2255,Q,2295,2268,2296,2273,2298,2282,2306,2294,2307,2297,2310,2311,2311,2326,2315,2331,2321,2342,2348,2364,2376,2389,2384,2398,2399,2417,2399,2429,2399,2439,2406,2448,2413,2457,2413,2466,L,2413,2468,Q,2413,2479,2419,2488,2422,2494,2429,2507,2434,2522,2434,2567,L,2434,2603,Q,2434,2612,2429,2624,2427,2630,2422,2639,2419,2645,2413,2655,2408,2665,2408,2675,2408,2683,2403,2692,2397,2700,2397,2705,2397,2709,2405,2718,2413,2725,2413,2746,L,2413,2788,Q,2413,2805,2408,2835,2408,2846,2410,2854,2412,2862,2412,2892,2412,2912,2422,2945,2425,2954,2428,2971,2432,2985,2446,2992,2454,2995,2466,3014,2471,3024,2480,3038,L,2500,3082,2529,3112,Q,2537,3118,2548,3125,2566,3134,2587,3167,2598,3186,2625,3211,2657,3242,2673,3242,L,2794,3237,Q,2804,3237,2836,3247,2865,3256,2875,3261,2888,3266,2922,3278,2956,3289,2960,3289,2965,3289,2975,3283,2987,3276,2997,3274,3004,3272,3023,3273,3040,3271,3050,3259,3068,3233,3077,3225,3096,3209,3119,3208,3155,3208,3164,3207,3185,3203,3205,3189,3227,3172,3284,3153,3285,3150,3285,3150,3286,3139,3286,3091,3287,3087,3299,3071,3309,3056,3309,3048,3309,2980,3307,2952,L,3307,2903,Q,3307,2893,3316,2880,3329,2860,3331,2858,3339,2841,3339,2811,3338,2767,3338,2765,3336,2437,3336,2419,3336,2415,3348,2403,3361,2390,3368,2387,3382,2368,3399,2352,3400,2351,3425,2334,3429,2331,3435,2329,3440,2327,3441,2319,3440,2310,3440,2306,3440,2297,3448,2294,3463,2286,3470,2276,3471,2275,3480,2266,3489,2258,3490,2253,L,3490,2229,Q,3490,2210,3489,2197,3481,2195,3475,2195,L,3474,2162,Q,3457,2166,3452,2151,3450,2145,3438,2145,3427,2146,3426,2146,L,3370,2147,Q,3312,2147,3307,2144,3296,2136,3282,2132,3265,2127,3261,2125,3222,2102,3210,2092,3196,2080,3180,2057,3174,2049,3174,2029,3175,2005,3174,1995,3171,1960,3174,1944,3177,1919,3169,1904,3158,1889,3151,1876,3140,1856,3135,1846,3126,1831,3116,1817,3097,1796,3077,1756,3053,1715,3042,1699,3023,1675,3003,1639,2980,1603,2963,1582,L,2946,1570,Q,2942,1566,2939,1563,2924,1548,2912,1543,Q,2887,1531,2859,1507,Z]],label:"Doteng Gewog",shortLabel:"DT",labelPosition:[281.3,229.1],labelAlignment:[CEN,MID],nextId:"BT.PR.HR"},"BT.PR.HR":{outlines:[[M,3177,3661,Q,3174,3671,3125,3690,3077,3709,3064,3709,3018,3679,3006,3673,3001,3670,2990,3670,2977,3671,2970,3671,2965,3671,2953,3663,2941,3655,2938,3655,2857,3654,2842,3645,2827,3637,2779,3637,2771,3637,2712,3650,L,2729,3657,Q,2733,3659,2749,3664,2762,3672,2760,3683,2762,3690,2770,3697,2775,3702,2781,3707,2787,3714,2797,3729,2802,3734,2818,3740,2836,3746,2845,3753,2858,3761,2897,3780,2931,3801,2943,3829,2945,3833,2952,3838,2962,3843,2964,3844,2984,3867,2985,3867,3002,3884,3004,3888,3009,3895,3008,3912,3007,3923,3019,3939,3020,3943,3020,3952,3022,3959,3026,3961,3039,3965,3041,3979,3042,3988,3042,4006,3044,4003,3047,3999,3056,3988,3078,3988,3113,3988,3116,3987,3119,3986,3149,3966,3162,3956,3183,3945,3207,3925,3214,3917,3222,3906,3225,3901,3226,3899,3227,3891,3227,3887,3233,3883,3235,3882,3248,3877,3260,3872,3261,3870,L,3260,3850,Q,3260,3841,3263,3835,3265,3833,3266,3833,3274,3821,3275,3799,3276,3759,3277,3750,L,3277,3623,Q,3276,3623,3244,3623,3229,3622,3222,3630,3218,3634,3198,3639,Q,3182,3644,3177,3661,Z]],label:"Hungrel Gewog",shortLabel:"HR",labelPosition:[309.4,381.4],labelAlignment:[CEN,MID],nextId:"BT.PR.LA"},"BT.PR.LA":{outlines:[[M,2500,3082,L,2480,3038,Q,2473,3039,2452,3072,2423,3117,2421,3120,2410,3131,2389,3146,2367,3161,2336,3169,2321,3172,2298,3178,2269,3186,2254,3193,2224,3206,2208,3215,2179,3230,2162,3251,2157,3256,2143,3265,2128,3273,2121,3281,L,2083,3317,Q,2065,3348,2057,3355,2050,3360,2050,3376,2050,3394,2045,3402,2040,3411,2012,3430,1978,3452,1970,3460,1933,3490,1928,3494,1904,3513,1886,3518,1858,3528,1843,3533,1816,3540,1794,3538,1779,3537,1763,3544,L,1735,3557,Q,1724,3560,1705,3562,1686,3565,1681,3566,L,1683,3585,Q,1690,3591,1694,3605,1698,3618,1704,3625,1710,3631,1727,3663,1735,3678,1750,3712,1767,3752,1777,3771,1785,3786,1795,3826,1797,3832,1803,3840,1810,3848,1811,3853,1812,3867,1825,3883,1840,3904,1879,3988,1901,4031,1943,4095,1953,4080,1972,4050,1991,4024,2017,4011,2036,4001,2061,3981,2095,3954,2108,3945,2121,3935,2164,3935,2187,3935,2221,3935,2245,3935,2273,3921,2284,3916,2287,3904,2289,3898,2289,3882,2289,3862,2287,3857,2287,3856,2286,3854,2280,3847,2264,3839,2260,3837,2252,3814,2243,3794,2243,3787,2243,3783,2248,3764,2252,3745,2253,3743,2259,3732,2275,3733,2284,3734,2300,3736,2311,3736,2328,3731,2345,3726,2350,3726,2359,3726,2376,3725,2389,3725,2396,3722,2413,3713,2419,3712,2424,3711,2447,3709,2456,3701,2458,3692,2459,3688,2465,3681,2471,3673,2471,3673,2474,3659,2476,3650,2478,3634,2485,3627,2496,3615,2526,3602,2527,3600,2529,3599,2539,3586,2565,3577,2591,3569,2619,3569,2619,3567,2619,3566,2619,3556,2620,3554,2621,3554,2636,3543,2641,3539,2648,3521,2658,3504,2660,3494,2660,3492,2660,3465,2660,3432,2656,3430,2641,3419,2616,3389,2595,3365,2587,3354,2575,3334,2574,3315,2574,3314,2574,3313,2573,3305,2565,3292,2553,3273,2552,3268,2548,3256,2536,3246,2519,3230,2515,3226,2510,3219,2509,3215,2509,3213,2510,3201,2510,3189,2495,3175,2483,3163,2483,3155,2480,3140,2480,3129,2480,3118,2481,3116,2482,3115,2482,3111,2482,3106,2488,3101,2494,3096,2496,3092,L,2504,3090,Q,2503,3089,2503,3088,L,2499,3081,Z]],label:"Lamgong Gewog",shortLabel:"LA",labelPosition:[217,356.6],labelAlignment:[CEN,MID],nextId:"BT.PR.LU"},"BT.PR.LU":{outlines:[[M,2731,3929,Q,2727,3917,2716,3918,2702,3919,2675,3918,2655,3918,2654,3920,2649,3923,2643,3954,2625,3954,2623,3959,2621,3964,2613,3964,L,2613,3965,Q,2602,3972,2595,3957,L,2584,3944,2548,3925,Q,2520,3905,2511,3896,2505,3891,2501,3890,2496,3891,2491,3890,L,2389,3890,Q,2369,3890,2366,3887,L,2353,3874,Q,2350,3872,2337,3870,2325,3869,2320,3863,2311,3854,2303,3853,2292,3854,2286,3854,2287,3856,2287,3857,2289,3862,2289,3882,2289,3898,2287,3904,2284,3916,2273,3921,2245,3935,2221,3935,2187,3935,2164,3935,2121,3935,2108,3945,2095,3954,2061,3981,2036,4001,2017,4011,1991,4024,1972,4050,1953,4080,1943,4095,L,1943,4095,Q,1945,4103,1947,4110,L,1957,4129,Q,1960,4132,1968,4143,1976,4154,1977,4159,1981,4177,2006,4199,2028,4219,2040,4220,2064,4220,2073,4223,2077,4225,2083,4230,2088,4234,2093,4235,2100,4235,2111,4242,2117,4247,2133,4274,2139,4283,2150,4296,2151,4298,2151,4310,2151,4332,2146,4387,2146,4418,2150,4423,2155,4429,2185,4471,2195,4487,2216,4507,2233,4526,2243,4536,2244,4538,2246,4540,2262,4561,2267,4567,2272,4574,2294,4597,2296,4599,2296,4616,2297,4636,2298,4640,2298,4641,2303,4647,2308,4653,2309,4672,2310,4690,2308,4702,2307,4703,2307,4704,L,2334,4723,Q,2345,4729,2360,4747,2368,4756,2394,4764,2403,4766,2413,4776,2425,4788,2432,4790,L,2452,4798,Q,2456,4801,2465,4809,2467,4811,2485,4817,2490,4819,2494,4821,2504,4815,2529,4775,2534,4767,2553,4759,2561,4754,2561,4735,2563,4726,2564,4722,2566,4715,2575,4715,2587,4716,2607,4715,2616,4713,2629,4702,L,2655,4683,2932,4683,Q,2931,4675,2945,4663,2951,4658,2971,4644,2973,4643,2978,4635,2983,4628,2987,4625,2991,4622,2991,4604,2990,4595,3003,4584,3010,4578,3026,4563,3043,4552,3043,4544,L,3043,4521,Q,3043,4518,3042,4516,3040,4510,3036,4504,3030,4496,3028,4492,3022,4480,3019,4476,3016,4470,3007,4470,2997,4470,2989,4476,2981,4482,2966,4481,2929,4484,2915,4484,2903,4484,2899,4480,2893,4473,2878,4468,2868,4464,2844,4468,2834,4468,2812,4451,2810,4449,2804,4449,2798,4449,2796,4447,L,2785,4439,Q,2761,4439,2747,4455,2732,4472,2715,4473,L,2699,4473,2699,4461,Q,2704,4457,2708,4441,2710,4426,2716,4423,2726,4416,2728,4405,2727,4391,2727,4382,2727,4375,2728,4372,2735,4365,2740,4356,2742,4351,2742,4341,2742,4327,2742,4323,2742,4297,2741,4286,2741,4269,2752,4258,2757,4253,2776,4241,2790,4232,2792,4225,2796,4214,2820,4192,2821,4190,2825,4187,2831,4179,2844,4168,2866,4150,2873,4141,2874,4139,2876,4138,2868,4119,2853,4101,2836,4081,2829,4072,2792,4031,2783,4016,2780,4011,2750,3991,2742,3985,2743,3963,2743,3956,2738,3946,Q,2732,3931,2731,3929,Z]],label:"Lungnyi Gewog",shortLabel:"LU",labelPosition:[244.3,423.7],labelAlignment:[CEN,MID],nextId:"BT.PR.NJ"},"BT.PR.NJ":{outlines:[[M,2465,4809,Q,2456,4801,2452,4798,L,2432,4790,Q,2425,4788,2413,4776,2403,4766,2394,4764,2368,4756,2360,4747,2345,4729,2334,4723,L,2307,4704,Q,2303,4715,2277,4742,2246,4770,2216,4804,L,2190,4833,Q,2182,4840,2156,4860,2133,4875,2113,4885,2102,4888,2097,4890,2091,4891,2077,4901,2073,4903,2070,4904,2059,4912,2055,4913,2049,4914,2037,4913,2023,4912,2015,4913,1985,4912,1972,4912,1947,4912,1938,4923,1935,4925,1914,4952,1913,4953,1898,4963,1885,4972,1880,4979,1875,4985,1860,5004,1845,5015,1853,5039,1853,5055,1859,5091,1859,5094,1862,5102,1865,5108,1865,5114,1863,5131,1865,5141,1868,5172,1875,5198,1880,5214,1880,5244,1880,5274,1877,5317,L,1880,5349,Q,1880,5373,1885,5437,1885,5452,1875,5468,1865,5483,1865,5517,1865,5542,1880,5561,1904,5591,1914,5612,1921,5627,1944,5658,1962,5687,1955,5707,1983,5708,2040,5709,L,2040,5709,Q,2059,5701,2113,5698,L,2292,5698,2376,5685,Q,2389,5681,2429,5682,2447,5682,2462,5682,2465,5682,2467,5682,2546,5682,2571,5687,2582,5689,2616,5690,2649,5692,2661,5699,2663,5701,2674,5704,2684,5708,2688,5709,L,2710,5710,Q,2722,5710,2755,5716,2781,5720,2795,5725,2812,5732,2838,5747,2909,5782,2958,5835,2972,5849,2983,5865,2987,5871,3004,5875,3023,5880,3025,5881,3037,5888,3040,5888,3048,5891,3061,5890,3087,5888,3105,5898,3116,5906,3139,5906,3164,5906,3183,5915,3212,5929,3261,5929,3279,5928,3295,5933,3324,5943,3329,5944,3338,5946,3350,5947,3360,5949,3371,5954,3379,5957,3409,5957,L,3450,5956,Q,3452,5946,3455,5944,3464,5938,3466,5937,3468,5935,3468,5932,3469,5927,3469,5926,3473,5916,3474,5914,3476,5912,3481,5909,3487,5906,3488,5904,3503,5863,3515,5851,3521,5845,3521,5827,3521,5801,3521,5798,3504,5781,3498,5745,L,3382,5741,Q,3366,5741,3357,5730,3354,5727,3347,5725,3339,5723,3335,5719,3308,5694,3291,5696,3278,5698,3266,5687,3253,5675,3246,5675,3236,5674,3223,5666,3208,5656,3200,5651,3193,5647,3178,5646,3154,5646,3149,5645,3145,5644,3139,5639,3133,5634,3127,5633,3107,5631,3107,5624,L,3109,5614,Q,3109,5609,3103,5606,3097,5603,3096,5597,L,3092,5574,Q,3092,5571,3100,5564,3106,5557,3106,5544,L,3104,5508,Q,3102,5494,3087,5490,3063,5482,3062,5481,L,3062,5455,Q,3072,5456,3075,5450,3076,5447,3076,5436,3076,5424,3075,5423,3075,5422,3065,5409,3061,5404,3062,5394,3062,5384,3059,5379,L,3038,5357,Q,3022,5341,3019,5335,3014,5324,2999,5311,2983,5297,2975,5288,2963,5275,2931,5264,2926,5263,2909,5246,L,2899,5235,Q,2897,5234,2891,5234,2884,5234,2882,5234,2854,5224,2837,5210,2821,5198,2805,5171,2801,5164,2781,5125,2784,5106,2784,5098,2784,5079,2769,5065,2759,5056,2729,5041,2714,5033,2704,5014,2701,5010,2697,5006,2695,5005,2693,5004,L,2675,4996,Q,2664,4989,2614,4942,2609,4937,2603,4926,2596,4914,2592,4909,2566,4885,2563,4883,2526,4843,2506,4827,2503,4825,2494,4821,2490,4819,2485,4817,Q,2467,4811,2465,4809,Z]],label:"Naja Gewog",shortLabel:"NJ",labelPosition:[237.3,533],labelAlignment:[CEN,MID],nextId:"BT.PR.SB"},"BT.PR.SB":{outlines:[[M,3277,3750,Q,3276,3759,3275,3799,3274,3821,3266,3833,3265,3833,3263,3835,3260,3841,3260,3850,L,3261,3870,Q,3260,3872,3248,3877,3235,3882,3233,3883,3227,3887,3227,3891,3226,3899,3225,3901,3222,3906,3214,3917,3207,3925,3183,3945,3162,3956,3149,3966,3119,3986,3116,3987,3113,3988,3078,3988,3056,3988,3047,3999,3044,4003,3042,4006,3028,4018,3011,4021,3008,4022,2978,4022,2965,4022,2942,4042,2923,4056,2913,4071,2903,4083,2893,4106,2883,4126,2876,4138,2874,4139,2873,4141,2866,4150,2844,4168,2831,4179,2825,4187,2821,4190,2820,4192,2796,4214,2792,4225,2790,4232,2776,4241,2757,4253,2752,4258,2741,4269,2741,4286,2742,4297,2742,4323,2742,4327,2742,4341,2742,4351,2740,4356,2735,4365,2728,4372,2727,4375,2727,4382,2727,4391,2728,4405,2726,4416,2716,4423,2710,4426,2708,4441,2704,4457,2699,4461,L,2699,4473,2715,4473,Q,2732,4472,2747,4455,2761,4439,2785,4439,L,2796,4447,Q,2798,4449,2804,4449,2810,4449,2812,4451,2834,4468,2844,4468,2868,4464,2878,4468,2893,4473,2899,4480,2903,4484,2915,4484,2929,4484,2966,4481,2981,4482,2989,4476,2997,4470,3007,4470,3016,4470,3019,4476,3022,4480,3028,4492,3030,4496,3036,4504,3040,4510,3042,4516,3043,4518,3043,4521,L,3043,4544,Q,3043,4552,3026,4563,3010,4578,3003,4584,2990,4595,2991,4604,2991,4622,2987,4625,2983,4628,2978,4635,2973,4643,2971,4644,2951,4658,2945,4663,2931,4675,2932,4683,L,2655,4683,2629,4702,Q,2616,4713,2607,4715,2587,4716,2575,4715,2566,4715,2564,4722,2563,4726,2561,4735,2561,4754,2553,4759,2534,4767,2529,4775,2504,4815,2494,4821,2503,4825,2506,4827,2526,4843,2563,4883,2566,4885,2592,4909,2596,4914,2603,4926,2609,4937,2614,4942,2664,4989,2675,4996,L,2693,5004,Q,2695,5005,2697,5006,2805,4961,2842,4948,2854,4944,2881,4938,2906,4930,2921,4918,2927,4913,2937,4910,2953,4906,2960,4904,2962,4903,2969,4898,2974,4895,2980,4894,2993,4891,2999,4889,3006,4885,3014,4874,3020,4865,3025,4863,3052,4854,3062,4848,3067,4844,3076,4834,3082,4827,3089,4824,3095,4822,3106,4821,3118,4820,3125,4822,3144,4823,3163,4810,3178,4799,3187,4786,3201,4759,3208,4754,3221,4743,3237,4732,3271,4705,3292,4694,3303,4688,3317,4688,3326,4688,3349,4690,3368,4690,3374,4685,3379,4679,3406,4681,3414,4681,3437,4682,3457,4682,3457,4668,3457,4659,3450,4652,3442,4645,3441,4641,3440,4633,3440,4602,3440,4572,3448,4532,3456,4498,3456,4495,L,3454,4462,Q,3454,4440,3465,4425,3472,4416,3488,4399,3491,4395,3501,4382,3506,4376,3508,4367,L,3508,4328,Q,3508,4322,3505,4314,3501,4303,3501,4297,3501,4289,3503,4283,3508,4274,3513,4263,3513,4260,3513,4245,L,3518,4230,Q,3523,4214,3542,4216,3547,4217,3555,4210,3561,4203,3565,4201,3562,4198,3560,4196,3523,4165,3510,4150,3488,4125,3488,4093,3488,4070,3490,4058,3495,4040,3512,4027,3517,4012,3522,4004,3525,3997,3533,3995,L,3544,3993,Q,3554,3986,3554,3970,3554,3953,3561,3945,3581,3922,3586,3896,3590,3881,3590,3850,3590,3820,3576,3793,3554,3757,3538,3727,3511,3676,3507,3666,3502,3646,3498,3637,3491,3620,3473,3613,3450,3603,3396,3585,3343,3567,3331,3562,3309,3556,3300,3551,3297,3549,3295,3547,3288,3558,3285,3560,3280,3562,3280,3563,3279,3568,3277,3571,Z]],label:"Shapa Gewog",shortLabel:"SB",labelPosition:[311.7,427.7],labelAlignment:[CEN,MID],nextId:"BT.PR.TT"},"BT.PR.TT":{outlines:[[M,2576,303,Q,2566,295,2564,288,2558,285,2548,278,2538,270,2522,271,2505,271,2500,278,2491,288,2476,293,2464,296,2453,305,2440,315,2430,319,2373,343,2339,372,2325,369,2315,379,2305,393,2297,400,2292,405,2283,421,2277,434,2265,440,2262,455,2258,462,2256,467,2243,479,2234,488,2195,489,L,2190,489,Q,2189,489,2188,489,2182,488,2172,489,2146,489,2141,488,2132,486,2125,474,2119,461,2117,458,2093,425,2089,422,2080,416,2079,407,2079,398,2078,392,2068,389,2047,389,2039,389,2031,394,2020,402,2016,404,1995,404,1984,409,1970,416,1967,418,1963,419,1955,419,1948,418,1945,420,1919,434,1914,436,1899,440,1894,441,1886,444,1881,449,L,1851,468,Q,1844,473,1840,485,1831,496,1830,499,1827,505,1827,532,L,1831,583,Q,1831,598,1815,608,1807,612,1800,620,1796,625,1786,624,1722,624,1712,624,L,1711,624,Q,1654,624,1631,624,1618,624,1602,609,1585,590,1575,580,1542,557,1529,549,1507,537,1479,537,L,1453,538,Q,1438,538,1422,523,1406,504,1401,499,1382,483,1374,474,1359,461,1349,446,1344,439,1321,425,1303,412,1288,407,1269,404,1253,398,1235,392,1216,392,L,1177,388,Q,1170,387,1167,379,1163,368,1160,362,1135,319,1125,297,1122,290,1106,264,1091,240,1086,229,1080,216,1070,198,1059,182,1054,172,1017,123,1e3,98,969,53,941,40,925,98,925,174,925,217,927,309,926,333,918,382,911,419,916,445,925,494,902,523,881,549,850,549,807,547,784,547,745,547,717,556,689,565,673,606,645,678,644,678,622,716,576,802,515,917,515,939,515,946,542,1e3,554,1027,567,1053,567,1065,521,1099,479,1132,445,1143,441,1144,437,1146,406,1166,342,1206,265,1253,238,1271,234,1273,227,1280,218,1287,217,1288,L,200,1309,Q,194,1320,187,1362,187,1363,168,1425,154,1467,154,1486,154,1487,154,1489,156,1535,148,1543,124,1563,109,1579,103,1585,92,1600,81,1616,78,1623,L,68,1647,Q,54,1665,48,1675,L,48,1693,Q,57,1694,71,1697,86,1700,93,1700,100,1700,116,1709,133,1718,138,1717,149,1715,160,1723,172,1731,181,1731,194,1731,203,1737,211,1744,218,1759,235,1796,272,1851,331,1940,333,1943,346,1965,368,2005,384,2028,391,2042,393,2045,421,2045,457,2045,480,2044,503,2042,546,2041,587,2040,587,2033,653,2033,658,2036,668,2042,730,2089,742,2097,838,2180,L,865,2180,Q,866,2172,871,2166,875,2163,883,2157,909,2133,914,2130,930,2117,944,2109,948,2107,956,2094,965,2084,970,2084,975,2084,980,2091,985,2096,988,2102,990,2109,997,2117,1002,2126,1005,2133,1009,2137,1017,2150,1022,2156,1037,2164,L,1066,2195,1066,2412,Q,1072,2418,1078,2428,1084,2436,1090,2451,L,1103,2472,Q,1104,2475,1110,2481,1116,2488,1118,2493,1123,2509,1139,2538,1149,2558,1149,2573,1149,2577,1149,2579,1148,2584,1148,2592,1147,2603,1152,2610,1167,2631,1165,2649,1164,2660,1174,2694,1185,2728,1185,2735,1184,2747,1190,2758,1197,2773,1198,2777,1199,2779,1201,2800,1203,2812,1207,2819,1220,2840,1220,2854,1218,2869,1222,2878,1227,2888,1227,2895,1227,2909,1220,2944,1217,2956,1217,2975,1217,2985,1217,3003,1217,3005,1217,3008,L,1218,3040,Q,1220,3040,1270,3054,L,1286,3053,Q,1289,3053,1308,3062,1327,3070,1332,3070,1337,3069,1353,3076,1367,3081,1375,3086,1389,3094,1414,3108,1435,3121,1450,3142,1491,3199,1511,3224,1512,3227,1530,3240,L,1542,3262,Q,1549,3275,1547,3301,1538,3319,1536,3321,1511,3343,1511,3378,1511,3397,1522,3412,1525,3416,1558,3449,1565,3456,1598,3482,L,1616,3494,Q,1639,3508,1640,3508,1645,3513,1662,3525,1672,3532,1676,3542,L,1681,3566,Q,1686,3565,1705,3562,1724,3560,1735,3557,L,1763,3544,Q,1779,3537,1794,3538,1816,3540,1843,3533,1858,3528,1886,3518,1904,3513,1928,3494,1933,3490,1970,3460,1978,3452,2012,3430,2040,3411,2045,3402,2050,3394,2050,3376,2050,3360,2057,3355,2065,3348,2083,3317,L,2121,3281,Q,2128,3273,2143,3265,2157,3256,2162,3251,2179,3230,2208,3215,2224,3206,2254,3193,2269,3186,2298,3178,2321,3172,2336,3169,2367,3161,2389,3146,2410,3131,2421,3120,2423,3117,2452,3072,2473,3039,2480,3038,2471,3024,2466,3014,2454,2995,2446,2992,2432,2985,2428,2971,2425,2954,2422,2945,2412,2912,2412,2892,2412,2862,2410,2854,2408,2846,2408,2835,2413,2805,2413,2788,L,2413,2746,Q,2413,2725,2405,2718,2397,2709,2397,2705,2397,2700,2403,2692,2408,2683,2408,2675,2408,2665,2413,2655,2419,2645,2422,2639,2427,2630,2429,2624,2434,2612,2434,2603,L,2434,2567,Q,2434,2522,2429,2507,2422,2494,2419,2488,2413,2479,2413,2468,L,2413,2466,Q,2413,2457,2406,2448,2399,2439,2399,2429,2399,2417,2384,2398,2376,2389,2348,2364,2321,2342,2315,2331,2311,2326,2310,2311,2307,2297,2306,2294,2298,2282,2296,2273,2295,2268,2296,2255,L,2296,2148,Q,2296,2128,2295,2121,2291,2105,2277,2095,2271,2091,2269,2083,2268,2074,2267,2069,2262,2058,2265,2040,2267,2033,2255,2010,2244,1986,2244,1980,2233,1923,2233,1920,2233,1912,2234,1909,2238,1904,2242,1895,2244,1890,2244,1874,2244,1861,2260,1837,2277,1811,2279,1802,L,2337,1723,Q,2340,1718,2353,1702,2364,1689,2364,1681,2364,1671,2371,1662,2375,1657,2383,1647,2393,1633,2408,1617,2417,1605,2415,1587,2415,1583,2415,1579,2417,1536,2417,1512,2418,1468,2423,1443,L,2439,1419,Q,2454,1402,2464,1396,2482,1382,2492,1378,2498,1375,2498,1367,2498,1355,2498,1351,2497,1351,2496,1351,2484,1351,2481,1351,2476,1347,2470,1342,2464,1337,2456,1336,2445,1335,2438,1333,L,2438,1308,Q,2437,1293,2454,1279,L,2475,1249,Q,2480,1241,2491,1214,2500,1195,2512,1185,2530,1167,2548,1165,2568,1162,2582,1155,2590,1151,2609,1138,2627,1127,2643,1124,2673,1111,2677,1079,2679,1060,2682,1043,2683,1037,2683,1020,2683,1003,2679,998,2672,983,2666,968,2664,944,2661,937,2646,913,2645,910,2639,900,2626,889,2607,875,2602,869,L,2582,847,Q,2574,839,2566,838,2563,838,2563,830,2563,823,2565,822,2570,819,2574,811,2578,790,2580,783,2602,750,2603,742,L,2603,741,Q,2603,737,2606,731,2608,722,2608,719,2608,712,2592,692,2575,671,2575,670,2573,666,2558,646,2548,634,2548,622,2548,613,2551,610,2556,604,2562,590,2562,566,2571,557,2580,546,2580,526,2580,506,2591,492,2595,483,2595,455,2595,427,2600,416,2613,385,2613,353,2613,341,2608,334,2599,326,2592,317,Q,2589,313,2576,303,Z]],label:"Tsento Gewog",shortLabel:"TT",labelPosition:[153.7,180.3],labelAlignment:[CEN,MID],nextId:"BT.PR.WC"},"BT.PR.WC":{outlines:[[M,2631,3584,Q,2622,3576,2621,3574,2620,3573,2619,3569,2591,3569,2565,3577,2539,3586,2529,3599,2527,3600,2526,3602,2496,3615,2485,3627,2478,3634,2476,3650,2474,3659,2471,3673,2471,3673,2465,3681,2459,3688,2458,3692,2456,3701,2447,3709,2424,3711,2419,3712,2413,3713,2396,3722,2389,3725,2376,3725,2359,3726,2350,3726,2345,3726,2328,3731,2311,3736,2300,3736,2284,3734,2275,3733,2259,3732,2253,3743,2252,3745,2248,3764,2243,3783,2243,3787,2243,3794,2252,3814,2260,3837,2264,3839,2280,3847,2286,3854,2292,3854,2303,3853,2311,3854,2320,3863,2325,3869,2337,3870,2350,3872,2353,3874,L,2366,3887,Q,2369,3890,2389,3890,L,2491,3890,Q,2496,3891,2501,3890,2505,3891,2511,3896,2520,3905,2548,3925,L,2584,3944,2595,3957,Q,2602,3972,2613,3965,L,2613,3964,Q,2621,3964,2623,3959,2625,3954,2643,3954,2649,3923,2654,3920,2655,3918,2675,3918,2702,3919,2716,3918,2727,3917,2731,3929,2732,3931,2738,3946,2743,3956,2743,3963,2742,3985,2750,3991,2780,4011,2783,4016,2792,4031,2829,4072,2836,4081,2853,4101,2868,4119,2876,4138,2883,4126,2893,4106,2903,4083,2913,4071,2923,4056,2942,4042,2965,4022,2978,4022,3008,4022,3011,4021,3028,4018,3042,4006,3042,3988,3041,3979,3039,3965,3026,3961,3022,3959,3020,3952,3020,3943,3019,3939,3007,3923,3008,3912,3009,3895,3004,3888,3002,3884,2985,3867,2984,3867,2964,3844,2962,3843,2952,3838,2945,3833,2943,3829,2931,3801,2897,3780,2858,3761,2845,3753,2836,3746,2818,3740,2802,3734,2797,3729,2787,3714,2781,3707,2775,3702,2770,3697,2762,3690,2760,3683,2762,3672,2749,3664,2733,3659,2729,3657,L,2685,3639,Q,2661,3630,2651,3606,2648,3600,2644,3596,Q,2637,3590,2631,3584,Z]],label:"Wangchang Gewog",shortLabel:"WC",labelPosition:[260.5,377.8],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"paro",type:"maps"}}})});