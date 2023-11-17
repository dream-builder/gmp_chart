
const gmpcanvus = document.getElementById("gmp");
const ctx = gmpcanvus.getContext("2d");

const padding_top = 50;
const padding_right = 50;
const padding_bottom = 50;
const padding_left = 50;
        
const x_ratio= (gmpcanvus.width - padding_right - padding_left ) /24;
const y_ratio = (gmpcanvus.height - padding_top - padding_bottom) / 17;

const age = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

//+3z
const z3p = [5,6.4,7.5,8.5,9.4,10,10.6,11.1,11.5,12,12.4,12.8,13.1,13.5,13.8,14.1,14.3,15.1,15.4,15.6,16,16.4,16.7,17];

//-3Z
const z3m =[2,2.7,3.4,4,4.4,4.8,5.1,5.3,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.7,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1]

//-2Z
const z2m =[2.4,3.2,3.9,4.5,5,5.4,5.7,6,6.3,6.5,6.7,6.9,7,7.2,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9];

//-1Z
const z1m = [2.8,3.6,4.5,5.2,5.7,6.1,6.5,6.8,7,7.3,7.5,7.7,7.9,8.1,8.3,8.5,8.7,8.9,9.1,9.2,9.4,9.6,9.8,10,10.2];    

//+1Z
const z1p = [3.7,4.7,5.8,6.5,7.3,7.8,8.2,8.6,9,9.3,9.6,9.9,10.1,10.4,10.6,10.9,11.1,11.4,11.6,11.8,12.1,12.3,12.5,12.8,13];    

//+2Z
const z2p = [4.2,5.5,6.5,7.5,8.1,8.7,9.3,9.8,10.2,10.5,10.9,11.2,11.5,11.8,12,12.4,12.6,12.9,13.2,13.5,13.7,14,14.3,14.6,14.8];

//median
const m = [3.2,4.2,5.1,5.8,6.4,6.9,7.3,7.6,7.9,8.2,8.5,8.7,8.9,9.2,9.4,9.6,9.8,10,10.2,10.4,10.6,10.9,11.1,11.3,11.5];

//base line
const base = [1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.5,3.7,3.9,4,4.2,4.4,4.5,4.6,4.8,4.9,5,5.1,5.2,5.3,5.4,5.4,5.5];


//Draw Base point in backgrouind
draw_base_points();

//draw +3Z line    
draw_line(age,z3p,1,'red');

//draw -3Z line    
draw_line(age,z3m,1,'green');

//Draw Mwdian
draw_line(age, m, 1, 'pink');

//draw -2Z line
draw_line(age, z2m, 1, 'blue');

//draw -1Z line
draw_line(age, z1p, 1, 'black');

//draw -1Z line
draw_line(age, z2p, 1, 'black');

//draw -1Z line
draw_line(age, z1m, 1, 'yellow');

//draw base line
draw_line(age, base,1,'black');

//draw_shape(age, base, z3m, 'red');


        

var child = [1.5,2,2.2,3,0,0,0,0,0,0,0,6,10];

for(i=0;i<= child.length; i++){

    draw_circle( get_x(age[i]), get_y(child[i]),5,1,'green','orange');

    console.log (child[i] * y_ratio);

}



function draw_shape(age, range1, range2,color){

    console.log(range2[0]);
        ctx.beginPath();
        ctx.moveTo(age[0], 550-range1[0]*30);
        ctx.lineTo(age[0], 550-range2[0]*30);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.stroke();

        console.log(range1.length);


        ctx.beginPath();
        ctx.moveTo(age[age.length-2]*30, 550-range1[range1.length-1]*30);
        ctx.lineTo(age[age.length-2]*30, 550-range2[range2.length-1]*30);;
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.stroke();
        
        //ctx.fillStyle = color;
        
        ctx.closePath();
        ctx.fill();

}
    

function draw_line(age,weight,line_width,color){

    var last_item;
    
    age.forEach(function(item){

        start_x = get_x(item); 
        start_y = get_y(weight[item]); 

        //Draw +3Z
        if(item+1 < 24){
            end_x = get_x (item+1);
            end_y = get_y (weight[item+1]);
        }
        else
        {
            end_x = start_x;
            end_y = start_y;
        }

        ctx.beginPath();
        ctx.moveTo(start_x, start_y);
        ctx.lineTo(end_x, end_y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.stroke();

        draw_circle(start_x, start_y,2, 1, 'black', 'green');

        last_item = weight[item];

    });

    ctx.fillText(" " + last_item, start_x, start_y );
        


}


function draw_base_points(){

    age.forEach(function(item) {
        
        for(i = base[item]; i <= z3p[item]; i+=.1){
            draw_circle( get_x(item),  get_y(i),2,0,'','white');    

            console.log(i);
        }
        
    });

}

function get_x(x){
    return padding_left + x*x_ratio;
}

function get_y(y){
    return gmpcanvus.height - padding_bottom - (y_ratio * y);
}

function draw_circle(x,y,r,border_width,border_color, fill_color){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = fill_color;
    ctx.strokeStyle = border_color;
    ctx.lineWidth = border_width;

    ctx.stroke();  
    ctx.fill();

    //ctx.fillText(y, x , y ); 

}
