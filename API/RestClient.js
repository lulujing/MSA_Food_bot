var request=require('request');
exports.getYelpData = function getData(url,bearer,session, callback){
    
        request.get(url,{'auth': { 'bearer': bearer}} ,function(err,res,body){
            if(err){
                console.log(err);
            }else {
                callback(body,session);
            }
        });
    };

 exports.getNutritionData = function getData(url, session, foodName, callback){
        
            request.get(url, function(err,res,body){
                if(err){
                    console.log(err);
                }else {
                    callback(body, foodName, session);
                }
            });
        };

    exports.getFavouriteFood = function getData(url, session, username, callback){
            request.get(url, {'headers':{'ZUMO-API-VERSION': '2.0.0'}}, function(err,res,body){
                if(err){
                    console.log(err);
                }else {
                    callback(body, session, username);
                }
            });
        };