function checkSpeed(args) {
    if(args.length === 2){

        let speed = args[0];
        let zone = args[1];
        let limit = getLimit(zone);
        let infraction = calcSpeed(speed, limit);

        if(infraction){
            console.log(infraction);
        }

        function getLimit(zone) {
            switch (zone){
                case 'motorway': return 130;
                case 'interstate': return 90;
                case 'city': return 50;
                case 'residential': return 20;
            }
        }

        function calcSpeed(speed, limit) {
            let overSpeed = speed - limit;

            if(overSpeed <= 0){
                return false;
            } else {
                if (overSpeed <= 20){
                    return 'speeding';
                } else if (overSpeed <= 40){
                    return 'excessive speeding';
                }else{
                    return 'reckless driving';
                }
            }
        }
    } else {
        console.log('Invalid input!');
    }


}

checkSpeed([40, 'city']);
checkSpeed([200, 'motorway']);
checkSpeed([120, 'interstate']);
checkSpeed([21, 'residential']);
checkSpeed(['motorway']);