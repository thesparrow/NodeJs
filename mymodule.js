var fs = require('fs'), 
	path = require('path'); 

function extension(ext){
	var name = path.extname(element);
	return (name === '.' + ext); 
};

module.exports = function(pathFile, ext, callback){
    
    ext = '.' + ext; 
    
    fs.readdir(pathFile, function(err, list){
        if(err){
            return callback(err);
        }
        
        var filtered = [];
        list.forEach(function(file){
            if(path.extname(file) == ext){
                filtered.push(file);        
            }
        });
        //call back brings back the list
        return callback(null,list);  
    });
}