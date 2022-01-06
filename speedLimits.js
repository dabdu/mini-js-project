function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit+kmPerPoint){
        return "ok";
    }else{
        let points = (speed-speedLimit) / kmPerPoint;
        newPoints=Math.floor(points);
        if(newPoints >= 12){
            return "License Suspended";
        }else{
            return newPoints;
        }
        
        // if(points >= 12){
        //     return "License Suspended";
        // }else{

        // }
    }
}

console.log(checkSpeed(71))