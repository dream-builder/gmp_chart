class GMPChart {

    gmp_container;

    container_height;
    container_width;

    container_padding_top = 50;
    container_padding_right = 50;
    container_padding_bottom = 80;
    container_padding_left = 50;

    x_ratio;
    y_ratio;

    //CSS class of the SVG element
    classes;

    //replace of this object
    self;

    // value for 0-24 month Girl child GMP 
    chart_data = {
        base: [1, 1.4, 1.8, 2.2, 2.5, 2.8, 3, 3.2, 3.5, 3.7, 3.9, 4, 4.2, 4.4, 4.5, 4.6, 4.8, 4.9, 5, 5.1, 5.2, 5.3, 5.4, 5.4, 5.5],
        median: [3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.5, 8.7, 8.9, 9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.4, 10.6, 10.9, 11.1, 11.3, 11.5],
        z2p: [4.2, 5.5, 6.5, 7.5, 8.1, 8.7, 9.3, 9.8, 10.2, 10.5, 10.9, 11.2, 11.5, 11.8, 12, 12.4, 12.6, 12.9, 13.2, 13.5, 13.7, 14, 14.3, 14.6, 14.8],
        z1p: [3.7, 4.7, 5.8, 6.5, 7.3, 7.8, 8.2, 8.6, 9, 9.3, 9.6, 9.9, 10.1, 10.4, 10.6, 10.9, 11.1, 11.4, 11.6, 11.8, 12.1, 12.3, 12.5, 12.8, 13],
        z1m: [2.8, 3.6, 4.5, 5.2, 5.7, 6.1, 6.5, 6.8, 7, 7.3, 7.5, 7.7, 7.9, 8.1, 8.3, 8.5, 8.7, 8.9, 9.1, 9.2, 9.4, 9.6, 9.8, 10, 10.2],
        z2m: [2.4, 3.2, 3.9, 4.5, 5, 5.4, 5.7, 6, 6.3, 6.5, 6.7, 6.9, 7, 7.2, 7.4, 7.6, 7.7, 7.9, 8.1, 8.2, 8.4, 8.6, 8.7, 8.9, 9],
        z3m: [2, 2.7, 3.4, 4, 4.4, 4.8, 5.1, 5.3, 5.6, 5.8, 5.9, 6.1, 6.3, 6.4, 6.6, 6.7, 6.7, 7, 7.2, 7.3, 7.5, 7.6, 7.8, 7.9, 8.1],
        z3p: [5, 6.3, 7.5, 8.5, 9.3, 10, 10.6, 11.1, 11.5, 12, 12.4, 12.8, 13.1, 13.5, 13.8, 14.1, 14.5, 14.8, 15.1, 15.4, 15.7, 16, 16.4, 16.7, 17],
        age: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    };

    // value for 24-60 month Girl child GMP 
    girl_24_60_chart_data = {
        age: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        base: [6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.5, 6.6, 6.7, 6.8, 6.9, 7, 7, 7.1, 7.2, 7.3, 7.4, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.9, 8, 8, 8, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.9, 9],
        z3m: [8.1, 8.2, 8.4, 8.5, 8.6, 8.8, 8.9, 9, 9.1, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1],
        z2m: [9, 9.2, 9.4, 9.5, 9.7, 9.8, 10, 10.1, 10.3, 10.4, 10.5, 10.7, 10.8, 10.9, 11.12, 11.2, 11.3, 11.5, 11.6, 11.7, 11.8, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.7, 12.8, 12.9, 13, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7],
        z1m: [10.2, 10.3, 10.5, 10.7, 10.9, 11.1, 11.2, 11.4, 11.6, 11.7, 11.9, 12, 12.2, 12.3, 12.5, 12.7, 12.8, 13, 13.1, 13.2, 13.4, 13.6, 13.7, 13.9, 14, 14.2, 14.3, 14.5, 14.6, 14.8, 14.9, 15.1, 15.2, 15.3, 15.5, 15.6, 15.8],
        median: [11.5, 11.7, 11.9, 12.1, 12.3, 12.5, 12.7, 12.9, 13.1, 13.3, 13.5, 13.7, 13.9, 14, 14.2, 14.4, 14.6, 14.8, 15, 15.2, 15.3, 15.5, 15.7, 15.9, 16.1, 16.3, 16.4, 16.6, 16.8, 17, 17.2, 17.3, 17.5, 17.8, 17.9, 18, 18.2],
        z1p: [13, 13.3, 13.5, 13.7, 14, 14.2, 14.4, 14.7, 14.8, 15.1, 15.4, 15.6, 15.8, 16, 16.3, 16.5, 16.7, 16.8, 17.2, 17.4, 17.6, 17.9, 18, 18.1, 18.3, 18.5, 19, 19.2, 19.4, 19.8, 19.9, 20.1, 20.3, 20.6, 20.8, 21, 21.2],
        z2p: [14.8, 15.1, 15.4, 15.7, 16, 16.2, 16.5, 16.9, 17.1, 17.3, 17.6, 17.9, 18.1, 18.4, 18.7, 19, 19.2, 19.5, 19.8, 20.1, 20.4, 20.7, 20.9, 21.2, 21.5, 21.8, 22.1, 22.4, 22.6, 22.9, 23.2, 23.5, 23.8, 24.1, 24.4, 24.6, 24.9],
        z3p: [17, 17.3, 17.7, 18, 18.3, 18.7, 19, 19.3, 19.7, 20, 20.3, 20.6, 20.9, 21.3, 21.6, 22, 22.3, 22.7, 23, 23.4, 23.7, 24.1, 24.5, 24.8, 25.1, 25.5, 25.9, 26.3, 26.6, 27, 27.4, 27.7, 28.1, 28.5, 28.8, 29.2, 29.5]
    };

    girl_0_60_chart_data = {

        base: [1, 1.4, 1.8, 2.2, 2.5, 2.8, 3, 3.2, 3.5, 3.7, 3.9, 4, 4.2, 4.4, 4.5, 4.6, 4.8, 4.9, 5, 5.1, 5.2, 5.3, 5.4, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 6.5, 6.6, 6.7, 6.8, 6.9, 7, 7, 7.1, 7.2, 7.3, 7.4, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.9, 8, 8, 8, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.9, 9],
        median: [3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.5, 8.7, 8.9, 9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.4, 10.6, 10.9, 11.1, 11.3, 11.5, 11.7, 11.9, 12.1, 12.3, 12.5, 12.7, 12.9, 13.1, 13.3, 13.5, 13.7, 13.9, 14, 14.2, 14.4, 14.6, 14.8, 15, 15.2, 15.3, 15.5, 15.7, 15.9, 16.1, 16.3, 16.4, 16.6, 16.8, 17, 17.2, 17.3, 17.5, 17.8, 17.9, 18, 18.2],
        z2p: [4.2, 5.5, 6.5, 7.5, 8.1, 8.7, 9.3, 9.8, 10.2, 10.5, 10.9, 11.2, 11.5, 11.8, 12, 12.4, 12.6, 12.9, 13.2, 13.5, 13.7, 14, 14.3, 14.6, 14.8, 15.1, 15.4, 15.7, 16, 16.2, 16.5, 16.9, 17.1, 17.3, 17.6, 17.9, 18.1, 18.4, 18.7, 19, 19.2, 19.5, 19.8, 20.1, 20.4, 20.7, 20.9, 21.2, 21.5, 21.8, 22.1, 22.4, 22.6, 22.9, 23.2, 23.5, 23.8, 24.1, 24.4, 24.6, 24.9],
        z1p: [3.7, 4.7, 5.8, 6.5, 7.3, 7.8, 8.2, 8.6, 9, 9.3, 9.6, 9.9, 10.1, 10.4, 10.6, 10.9, 11.1, 11.4, 11.6, 11.8, 12.1, 12.3, 12.5, 12.8, 13, 13.3, 13.5, 13.7, 14, 14.2, 14.4, 14.7, 14.8, 15.1, 15.4, 15.6, 15.8, 16, 16.3, 16.5, 16.7, 16.8, 17.2, 17.4, 17.6, 17.9, 18, 18.1, 18.3, 18.5, 19, 19.2, 19.4, 19.8, 19.9, 20.1, 20.3, 20.6, 20.8, 21, 21.2],
        z1m: [2.8, 3.6, 4.5, 5.2, 5.7, 6.1, 6.5, 6.8, 7, 7.3, 7.5, 7.7, 7.9, 8.1, 8.3, 8.5, 8.7, 8.9, 9.1, 9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.3, 10.5, 10.7, 10.9, 11.1, 11.2, 11.4, 11.6, 11.7, 11.9, 12, 12.2, 12.3, 12.5, 12.7, 12.8, 13, 13.1, 13.2, 13.4, 13.6, 13.7, 13.9, 14, 14.2, 14.3, 14.5, 14.6, 14.8, 14.9, 15.1, 15.2, 15.3, 15.5, 15.6, 15.8],
        z2m: [2.4, 3.2, 3.9, 4.5, 5, 5.4, 5.7, 6, 6.3, 6.5, 6.7, 6.9, 7, 7.2, 7.4, 7.6, 7.7, 7.9, 8.1, 8.2, 8.4, 8.6, 8.7, 8.9, 9, 9.2, 9.4, 9.5, 9.7, 9.8, 10, 10.1, 10.3, 10.4, 10.5, 10.7, 10.8, 10.9, 11.12, 11.2, 11.3, 11.5, 11.6, 11.7, 11.8, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.7, 12.8, 12.9, 13, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7],
        z3m: [2, 2.7, 3.4, 4, 4.4, 4.8, 5.1, 5.3, 5.6, 5.8, 5.9, 6.1, 6.3, 6.4, 6.6, 6.7, 6.7, 7, 7.2, 7.3, 7.5, 7.6, 7.8, 7.9, 8.1, 8.2, 8.4, 8.5, 8.6, 8.8, 8.9, 9, 9.1, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1],
        z3p: [5, 6.3, 7.5, 8.5, 9.3, 10, 10.6, 11.1, 11.5, 12, 12.4, 12.8, 13.1, 13.5, 13.8, 14.1, 14.5, 14.8, 15.1, 15.4, 15.7, 16, 16.4, 16.7, 17, 17.3, 17.7, 18, 18.3, 18.7, 19, 19.3, 19.7, 20, 20.3, 20.6, 20.9, 21.3, 21.6, 22, 22.3, 22.7, 23, 23.4, 23.7, 24.1, 24.5, 24.8, 25.1, 25.5, 25.9, 26.3, 26.6, 27, 27.4, 27.7, 28.1, 28.5, 28.8, 29.2, 29.5],
        age: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]

    };

    //Value for 0-24 months girl height
    girl_height_0_24_chart_data = {
        age: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        base: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
        z3m: [44, 47, 51, 53.5, 55.5, 57.5, 58.5, 60, 61.5, 62.5, 64, 65.1, 66, 67.5, 68.5, 69.5, 70.5, 71, 72, 72.5, 73.5, 74.5, 75.5, 76.5, 77],
        z2m: [45.5, 49.5, 53, 55.5, 57.5, 59.5, 61.5, 62.5, 64, 65.5, 66.5, 67.5, 68.5, 70, 71, 72, 73, 74, 75.5, 76.5, 77.5, 78.5, 79.5, 80, 80],
        z1m: [47, 51.5, 55, 57.5, 59.5, 61.5, 63.5, 65, 66.5, 68, 69, 70.5, 71.5, 72.5, 73.5, 74.5, 75.1, 76.1, 77.1, 79.5, 80.5, 81.5, 82.5, 83.5, 83.5],
        median: [49.5, 53.5, 57, 59.5, 62, 64, 65.5, 67, 68.5, 70.5, 71.5, 72.5, 74, 75.5, 76.5, 77.5, 78.5, 79.5, 80.5, 81.5, 82.5, 83, 83.5, 84.5, 85.5, 86.5],
        z1p: [51, 55.5, 59.5, 62, 64.5, 66, 68, 69.5, 71, 72.5, 73.5, 75.5, 76.5, 77.5, 79, 80.5, 81.5, 83, 83.5, 84.5, 86.5, 87.5, 88.5, 88.5, 89],
        z2p: [53, 56.5, 61, 64, 66.5, 67.5, 70.5, 71.5, 73.5, 75, 76.5, 77.5, 79, 80.5, 81.5, 82, 84.5, 85.5, 86.5, 87.5, 89.5, 90.5, 92, 92.5, 93.5],
        z3p: [55, 59.5, 63, 66.5, 68, 70.5, 72, 74, 75.5, 77.5, 78, 80, 81, 83, 84, 85, 87, 88, 89, 90.5, 91.5, 92.5, 93, 95, 96.5]
    };

    //Value for 24-60 months girl height
    girl_height_24_60_chart_data = {
        age: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        base: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        z3m: [76, 77, 78, 78.5, 79, 79.5, 80.5, 81, 81.5, 82, 82.5, 83.5, 83.5, 84.5, 84.5, 86, 86, 86.5, 86.5, 87, 87, 88, 89, 89.5, 90, 90.5, 91, 91.5, 92, 92.5, 93, 93, 93.5, 93.5, 94.5, 95, 95.5],
        z2m: [79, 80, 81, 81.5, 82.5, 82.5, 83.5, 84.5, 84.5, 85.5, 86.5, 86.5, 87.5, 88, 89, 90, 90, 90.5, 91, 91.5, 92, 92.5, 93, 94, 94.5, 94.5, 95, 95, 96, 96, 97, 97, 98.5, 98.5, 99, 100, 100],
        z1m: [83, 84, 84.5, 84.5, 86, 87, 87.5, 87.5, 89, 89.5, 89.5, 91, 91.5, 92, 93, 93.5, 94, 94.5, 95, 96, 97, 97, 97.5, 97.5, 98.5, 99, 99.5, 100, 100.5, 101, 102, 103, 103, 104, 104, 104.5, 104.5],
        median: [86, 87, 88, 88.5, 89, 90, 90.5, 90.5, 92, 93.5, 93.5, 94, 95, 96, 97, 97.5, 98.5, 99, 99.5, 100, 100.5, 101, 101.5, 102, 102, 103, 104, 104.5, 105, 105.5, 106, 107, 107, 108, 108, 109, 109.5],
        z1p: [89, 90, 91, 92, 93, 93.5, 94, 95, 96, 96.5, 97, 98, 99.5, 100, 101, 102, 102.5, 103, 103, 105, 106, 106.5, 107, 107, 108, 108.5, 109, 109.5, 110, 111, 111.5, 112.5, 113, 113.5, 114, 114.5, 114.5],
        z2p: [92.5, 93.5, 94.5, 95, 96, 97, 97.5, 98, 99, 100.5, 101.5, 102, 102.5, 103, 104, 105, 105.5, 106, 107, 108, 109, 109.9, 110, 111, 111.5, 112, 113, 114, 115, 115.5, 116, 117, 118, 119, 119, 119, 119.5],
        z3p: [95, 96, 97, 98, 99, 100, 101, 102, 103, 103, 104, 105, 106, 107, 108, 108, 109, 110, 111, 112, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 120, 121, 121, 122, 123, 123.5]
    };


    // value for 0-24 month boy weight chart 
    boy_weight_0_24_chart_data = {
        age: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        base: [1, 1.6, 2.2, 2.6, 3, 3.3, 3.6, 3.8, 4, 4.3, 4.6, 4.7, 4.8, 5, 5.1, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.9, 6, 6],
        z3m: [2.1, 2.9, 3.8, 4.4, 4.9, 5.3, 5.7, 5.9, 6.2, 6.4, 6.6, 6.8, 6.9, 7.1, 7.2, 7.4, 7.5, 7.7, 7.8, 8, 8.1, 8.2, 8.4, 8.5, 8.6],
        z2m: [2.5, 3.4, 4.3, 5, 5.6, 6, 6.4, 6.7, 6.9, 7.1, 7.4, 7.6, 7.7, 7.9, 8.1, 8.3, 8.4, 8.6, 8.8, 8.9, 9.1, 9.2, 9.4, 9.5, 9.7],
        z1m: [2.9, 3.9, 4.9, 5.7, 6.2, 6.7, 7.1, 7.4, 7.7, 8, 8.2, 8.4, 8.6, 8.8, 9, 9.2, 9.4, 9.6, 9.8, 10, 10.1, 10.3, 10.5, 10.7, 10.8],
        median: [3.3, 4.5, 5.6, 6.4, 7, 7.5, 7.9, 8.3, 8.6, 8.9, 9.2, 9.4, 9.6, 9.9, 10.1, 10.3, 10.5, 10.7, 10.9, 11.1, 11.3, 11.5, 11.8, 12, 12.2],
        z1p: [3.9, 5.1, 6.3, 7.2, 7.8, 8.4, 8.8, 9.2, 9.6, 9.9, 10.2, 10.5, 10.8, 11, 11.3, 11.5, 11.7, 12, 12.2, 12.5, 12.7, 12.9, 13.2, 13.4, 13.6],
        z2p: [4.4, 5.8, 7.1, 8, 8.7, 9.3, 9.8, 10.3, 10.7, 11, 11.4, 11.7, 12, 12.3, 12.6, 12.8, 13.1, 13.4, 13.7, 13.9, 14.2, 14.5, 14.7, 15, 15.3],
        z3p: [5, 6.6, 8, 9, 9.7, 10.4, 10.9, 11.4, 11.9, 12.3, 12.7, 13, 13.3, 13.7, 14, 14.3, 14.6, 14.9, 15.3, 15.6, 15.9, 16.2, 16.5, 16.8, 17.1]
    };

    // value for 24-60 month boy weight chart 
    boy_weight_24_60_chart_data = {
        age: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        base: [6,6.1,	6.2,	6.3,	6.4,	6.5,6.4,	6.5,	6.6,	6.7,	6.8,	6.9,	6.9,	7,	7.1,	7.1,	7.2,	7.2,	7.5,	7.6,	7.8,	7.9,	7.9,	8,	8.1,		8.1,		8.1,	8.2,	8.3,	8.4,	8.5,	8.6,	8.7,	8.8,	8.9,	9,	9.1,
        ],
        z3m: [8.6, 8.8, 8.9, 9, 9.1, 9.2, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4],
        z2m: [9.7, 9.8, 10, 10.1, 10.2, 10.4, 10.5, 10.7, 10.8, 10.9, 11, 11.2, 11.3, 11.4, 11.5, 11.6, 11.8, 11.9, 12, 12.1, 12.2, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 14, 14.1],
        z1m: [10.8, 11, 11.2, 11.3, 11.5, 11.7, 11.8, 12, 12.1, 12.3, 12.4, 12.6, 12.7, 12.9, 13, 13.1, 13.3, 13.4, 13.6, 13.7, 13.8, 14, 14.1, 14.3, 14.4, 14.5, 14.7, 14.8, 15, 15.1, 15.2, 15.4, 15.5, 15.6, 15.8, 15.9, 16],
        median: [12.2, 12.4, 12.5, 12.7, 12.9, 13.1, 13.3, 13.5, 13.7, 13.8, 14, 14.2, 14.3, 14.5, 14.7, 14.8, 15, 15.2, 15.3, 15.5, 15.7, 15.8, 16, 16.2, 16.3, 16.5, 16.7, 16.8, 17, 17.2, 17.3, 17.5, 17.7, 17.8, 18, 18.2, 18.3],
        z1p: [13.6, 13.9, 14.1, 14.3, 14.5, 14.8, 15, 15.2, 15.4, 15.6, 15.8, 16, 16.2, 16.4, 16.6, 16.8, 17, 17.2, 17.4, 17.6, 17.8, 18, 18.2, 18.4, 18.6, 18.8, 19, 19.2, 19.4, 19.6, 19.8, 20, 20.2, 20.4, 20.6, 20.8, 21],
        z2p: [15.3, 15.5, 15.8, 16.1, 16.3, 16.6, 16.9, 17.1, 17.4, 17.6, 17.8, 18.1, 18.3, 18.6, 18.8, 19, 19.3, 19.5, 19.7, 20, 20.2, 20.5, 20.7, 20.9, 21.2, 21.4, 21.7, 21.9, 22.2, 22.4, 22.7, 22.9, 23.2, 23.4, 23.7, 23.9, 24.2],
        z3p: [17.1, 17.5, 17.8, 18.1, 18.4, 18.7, 19, 19.3, 19.6, 19.9, 20.2, 20.4, 20.7, 21, 21.3, 21.6, 21.9, 22.1, 22.4, 22.7, 23, 23.3, 23.6, 23.9, 24.2, 24.5, 24.8, 25.1, 25.4, 25.7, 26, 26.3, 26.6, 26.9, 27.2, 27.6, 27.9]
    };

     //Value for 0-24 months boy height
     boy_height_0_24_chart_data = {
        age: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        base: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
        z3m: [44.2,48.9,52.4,55.3,57.6,59.6,61.2,62.7,64,65.2,66.4,67.6,68.6,69.6,70.6,71.6,72.5,73.3,74.2,75,75.8,76.5,77.2,78,78.7],
        z2m: [46.1,50.8,54.4,57.3,59.7,61.7,63.3,64.8,66.2,67.5,68.7,69.9,71,72.1,73.1,74.1,75,76,76.9,77.7,78.6,79.4,80.2,81,81.7],
        z1m: [48,52.8,56.4,59.4,61.8,63.8,65.5,67,68.4,69.7,71,72.2,73.4,74.5,75.6,76.6,77.6,78.6,79.6,80.5,81.4,82.3,83.1,83.9,84.8],
        median: [49.9,54.7,58.4,61.4,63.9,65.9,67.6,69.2,70.6,72,73.3,74.5,75.7,76.9,78,79.1,80.2,81.2,82.3,83.2,84.2,85.1,86,86.9,87.8],
        z1p: [51.8,56.7,60.4,63.5,66,68,69.8,71.3,72.8,74.2,75.6,76.9,78.1,79.3,80.5,81.7,82.8,83.9,85,86,87,88,89,89.9,90.9],
        z2p: [53.7,58.6,62.4,65.5,68,70.1,71.9,73.5,75,76.5,77.9,79.2,80.5,81.8,83,84.2,85.4,86.5,87.7,88.8,89.8,90.9,91.9,92.9,93.9],
        z3p: [55.6,60.6,64.4,67.6,70.1,72.2,74,75.7,77.2,78.7,80.1,81.5,82.9,84.2,85.5,86.7,88,89.2,90.4,91.5,92.6,93.8,94.9,95.9,97]
    };

    //Value for 24-60 months girl height
    boy_height_24_60_chart_data = {
        age: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        base: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        z3m: [78,78.6,79.3,79.9,80.5,81.1,81.7,82.3,82.8,83.4,83.9,84.4,85,85.5,86,86.5,87,87.5,88,88.4,88.9,89.4,89.8,90.3,90.7,91.2,91.6,92.1,92.5,93,93.4,93.9,94.3,94.7,95.2,95.6,96.1],
        z2m: [81,81.7,82.5,83.1,83.8,84.5,85.1,85.7,86.4,86.9,87.5,88.1,88.7,89.2,89.8,90.3,90.9,91.4,91.9,92.4,93,93.5,94,94.4,94.9,95.4,95.9,96.4,96.9,97.4,97.8,98.3,98.8,99.3,99.7,100.2,100.7],
        z1m: [84.1,84.9,85.6,86.4,87.1,87.8,88.5,89.2,89.9,90.5,91.1,91.8,92.4,93,93.6,94.2,94.7,95.3,95.9,96.4,97,97.5,98.1,98.6,99.1,99.7,100.2,100.7,101.2,101.7,102.3,102.8,103.3,103.8,104.3,104.8,105.3],
        median: [87.1,88,88.8,89.6,90.4,91.2,91.9,92.7,93.4,94.1,94.8,95.4,96.1,96.7,97.4,98,98.6,99.2,99.9,100.4,101,101.6,102.2,102.8,103.3,103.9,104.4,105,105.6,106.1,106.7,107.2,107.8,108.3,108.9,109.4,110],
        z1p: [90.2,91.1,92,92.9,93.7,94.5,95.3,96.1,96.9,97.6,98.4,99.1,99.8,100.5,101.2,101.8,102.5,103.2,103.8,104.5,105.1,105.7,106.3,106.9,107.5,108.1,108.7,109.3,109.9,110.5,111.1,111.7,112.3,112.8,113.4,114,114.6],
        z2p: [93.2,94.2,95.2,96.1,97,97.9,98.7,99.6,100.4,101.2,102,102.7,103.5,104.2,105,105.7,106.4,107.1,107.8,108.5,109.1,109.8,110.4,111.1,111.7,112.4,113,113.6,114.2,114.9,115.5,116.1,116.7,117.4,118,118.6,119.2],
        z3p: [96.3,97.3,98.3,99.3,100.3,101.2,102.1,103,103.9,104.8,105.6,106.4,107.2,108,108.8,109.5,110.3,111,111.7,112.5,113.2,113.9,114.6,115.2,115.9,116.6,117.3,117.9,118.6,119.2,119.9,120.6,121.2,121.9,122.6,123.2,123.9]
    };


    generate_points_of_axis_json(x_array, y_array) {
        var points_json = [];
        var y_index = 0;
        x_array.forEach(function (item) {
            points_json.push({ x: item, y: y_array[y_index++] });
        })
        return points_json;
    }

    constructor(conatiner) {
        this.self = this;

        this.gmp_container = document.getElementById(conatiner);

        this.container_height = this.gmp_container.clientHeight;
        this.container_width = this.gmp_container.clientWidth;

        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 24;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 100;
    }

    //Calculte x and y axis value adding padding and ratio
    get_x(x) {
        return this.container_padding_left + (x * this.x_ratio);
    }

    get_y(y) {

        //console.log(this.container_height);
        return this.container_height - this.container_padding_bottom - (this.y_ratio * y);
    }

    draw_grid(x_start, y_start, x_end, y_end, grid_color, x_num_start = 0, y_num_start = 0) {
        for (let i = x_start; i <= x_end; i++) {
            this.draw_poly_line([{ x: i, y: y_start }, { x: i, y: y_end }], .3, grid_color);
            this.draw_text(this.get_x(i) - 5, this.get_y(y_start) + 20, this.bangla_num_converter(x_num_start++), 'gray', 'bangla-text', 'rotate(-90 ' + (this.get_x(i) + 5) + ',' + (this.get_y(y_start) + 20) + ')');
        }

        var steps = 5;
        var steps_count = 0;
        for (let i = y_start; i <= y_end; i++) {

            if (steps_count == 0 || steps_count == steps) {
                this.draw_poly_line([{ x: x_start, y: i }, { x: x_end + .2, y: i }], .7, grid_color);
                //this.draw_text(this.get_x(x_start)-30, this.get_y(i) + 5, this.bangla_num_converter(y_num_start++),'gray', 'bangla-text');
                this.draw_text(this.get_x(x_end) + 10, this.get_y(i) + 5, this.bangla_num_converter(y_num_start++), 'gray', 'bangla-text');
                steps_count = 1;
            }
            else {
                this.draw_poly_line([{ x: x_start, y: i }, { x: x_end, y: i }], .3, grid_color);
                y_num_start++;
                steps_count++;
            }



        }
    }

    fill_poly(self, range1, range2, range3, line_color, fill_color, fill_opacity = 1) {
        //draw colse path and fill 
        var points = self.generate_points_of_axis_json(range1, range2);

        //console.log(range3);
        self.generate_points_of_axis_json(range1, range3).reverse().forEach(function (item) {
            points.push(item);
        });

        this.draw_poly_line(points, 1, line_color, fill_color, fill_opacity);
    }

    //Draw Poly line
    draw_poly_line(points, line_width = .5, line_color = 'black', fill_color = "none", fill_opacity = "1") {

        let self = this;
        let poly_points = "";

        points.forEach(function (item) {
            //console.log(self.get_x(item.x).toString());
            poly_points += self.get_x(item.x).toString() + "," + self.get_y(item.y).toString() + " ";
        });


        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polyline'); //Create a path in SVG's namespace
        newElement.setAttribute("points", poly_points); //Set path's data
        newElement.style.stroke = line_color; //Set stroke colour;
        newElement.style.strokeWidth = line_width; //Set stroke width
        newElement.style.fill = fill_color;
        //newElement.style.fillOpacity =fill_opacity;
        //svg.appendChild(newElement);
        self.gmp_container.appendChild(newElement);

        //console.log(poly_points);

    }

    //draw text
    draw_text(x, y, text, text_color = 'black', classes = "", transform = '') {
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'text'); //Create a path in SVG's namespace
        newElement.setAttributeNS(null, "x", x);
        newElement.setAttributeNS(null, "y", y);
        newElement.setAttribute("class", classes);
        newElement.setAttribute("transform", transform);
        newElement.innerHTML = text;
        newElement.style.fill = text_color;
        //svg.appendChild(newElement);
        this.gmp_container.appendChild(newElement);
    }

    //Draw line
    draw_line(points, line_width = .5, line_color = 'black', fill_color = "none") {

        let self = this;
        let poly_points = "";
        points.forEach(function (item) {
            //console.log(self.get_x(item.x).toString());
            poly_points += self.get_x(item.x).toString() + "," + self.get_y(item.y).toString() + " ";
        });



        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polyline'); //Create a path in SVG's namespace
        newElement.setAttribute("points", poly_points); //Set path's data
        newElement.style.stroke = line_color; //Set stroke colour;
        newElement.style.strokeWidth = line_width; //Set stroke width
        newElement.style.fill = fill_color;
        //svg.appendChild(newElement);
        self.gmp_container.appendChild(newElement);

        //console.log(poly_points);

    }

    draw_circle(x, y, r, border_width, border_color, fill_color, classes = "") {

        let self = this;

        let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
        newElement.setAttribute("cx", x); //Set path's data
        newElement.setAttribute("cy", y); //Set path's data
        newElement.setAttribute("r", r); //Set path's data
        newElement.setAttribute("class", classes);
        newElement.style.stroke = border_color; //Set stroke colour;
        newElement.style.strokeWidth = border_width; //Set stroke width
        newElement.style.fill = fill_color;
        //svg.appendChild(newElement);
        self.gmp_container.appendChild(newElement);

    }

    draw_rect(x, y, w, h, border_color = 'black', border_width = 1, fill_color = '') {
        let self = this;
        var svgns = "http://www.w3.org/2000/svg";
        var rect = document.createElementNS(svgns, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('height', h);
        rect.setAttribute('width', w);
        rect.setAttribute('fill', fill_color);
        rect.setAttribute('stroke', border_color);
        //rect.setAttribute('stroke', border_color);
        self.gmp_container.appendChild(rect);





    }

    //convert to unicode bangla
    bangla_num_converter(decimalNumber) {

        let bangla_num = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

        // Convert the decimal number to a string
        const decimalString = Math.abs(decimalNumber).toString();

        // Use the split method to create an array of individual characters (including the decimal point)
        const digitsArray = decimalString.split('').map(char => (char === '.' ? '.' : Number(char)));

        let b_num = "";

        digitsArray.forEach(function (item) {

            if (item != ".")
                b_num += bangla_num[item];
            else
                b_num += item;

        });

        return b_num;

    }

    draw_chart(data) {

    }

    draw_chart_gmp_base_girls_24_60() {

        this.draw_gmp_base_girls_24_60();
        // this.draw_poly_line(data,2,"red","none");
        //console.log(this.classes);

    }

    base_pont_adjust(base_points, x_adjust = 0, y_adjust = 0) {

        var base_point = [];
        base_points.forEach(function (item) {
            //console.log(item.x);
            base_point.push({ x: item.x - x_adjust, y: item.y - y_adjust });
        })
        return base_point;
    }

    point_adjust(points, adjust) {

        var new_points = [];
        points.forEach(function (item) {
            new_points.push(item - adjust);
        });

        return new_points;

    }

    //Legend
    legend() {

        var x = 100;

        this.draw_rect(x, this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, 'rgb(247, 168, 96)');
        this.draw_text((x + 20), this.container_height - 10, 'মারাত্মক খর্ব', '', 'legend-text');

        this.draw_rect((x + 110), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#d5bc3a');
        this.draw_text((x + 130), this.container_height - 10, 'মাঝারি খর্ব', '', 'legend-text');

        this.draw_rect((x + 210), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#e4de69');
        this.draw_text((x + 230), this.container_height - 10, 'স্বল্প খর্ব', '', 'legend-text');

        this.draw_rect((x + 300), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#9fd193');
        this.draw_text((x + 320), this.container_height - 10, 'স্বাভাবিক', '', 'legend-text');

        this.draw_rect((x + 400), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#FFF');
        this.draw_text((x + 420), this.container_height - 10, 'বেশি লম্বা', '', 'legend-text');

    }

    legend_w() {

        var x = 100;

        this.draw_rect(x, this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, 'rgb(247, 168, 96)');
        this.draw_text((x + 20), this.container_height - 10, 'মারাত্মক অপুষ্টি', '', 'legend-text');

        this.draw_rect((x + 110), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#d5bc3a');
        this.draw_text((x + 130), this.container_height - 10, 'মাঝারি অপুষ্টি', '', 'legend-text');

        this.draw_rect((x + 210), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#e4de69');
        this.draw_text((x + 230), this.container_height - 10, 'স্বল্প অপুষ্টি', '', 'legend-text');

        this.draw_rect((x + 300), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#9fd193');
        this.draw_text((x + 320), this.container_height - 10, 'স্বাভাবিক', '', 'legend-text');

        this.draw_rect((x + 400), this.container_height - 23, 15, 15, 'rgb(0,0,0)', 1, '#FFF');
        this.draw_text((x + 420), this.container_height - 10, 'বেশি ওজন', '', 'legend-text');

    }

    chart_title(title = '', x = 10, y = 10) {
        this.draw_text(x, y, title, '', 'title-text');
    }

    legend_text(text = '', x = 10, y = 10, rotate = 0) {
        this.draw_text(x, y, text, '', 'chart-text', "rotate(" + rotate + "  " + x + "," + y + ")");
    }

    //Girl weight gain chart 0-24 Months   
    girl_weight_gain_chart_0_24(data = '') {

        let self = this;

        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 24;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 17;

        //fill -3z
        this.fill_poly(this, this.chart_data.age, this.chart_data.base, this.chart_data.z3m, 'none', '#F4A65F', 1);

        //fill -3z to -2z
        this.fill_poly(this, this.chart_data.age, this.chart_data.z2m, this.chart_data.z3m, 'none', '#F0CF23', 1);

        //fill -2z to -z1
        this.fill_poly(this, this.chart_data.age, this.chart_data.z2m, this.chart_data.z1m, 'none', '#F4ED64', 1);

        //fill -1z to +2Z
        this.fill_poly(this, this.chart_data.age, this.chart_data.z1m, this.chart_data.z2p, 'none', '#9FD193', 1);

        this.draw_grid(0, 0, 24, 17, '#858484');

        // Draw Base line
        var base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.base);
        this.draw_poly_line(base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.z3m);
        this.draw_poly_line(base_points, 1, 'black');

        //Draw median
        base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.median);
        this.draw_poly_line(base_points, 1, 'black');

        //Draw +Z2
        base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.z2p);
        this.draw_poly_line(base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.z1p);
        this.draw_poly_line(base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.z1m);
        this.draw_poly_line(base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.z3p);
        this.draw_poly_line(base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(this.chart_data.age, this.chart_data.z2m);
        this.draw_poly_line(base_points, 1, 'black');

        //draw circle points
        this.chart_data.age.forEach(function (item) {
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.base[item]), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.median[item]), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.z1m[item]), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.z1p[item]), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.z2m[item]), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.z2p[item]), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.z3m[item]), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(self.chart_data.z3p[item]), 2, 1, 'black', '', 'base-point');
        });

        //Draw final chart
        this.draw_poly_line(data, 2, "red", "none");
        //Draw Legend
        this.legend_w();

        //draw chart title
        this.chart_title('মেয়ে শিশুর ওজন বৃদ্ধির চার্ট (০ - ২৪ মাস)', 180, 30);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('ওজন বৃদ্ধি (কেজি)', 30, 260, -90);
    }

    //GMP AGE weight for girls age 24-60 Months
    girl_weight_gain_chart_24_60(data = '') {

        let self = this;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 36;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 23;

        //fill -3z
        this.fill_poly(this, this.point_adjust(this.girl_24_60_chart_data.age, 24), this.point_adjust(this.girl_24_60_chart_data.base, 6), this.point_adjust(this.girl_24_60_chart_data.z3m, 6), 'none', '#F4A65F', 1);

        //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(this.girl_24_60_chart_data.age, 24), this.point_adjust(this.girl_24_60_chart_data.z2m, 6), this.point_adjust(this.girl_24_60_chart_data.z3m, 6), 'none', '#F0CF23', 1);

        //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(this.girl_24_60_chart_data.age, 24), this.point_adjust(this.girl_24_60_chart_data.z2m, 6), this.point_adjust(this.girl_24_60_chart_data.z1m, 6), 'none', '#F4ED64', 1);

        //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(this.girl_24_60_chart_data.age, 24), this.point_adjust(this.girl_24_60_chart_data.z1m, 6), this.point_adjust(this.girl_24_60_chart_data.z2p, 6), 'none', '#9FD193', 1);


        this.draw_grid(0, 0, 36, 30, '#858484', 24, 6);


        // Draw Base line
        var base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(this.girl_24_60_chart_data.age, this.girl_24_60_chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, 24, 6);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        this.girl_24_60_chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.base[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.median[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.z1m[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.z1p[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.z2m[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.z2p[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.z3m[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(self.girl_24_60_chart_data.z3p[adjust_index] - 6), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, 24, 6), 2, "red", "none");

        //Draw Legend
        this.legend_w();

        //draw chart title
        this.chart_title('মেয়ে শিশুর ওজন বৃদ্ধির চার্ট (২৪ - ৬০ মাস)', 180, 30);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('ওজন বৃদ্ধি (কেজি)', 30, 260, -90);
    }

    //Girl Height gain chart 0-24 Months
    girl_height_gain_chart_0_24(data = '') {

        let self = this;


        var chart_data = this.girl_height_0_24_chart_data;

        var x_adjust = 0;
        var y_adjust = 40;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 24;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 60;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);


        this.draw_grid(0, 0, 24, 60, '#858484', 0, 40);


        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });

        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, 0, 40), 2, "red", "none");

        //Draw Legend
        this.legend();

        //draw chart title
        this.chart_title('মেয়ে শিশুর উচ্চতা বৃদ্ধির চার্ট (০ - ২৪ মাস)', 180, 30);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('উচ্চতা বৃদ্ধি (সে. মি.)', 30, 260, -90);
    }

    //Girl Height gain chart 24-60 Months
    girl_height_gain_chart_24_60(data = '') {

        let self = this;


        var chart_data = this.girl_height_24_60_chart_data;

        var x_adjust = 0;
        var y_adjust = 60;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 36;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 60;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);

        this.draw_grid(0, 0, 36, 130, '#858484', 24, 60);



        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, 0, 40), 2, "red", "none");

        //Draw Legend
        this.legend();

        //draw chart title
        this.chart_title('মেয়ে শিশুর উচ্চতা বৃদ্ধির চার্ট (২৪ - ৬০ মাস)', 150, 50);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('উচ্চতা বৃদ্ধি (সে. মি.)', 30, 260, -90);

    }

    girl_height_gain_chart_0_60(data = '') {

        let self = this;


        var chart_data = this.girl_0_60_chart_data;

        var x_adjust = 0;
        var y_adjust = 0;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 60;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 30;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);


        this.draw_grid(0, 0, 60, 40, '#858484', 0, 0);


        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, 0, 0), 2, "red", "none");

        //Draw Legend
        this.legend();

        //draw chart title
        this.chart_title('মেয়ে শিশুর ওজন বৃদ্ধির চার্ট (০ - ৬0 মাস)', 180, 30);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('ওজন বৃদ্ধি (কে. জি.)', 30, 260, -90);



    }

    //Boy Height gain chart 0-24 Months
    boy_weight_gain_chart_0_24(data = '') {

        let self = this;


        var chart_data = this.boy_weight_0_24_chart_data;

        var x_adjust = 0;
        var y_adjust = 0;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 24;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 17;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, 0), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);


        this.draw_grid(0, 0, 24, 25, '#858484', 0, 0);


        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, 0, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, 0, 0), 2, "red", "none");

        //Draw Legend
        this.legend_w();

        //draw chart title
        this.chart_title('ছেলে শিশুর ওজন বৃদ্ধির চার্ট (০ - ২৪ মাস)', 180, 30);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('ওজন বৃদ্ধি (কে. জি.)', 30, 260, -90);
    }

    //Boy Height gain chart 0-24 Months
    boy_weight_gain_chart_24_60(data = '') {

        let self = this;


        var chart_data = this.boy_weight_24_60_chart_data;

        var x_adjust = 24;
        var y_adjust = 6;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 36;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 30;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);


        this.draw_grid(0, 0, 36, 30, '#858484', 24, 6);


        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, x_adjust, y_adjust), 2, "red", "none");

        //Draw Legend
        this.legend_w();

        //draw chart title
        this.chart_title('ছেলে শিশুর ওজন বৃদ্ধির চার্ট (২৪ - ৬০ মাস)', 180, 30);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('ওজন বৃদ্ধি (কে. জি.)', 30, 260, -90);



    }


     //Boy Height gain chart 0-24 Months
     boy_height_gain_chart_0_24(data = '') {

        let self = this;


        var chart_data = this.boy_height_0_24_chart_data;

        var x_adjust = 0;
        var y_adjust = 40;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 24;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 60;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);

        this.draw_grid(0, 0, 24, 130, '#858484', x_adjust, y_adjust);



        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, x_adjust, y_adjust), 2, "red", "none");

        //Draw Legend
        this.legend();

        //draw chart title
        this.chart_title('ছেলে শিশুর উচ্চতা বৃদ্ধির চার্ট (০ - ২৪ মাস)', 150, 50);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('উচ্চতা বৃদ্ধি (সে. মি.)', 30, 260, -90);

    }

     //Boy Height gain chart 24 - 60 Months
     boy_height_gain_chart_0_24(data = '') {

        let self = this;


        var chart_data = this.boy_height_0_24_chart_data;

        var x_adjust = 0;
        var y_adjust = 40;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 24;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 60;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, x_adjust), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);

        this.draw_grid(0, 0, 24, 130, '#858484', x_adjust, y_adjust);



        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, x_adjust, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - x_adjust), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, x_adjust, y_adjust), 2, "red", "none");

        //Draw Legend
        this.legend();

        //draw chart title
        this.chart_title('ছেলে শিশুর উচ্চতা বৃদ্ধির চার্ট (০ - ২৪ মাস)', 150, 50);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('উচ্চতা বৃদ্ধি (সে. মি.)', 30, 260, -90);

    }

    //Boy Height gain chart 24-60 Months
    boy_height_gain_chart_24_60(data = '') {

        let self = this;


        var chart_data = this.boy_height_24_60_chart_data;

        var x_adjust = 0;
        var y_adjust = 60;


        //set container ratio
        this.x_ratio = (this.gmp_container.clientWidth - this.container_padding_right - this.container_padding_left) / 36;
        this.y_ratio = (this.gmp_container.clientHeight - this.container_padding_top - this.container_padding_bottom) / 60;


        // //fill -3z
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.base, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F4A65F', 1);

        // //fill -3z to -2z
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z3m, y_adjust), 'none', '#F0CF23', 1);

        //  //fill -2z to -z1
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.z2m, y_adjust), this.point_adjust(chart_data.z1m, y_adjust), 'none', '#F4ED64', 1);

        // //fill -1z to +2Z
        this.fill_poly(this, this.point_adjust(chart_data.age, 24), this.point_adjust(chart_data.z1m, y_adjust), this.point_adjust(chart_data.z2p, y_adjust), 'none', '#9FD193', 1);

        this.draw_grid(0, 0, 36, 130, '#858484', 24, 60);



        // Draw Base line
        var base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.base);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        //console.log(new_base_points);

        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3m);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw median
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.median);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');


        //Draw +Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2p);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1p);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z1
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z1m);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw +Z3
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z3p);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //Draw -Z2
        base_points = this.generate_points_of_axis_json(chart_data.age, chart_data.z2m);
        var new_base_points = this.base_pont_adjust(base_points, 24, y_adjust);
        this.draw_poly_line(new_base_points, 1, 'black');

        //draw circle points
        var adjust_index = 0;
        chart_data.age.forEach(function (item) {
            console.log(item);
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.base[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.median[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z1m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z1p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z2m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z2p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z3m[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            self.draw_circle(self.get_x(item - 24), self.get_y(chart_data.z3p[adjust_index] - y_adjust), 2, 1, 'black', '', 'base-point');
            adjust_index++;
        });


        //Draw final chart
        this.draw_poly_line(this.base_pont_adjust(data, 0, 40), 2, "red", "none");

        //Draw Legend
        this.legend();

        //draw chart title
        this.chart_title('মেয়ে শিশুর উচ্চতা বৃদ্ধির চার্ট (২৪ - ৬০ মাস)', 150, 50);

        //Chart legend label
        this.legend_text('বয়স (মাস)', 340, 470);

        //Chart legend label
        this.legend_text('উচ্চতা বৃদ্ধি (সে. মি.)', 30, 260, -90);

    }




}